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

      <main className="grow mx-10">{children}</main>

      <footer className="bg-gray">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
