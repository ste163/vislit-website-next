import React, { ReactNode } from "react";

const Card: React.FC<{
  header: string;
  children: ReactNode;
  className?: any;
}> = ({ header, children, className }) => (
  <section className={`${className} bg-gray rounded-md px-6 py-4`}>
    <h2 className="mb-4">{header}</h2>
    {children}
  </section>
);

export default Card;
