import React from "react";

type CardProps = {
  h1Text: string;
  mainText: string;
  bonusText: string;
  additionalClasses: string;
};

export function Card({
  h1Text,
  mainText,
  bonusText,
  additionalClasses,
}: CardProps) {
  return (
    <div>
      <div className={`w-20 bg-red-600 p-40 ${additionalClasses}`} />
      <div className="absolute m-6 bottom-0 z-30 mb-28 md:ml-40">
        <h1 className="w-64 text-3xl font-semibold leading-8 mt-2 text-white underline">
          {h1Text}
        </h1>
        <p className="mt-4 text-base font-medium leading-4 text-white">
          {mainText}
        </p>
        <p className="text-sm leading-none text-white ">{bonusText}</p>
      </div>
    </div>
  );
}

export default Card;
