import Head from "next/head";
import Image from "next/image";
import { Article, getArticles } from "../api";

export function getStaticProps() {
  const articles: Article[] = getArticles();
  return {
    props: {
      articles,
    },
  };
}

const Home: React.FC<{ articles: Article[] }> = ({ articles }) => {
  console.log(articles);
  return (
    <>
      <Head>
        <title>Vislit</title>
      </Head>
      <h1>Home</h1>
      {articles.map(({ id, title, headline, image }) => (
        <div key={id}>
          <Image src={image} height={400} width={400} alt={"test"} />
          <h2>{title}</h2>
          <p>{headline}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
