import Head from "next/head";
import Image from "next/image";
import { Article, getArticles } from "../api";

export const getStaticProps = () => {
  return {
    props: {
      articles: getArticles(),
    },
  };
};

const Home: React.FC<{ articles: Article[] }> = ({ articles }) => {
  console.log(articles);
  return (
    <>
      <Head>
        <title>Vislit</title>
      </Head>
      <h1>Home</h1>
      {articles.map(({ id, title, headline, image, contentHtml }) => (
        <div key={id}>
          <Image src={image} height={400} width={400} alt={"test"} />
          <h2>{title}</h2>
          <p>{headline}</p>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      ))}
    </>
  );
};

export default Home;
