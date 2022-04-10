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
      <nav className="bg-gray">
        <Link href="/">Home</Link>
        <Link href="/features">Features</Link>
        <Link href="/news">News</Link>
        <Link href="/about">About</Link>
        <Link href="/download">Download</Link>
      </nav>

      <main className="grow mx-10">{children}</main>

      <footer className="bg-gray">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
