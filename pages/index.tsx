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

      <section>
        <LogoTitle />
        <h2 className="font-black text-4xl mt-8">the app for writers</h2>
        <p className="text-lg my-4 max-w-lg">
          Write and manage short stories, novels, poems, or any writing project.
          Keep your notes, goals, and documents cleanly organized and
          accessible.
        </p>
      </section>

      {articles.map(({ id, title, headline, image, contentHtml }) => (
        <div key={id}>
          <Image src={image} height={400} width={400} alt={"test"} />
          <Link href={`/news/${id}`}>
            <a>{title}</a>
          </Link>
          <p>{headline}</p>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      ))}
    </>
  );
};

export default Home;
