import Head from "next/head";
import Link from "next/link";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-col">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />

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
