import React, { ReactNode } from "react";

const Card: React.FC<{
  header?: string;
  children: ReactNode;
  className?: any;
}> = ({ header, children, className }) => (
  <section className={`${className} bg-gray rounded-md px-10 py-8 max-w-5xl`}>
    {header ? <h2>{header}</h2> : null}
    {children}
  </section>
);

export default Card;
