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
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

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
    if (windowWidth) {
      if (windowWidth > 768) {
        setIsMobile(false);
        if (isHamburgerOpen) setIsHamburgerOpen(false);
      } else {
        setIsMobile(true);
      }
    }
  }, [windowWidth, isHamburgerOpen]);

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

      <main className="grow mx-6 md:mx-16 mt-24">{children}</main>

      <footer className="flex flex-col justify-center md:flex-row bg-gray mt-24 py-6">
        <div className="max-w-sm mx-8">
          <p>
            <span className="font-bold">Vislit</span> (a combination of visual +
            literature) is a free and open source desktop writing application
            released under the{" "}
            <a
              className="underline"
              href="https://www.gnu.org/licenses/agpl-3.0.en.html"
              target={"_blank"}
              rel="noreferrer"
            >
              AGPL-3 license
            </a>
            . The entire source code for this website and the application is
            available on{" "}
            <a
              className="underline"
              href="https://github.com/ste163/vislit"
              target={"_blank"}
              rel="noreferrer"
            >
              Github
            </a>
            .
          </p>
        </div>

        <ul className="font-bold mx-8 md:mt-0 mt-4 text-lg">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/features">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/download">
              <a>Download</a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
