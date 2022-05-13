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
      className={`${className} flex flex-col sm:flex-col lg:flex-row max-w-5xl max-h-600px`}
    >
      {!isReverse ? (
        <div className="relative w-1/2">
          <Image
            src={"/images/test-image.png"}
            height="100%"
            width="100%"
            layout="responsive"
            objectFit="cover"
            alt={"something"}
          />
        </div>
      ) : null}

      <Card header={header} className="w-1/2 rounded-none rounded-r-md">
        {children}
      </Card>

      {isReverse ? (
        <div className="relative w-1/2">
          <Image
            src={"/images/test-image.png"}
            height="100%"
            width="100%"
            layout="responsive"
            objectFit="cover"
            alt={"something"}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CardFeature;
