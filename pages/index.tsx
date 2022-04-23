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

      <section className="flex">
        <div className="mr-8">
          <LogoTitle />
          <h2 className="font-black text-4xl mt-12 mb-6">
            the app for writers
          </h2>
          <p className="text-lg max-w-lg">
            Write and manage short stories, novels, poems, or any writing
            project. Keep your notes, goals, and documents cleanly organized and
            accessible.
          </p>
        </div>

        <Image
          src={"/images/test-image.png"}
          height={400}
          width={600}
          alt={"test"}
        />
      </section>

      {articles.map(({ id, title, headline, image }) => (
        <div key={id}>
          <Link href={`/news/${id}`}>
            <div>
              <Image src={image} height={100} width={100} alt={"test"} />
              <a>{title}</a>
              <p>{headline}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Home;
