import React from "react";
import Image from "next/image";
import Card from "./Card";
import { Article } from "../api";

const CardNews: React.FC<{ article: Article; className?: any }> = ({
  article,
  className,
}) => {
  return (
    <div className={`${className} flex cursor-pointer bg-gray rounded-md`}>
      <div className="relative w-1/3 self-center">
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
