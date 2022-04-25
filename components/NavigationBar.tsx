import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";

function debounce(fn: Function, ms: number) {
  let timer: any;
  function setDebounce() {
    timer = null;
    fn.apply(this, arguments);
  }
  return () => {
    clearTimeout(timer);
    timer = setTimeout(setDebounce, ms);
  };
}

const NavigationBar = () => {
  const { asPath } = useRouter();
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // track window width in state
  useEffect(() => {
    const debounceHandleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 20);
    window.addEventListener("resize", debounceHandleResize);
    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, []);

  // handle change from mobile to desktop + resetting state
  useEffect(() => {
    if (windowWidth > 768) {
      setIsMobile(false);
      if (isHamburgerOpen) setIsHamburgerOpen(false);
    } else {
      if (!isMobile) setIsMobile(true);
    }
  }, [windowWidth]);

  return (
    <nav
      className={`flex justify-center text-lg py-2 bg-gray font-black tracking-wide min-h-[46px] ${
        isMobile && isHamburgerOpen && "absolute h-full w-full items-start"
      }`}
    >
      <div
        className={`flex mx-8 ${isMobile && "w-full"} ${
          isMobile && isHamburgerOpen && "flex-col w-full"
        }`}
      >
        <div className="flex justify-between w-full">
          <Link href="/">
            <div className="cursor-pointer self-start">
              <Logo />
            </div>
          </Link>

          <button
            className={`${isMobile ? "" : "hidden"}`}
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            Burger
          </button>
        </div>

        <div>
          <ul
            className={`${isMobile ? "text-right" : "flex"} ${
              // if we're mobile and the hamburger is open, show list as a column
              // but if we're not mobile, show as row. If we're mobile, hide row
              isMobile && isHamburgerOpen
                ? "flex flex-col"
                : !isMobile
                ? "flex"
                : "hidden"
            }`}
          >
            {isMobile && (
              <li
                className={`nav-link mt-6 mb-2 ${
                  asPath === "/" && "active-nav-link"
                }`}
              >
                <Link href="/">HOME</Link>
              </li>
            )}

            <li
              className={`nav-link ${
                asPath === "/features" && "active-nav-link"
              } ${isMobile ? "my-2" : "mx-4"}`}
            >
              <Link href="/features">FEATURES</Link>
            </li>

            <li
              className={`nav-link ${asPath === "/news" && "active-nav-link"} ${
                isMobile ? "my-2" : "mx-4"
              }`}
            >
              <Link href="/news">NEWS</Link>
            </li>

            <li
              className={`nav-link ${
                asPath === "/about" && "active-nav-link"
              } ${isMobile ? "my-2" : "mx-4"}`}
            >
              <Link href="/about">ABOUT</Link>
            </li>

            <li
              className={`nav-link ${
                asPath === "/download" && "active-nav-link"
              } ${isMobile ? "my-2" : "mx-4"}`}
            >
              <Link href="/download">DOWNLOAD</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
