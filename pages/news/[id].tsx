import Head from "next/head";
import { Article, getAllArticleIds, getArticleById } from "../../api";

export const getStaticPaths = () => {
  return {
    paths: getAllArticleIds(),
    fallback: false,
  };
};

export const getStaticProps = ({ params: { id } }) => {
  return {
    props: {
      article: getArticleById(id),
    },
  };
};

const NewsArticle: React.FC<{ article: Article }> = ({
  article: { title, headline, date, contentHtml },
}) => {
  return (
    <>
      <Head>
        <title>{title} | Vislit</title>
      </Head>
      <h1>{title}</h1>
      <p>{date}</p>
      <h2>{headline}</h2>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
};

export default NewsArticle;
