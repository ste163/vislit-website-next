import React, { ReactNode } from "react";

const Card: React.FC<{
  header: string;
  children: ReactNode;
  className?: any;
}> = ({ header, children, className }) => (
  <section className={`${className} bg-gray rounded-md px-10 py-8`}>
    <h2 className="text-2xl md:text-3xl mb-8">{header}</h2>
    {children}
  </section>
);

export default Card;
