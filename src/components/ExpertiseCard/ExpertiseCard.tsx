import React from 'react';


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

// @ts-ignore
export function ExpertiseCard({
  cards
}: ExpertiseCardProps) {
  
  return (
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-20 px-10 py-20 gap-6">
        {cards.map((card) => (
          <div>
            <div className="group w-full bg-white relative flex flex-col items-center hover:bg-yellow-400 cursor-pointer shadow-md md:p-12 p-4">
              <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                <svg
                  width={26}
                  height={27}
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    {iconContent}
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height={27}
                        fill="white"
                        transform="translate(25.2578 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:w-80 text-base leading-normal text-center mt-4">
                  {card.description}
                </p>
              </div>
              <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                <svg
                  width={34}
                  height={28}
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd)">
                    <path
                      d="M17 19L28.2583 3.25H5.74167L17 19Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <p className="text-base font-semibold leading-4 my-2 text-gray-800">
                {card.title}
              </p>
              <p className="text-base leading-4 text-center text-gray-600">
                {card.experience}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ExpertiseCard;
  