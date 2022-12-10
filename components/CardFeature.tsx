import React, { ReactNode } from "react";
import Image from "next/image";
import Card from "./Card";

const CardFeature: React.FC<{
  id: string;
  header: string;
  imageSrc: string;
  imageAlt: string;
  isReverse?: boolean;
  children: ReactNode;
  className?: any;
}> = ({
  id,
  header,
  imageSrc,
  imageAlt,
  isReverse = false,
  children,
  className,
}) => {
  return (
    <div
      id={id}
      className={`${className} flex ${
        isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col max-w-xl lg:max-w-5xl max-h-600px`}
    >
      <div className="block object-cover w-4/5 max-w-xl lg:w-1/2">
        <Image
          src={imageSrc}
          width="200"
          height="200"
          layout="responsive"
          alt={imageAlt}
        />
      </div>

      <Card header={header} className="w-4/5 lg:w-1/2 rounded-none">
        {children}
      </Card>
    </div>
  );
};

export default CardFeature;
