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
      <meta
        name="description"
        content="Latest news articles and development about Vislit."
      />
    </Head>

    <h1 className="text-center">Latest news</h1>
    <ul className="flex flex-col items-center">
      {articles?.map((article) => (
        <li key={article.id} className="w-full max-w-4xl md:max-h-[350px]">
          <Link href={`/news/${article.id}`}>
            <a>
              <CardNews article={article} className="my-8" />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default News;
