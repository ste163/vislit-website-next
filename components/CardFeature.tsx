import React, { ReactNode } from "react";
import Image from "next/image";
import Card from "./Card";

const CardFeature: React.FC<{
  id: string;
  header: string;
  imageSrc: string;
  isReverse?: boolean;
  children: ReactNode;
  className?: any;
}> = ({ id, header, imageSrc, isReverse = false, children, className }) => {
  return (
    <div
      id={id}
      className={`${className} flex ${
        isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col max-w-5xl max-h-600px`}
    >
      <div className="relative w-4/5 lg:w-1/2">
        <Image
          src={imageSrc}
          height="100%"
          width="100%"
          layout="responsive"
          objectFit="cover"
          alt={"something"}
        />
      </div>

      <Card header={header} className="w-4/5 lg:w-1/2 rounded-none">
        {children}
      </Card>
    </div>
  );
};

export default CardFeature;
