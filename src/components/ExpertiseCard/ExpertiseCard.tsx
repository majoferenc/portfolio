"use client";

import React from 'react';
import { HoverEffect } from "../ui/card-hover-effect";

interface Card {
  description: string;
  title: string;
  experience: string;
}

interface ExpertiseCardProps {
  cards: Card[]; 
}

export const iconContent =(
  <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" />
);

export function ExpertiseCard({
  cards
}: ExpertiseCardProps) {
  
  return (
      <div className="">
        <HoverEffect items={cards} />
      </div>
    );
  };
  
  export default ExpertiseCard;
  