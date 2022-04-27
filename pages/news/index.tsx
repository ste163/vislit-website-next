import Head from "next/head";
import Link from "next/link";
import { Article, getArticles } from "../../api";
import CardNews from "../../components/CardNews";

export const getStaticProps = () => {
  return {
    props: {
      articles: getArticles(),
    },
  };
};

const News: React.FC<{ articles: Article[] }> = ({ articles }) => (
  <>
    <Head>
      <title>News | Vislit </title>
    </Head>
    <h1>Latest</h1>
    {articles?.map((article) => (
      <Link key={article.id} href={`/news/${article.id}`}>
        <div>
          <CardNews article={article} className="my-8" />
        </div>
      </Link>
    ))}
  </>
);

export default News;
