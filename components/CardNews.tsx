import React from "react";
import Image from "next/image";
import Card from "./Card";
import { Article } from "../api";

const CardNews: React.FC<{ article: Article; className?: any }> = ({
  article,
  className,
}) => {
  return (
    <div
      className={`${className} flex flex-col sm:flex-row cursor-pointer bg-gray rounded-md`}
    >
      <div className="relative w-2/3 sm:w-1/3 self-center pt-2 sm:pt-0">
        <Image
          src={article.image}
          height="100%"
          width="100%"
          layout="responsive"
          objectFit="cover"
          alt={article.altText}
        />
      </div>

      <Card header={article.title} className="rounded-r-md">
        <div>
          <span>{article.date}</span>
        </div>
        <p>{article.headline}</p>
      </Card>
    </div>
  );
};

export default CardNews;
