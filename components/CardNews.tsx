import Image from "next/image";
import React from "react";
import { Article } from "../api";
import Card from "./Card";

const CardNews: React.FC<{ article: Article; className?: any }> = ({
  article,
  className,
}) => {
  return (
    <div className={`${className} flex max-w-5xl max-h-[400px]`}>
      <div className="relative w-1/3 max-h-[400px]`">
        <Image
          src={article.image}
          height="100%"
          width="100%"
          layout="responsive"
          objectFit="cover"
          alt={article.altText}
        />
      </div>

      <Card header={article.title} className="w-2/3 rounded-none rounded-r-md">
        <div>
          <span>{article.date}</span>
        </div>
        <p>{article.headline}</p>
      </Card>
    </div>
  );
};

export default CardNews;
