import React, { ReactNode } from "react";
import Image from "next/image";
import Card from "./Card";

const CardFeature: React.FC<{
  header: string;
  isReverse?: boolean;
  children: ReactNode;
  className?: any;
}> = ({ header, isReverse = false, children, className }) => {
  return (
    <div
      className={`${className} flex ${
        isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col max-w-5xl max-h-600px`}
    >
      <div className="relative w-4/5 lg:w-1/2">
        <Image
          src={"/images/home/writer.webp"}
          height="100%"
          width="100%"
          layout="responsive"
          objectFit="cover"
          alt={"something"}
        />
      </div>

      <Card
        header={header}
        className="w-4/5 lg:w-1/2 rounded-none rounded-r-md"
      >
        {children}
      </Card>
    </div>
  );
};

export default CardFeature;
