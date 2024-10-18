"use client";

import React from 'react';

interface Card {
  number: number;
  text: string;
}

interface ByTheNumbersCardProps {
  cards: Card[]; 
}

export function ByTheNumbersCard({
  cards
}: ByTheNumbersCardProps) {
  return (
    <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
        {cards.map((card, index) => (  
            <div key={index} className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                {card.number}
            </h2>
            <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                {card.text}
            </p>
            </div>
        ))}
        </div>
    </div>
    );
  };
  
  export default ByTheNumbersCard;
  