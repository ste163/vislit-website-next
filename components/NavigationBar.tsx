import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";

const NavigationBar = () => {
  // will need to dynamically change between mobile and desktop navbar
  // potentially get the initial size then dynamically change
  // or show/hide based on media queries (so no js)
  //dev.to/brandymedia/how-to-build-a-mobile-friendly-fully-responsive-website-navigation-using-tailwind-css-3ef9
  //www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/
  const router = useRouter();

  return (
    <nav className="flex justify-center items-center text-lg py-2 bg-gray font-black tracking-wide min-h-[46px]">
      <div className="flex mr-12">
        <Link href="/">
          <div className="cursor-pointer">
            <Logo />
          </div>
        </Link>

        <div
          className={`mx-5 nav-link ${
            router.asPath === "/features" && "active-nav-link"
          }`}
        >
          <Link href="/features">FEATURES</Link>
        </div>
        <div
          className={`nav-link ${
            router.asPath === "/news" && "active-nav-link"
          }`}
        >
          <Link href="/news">NEWS</Link>
        </div>
      </div>
      <div className="flex">
        <div
          className={`nav-link ${
            router.asPath === "/about" && "active-nav-link"
          }`}
        >
          <Link href="/about">ABOUT</Link>
        </div>
        <div
          className={`mx-5 nav-link ${
            router.asPath === "/download" && "active-nav-link"
          }`}
        >
          <Link href="/download">DOWNLOAD</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
