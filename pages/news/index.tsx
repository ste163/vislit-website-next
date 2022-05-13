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

    <h1 className="text-center">Latest news</h1>
    <ul className="flex flex-col items-center">
      {articles?.map((article) => (
        <li key={article.id} className="w-full max-w-5xl max-h-[400px]">
          <Link href={`/news/${article.id}`}>
            <div>
              <CardNews article={article} className="my-8" />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default News;
