import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Article, getArticles } from "../api";
import LogoTitle from "../components/LogoTitle";

export const getStaticProps = () => {
  return {
    props: {
      articles: getArticles(),
    },
  };
};

const Home: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Vislit</title>
      </Head>

      <section className="flex flex-col align-center lg:flex-row">
        <div className="mr-8 w-1/2 self-center">
          <LogoTitle />
          <h2 className="font-black text-4xl mt-12 mb-6">
            the app for writers
          </h2>
          <p className="text-lg max-w-lg mb-6">
            Write and manage short stories, novels, poems, or any writing
            project. Keep your notes, goals, and documents cleanly organized and
            accessible.
          </p>

          <div className="card flex px-5 py-5 items-center max-w-2xl">
            <p className="w-1/2 mr-4">
              Vislit is free and open source software made by a creative writer.
              Quality writing software should be available to anyone who wants
              to finish that first novel or tenth.
            </p>

            <div className="w-1/2 flex flex-col items-center">
              <Link href="/download">
                <div className="bg-black flex flex-col items-center px-4 py-2 rounded-md">
                  <span className="text-2xl font-bold">Download</span>

                  <div className="bg-primary font-black text-3xl my-2 px-3 py-1 ">
                    v1.0
                  </div>

                  <span>Linux, Mac, Windows</span>
                </div>
              </Link>
              <Link href="/features">
                <span className="cursor-pointer text-2xl font-bold text-center mt-2">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
        </div>

        <Image
          className="w-1/2"
          src={"/images/test-image.png"}
          height={400}
          width={600}
          alt={"test"}
        />
      </section>

      {/* {articles.map(({ id, title, headline, image }) => (
        <div key={id}>
          <Link href={`/news/${id}`}>
            <div>
              <Image src={image} height={100} width={100} alt={"test"} />
              <a>{title}</a>
              <p>{headline}</p>
            </div>
          </Link>
        </div>
      ))} */}
    </>
  );
};

export default Home;
