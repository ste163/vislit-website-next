import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  // will need to dynamically change between mobile and desktop navbar
  // potentially get the initial size then dynamically change
  // or show/hide based on media queries (so no js)

  return (
    <div className="h-full flex flex-col">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex justify-center items-center text-lg bg-gray font-black tracking-wide min-h-[40px]">
        <div className="mr-12">
          <Link href="/">Logo</Link>
          <span className="mx-5">
            <Link href="/features">FEATURES</Link>
          </span>
          <Link href="/news">NEWS</Link>
        </div>
        <div>
          <Link href="/about">ABOUT</Link>
          <span className="mx-5">
            <Link href="/download">DOWNLOAD</Link>
          </span>
        </div>
      </nav>

      <main className="grow mx-12 mt-12">{children}</main>

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
