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
  article: { title, headline, date },
}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <h2>{headline}</h2>
    </>
  );
};

export default NewsArticle;
