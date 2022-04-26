import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";

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

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // track window width in state
  useEffect(() => {
    // need to set width immediately
    setWindowWidth(window.innerWidth);

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

  // close hamburger on route change
  useEffect(() => {
    setIsHamburgerOpen(false);
  }, [pathname]);

  return (
    <div
      className={`h-full flex flex-col ${isHamburgerOpen && "overflow-hidden"}`}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar
        isMobile={isMobile}
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
      />

      <main className="grow mx-16 mt-16">{children}</main>

      <footer className="flex flex-col justify-center md:flex-row bg-gray mt-24 py-6">
        <div className="max-w-sm mx-8">
          <p>
            <span className="font-bold">Vislit</span> (a combination of visual +
            literature) is a free and open source desktop writing application
            released under the AGPL-3 license. The entire source code for this
            website and the application is available on{" "}
            <a className="underline" href="https://github.com/ste163/vislit">
              Github
            </a>
            .
          </p>
        </div>

        <ul className="font-bold mx-8 md:mt-0 mt-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/download">Download</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
