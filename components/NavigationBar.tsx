import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";

const NavigationBar: React.FC<{
  isMobile: boolean;
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: Function;
}> = ({ isMobile, isHamburgerOpen, setIsHamburgerOpen }) => {
  const { asPath } = useRouter();

  return (
    <nav
      className={`fixed w-full z-50 flex justify-center text-lg py-2 bg-gray font-black tracking-wide min-h-[46px] ${
        !isHamburgerOpen && "border-b-4 border-black"
      } ${isMobile && isHamburgerOpen && "absolute h-full w-full items-start"}`}
    >
      {isMobile === null ? null : (
        <>
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
                className={`${isMobile ? "hamburger-container" : "hidden"}`}
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              >
                <div
                  className={
                    isHamburgerOpen
                      ? "hamburger hamburger--active"
                      : "hamburger"
                  }
                ></div>
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
                  className={`nav-link ${
                    asPath === "/news" && "active-nav-link"
                  } ${isMobile ? "my-2" : "mx-4"}`}
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
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
