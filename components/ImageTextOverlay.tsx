import React from "react";
import Image from "next/legacy/image";

const ImageTextOverlay = ({ imageSrc, altText, heading, text }) => (
  <div className="grid max-w-lg">
    <div className="block col-start-1 row-start-1">
      <Image
        src={imageSrc}
        layout="responsive"
        objectFit="cover"
        height={100}
        width={100}
        alt={altText}
      />
    </div>

    <div className="bg-black bg-opacity-80 h-fit min-h-[8rem] relative py-3 px-4 col-start-1 row-start-1 place-self-end">
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default ImageTextOverlay;
