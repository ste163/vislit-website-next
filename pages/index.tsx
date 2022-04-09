import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Article, getArticles } from "../api";

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
      <h1>Home</h1>
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
