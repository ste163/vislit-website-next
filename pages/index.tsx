import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vislit</title>
        <meta name="description" content="the app for writers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <Link href="/features">Features</Link>
          <Link href="/news">News</Link>
          <Link href="/about">About</Link>
          <Link href="/download">Download</Link>
        </nav>
        <h1>Welcome to Vislit</h1>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
