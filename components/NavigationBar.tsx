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
      {
        // need to check for null because the first render is null
        isMobile === null ? null : (
          <>
            <div
              className={`flex mx-8 ${isMobile && "w-full"} ${
                isMobile && isHamburgerOpen && "flex-col w-full"
              }`}
            >
              <div className="flex justify-between w-full">
                <Link href="/">
                  <a className="cursor-pointer self-start">
                    <Logo />
                  </a>
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
                    // if mobile and the hamburger is open, show list as a column
                    // but if we're not mobile, show as row. Finally, if we're mobile, hide row
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
                      <Link href="/">
                        <a>HOME</a>
                      </Link>
                    </li>
                  )}

                  <li
                    className={`nav-link ${
                      asPath === "/features" && "active-nav-link"
                    } ${isMobile ? "my-2" : "mx-4"}`}
                  >
                    <Link href="/features">
                      <a>FEATURES</a>
                    </Link>
                  </li>

                  <li
                    className={`nav-link ${
                      asPath === "/news" && "active-nav-link"
                    } ${isMobile ? "my-2" : "mx-4"}`}
                  >
                    <Link href="/news">
                      <a>NEWS</a>
                    </Link>
                  </li>

                  <li
                    className={`nav-link ${
                      asPath === "/about" && "active-nav-link"
                    } ${isMobile ? "my-2" : "mx-4"}`}
                  >
                    <Link href="/about">
                      <a>ABOUT</a>
                    </Link>
                  </li>

                  <li
                    className={`nav-link ${
                      asPath === "/download" && "active-nav-link"
                    } ${isMobile ? "my-2" : "mx-4"}`}
                  >
                    <Link href="/download">
                      <a>DOWNLOAD</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )
      }
    </nav>
  );
};

export default NavigationBar;
