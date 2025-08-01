"use client";

import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Card } from "../Card/Card";
import ButtonBackComponent from "./ButtonBackComponent";
import ButtonNextComponent from "./ButtonNextComponent";

export default function Carousel() {
  return (
    <div className="2xl:mx-auto 2xl:container flex justify-center">
      <div className="2xl:px-20 px-16 py-12 w-full ">
        {/* Mobile View */}
        <CarouselProvider
          className="relative block sm:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite
          naturalSlideHeight={125}
        >
          <div className="flex justify-center items-center">
            <ButtonBackComponent />
            <Slider>
              <Slide index={0}>
                <Card
                  h1Text="Frontend"
                  mainText="Vue.js / React.js / Angular"
                  bonusText="For German Projects / Internal projects"
                  additionalClasses=""
                />
              </Slide>
              <Slide index={1}>
                <Card
                  h1Text="Backend"
                  mainText="Spring Boot / Java EE / Node.js"
                  bonusText="For German Projects / Internal projects"
                  additionalClasses=""
                />
              </Slide>
              <Slide index={2}>
                <Card
                  h1Text="DevOps"
                  mainText="Kubernetes / Cloudification / CI/CD"
                  bonusText="For German Projects / Internal projects"
                  additionalClasses=""
                />
              </Slide>
            </Slider>
            <ButtonNextComponent />
          </div>
        </CarouselProvider>

        {/* Desktop View */}
        <CarouselProvider
          className="relative hidden sm:block"
          naturalSlideWidth={100}
          isIntrinsicHeight
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite
          currentSlide={1}
          naturalSlideHeight={0}
        >
          <div className="js-flickity flex justify-center items-center">
            <ButtonBackComponent />
            <Slider className="carousel__sliderLarge">
              <Slide className="carousel__inner-slideLarge" index={0}>
                <Card
                  h1Text="Frontend"
                  mainText="Vue.js / React.js / Angular"
                  bonusText="For German Projects / Internal projects"
                  additionalClasses="md:pr-[28rem]"
                />
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={1}>
                <Card
                  h1Text="Backend"
                  mainText="Spring Boot / Java EE / Node.js"
                  bonusText="For German Projects / Internal projects"
                  additionalClasses="md:pr-[28rem]"
                />
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={2}>
                <Card
                  h1Text="DevOps"
                  mainText="Kubernetes / Cloudification / CI/CD"
                  bonusText="For German Projects / Internal projects"
                  additionalClasses="md:pr-[28rem]"
                />
              </Slide>
            </Slider>
            <ButtonNextComponent />
          </div>
        </CarouselProvider>
      </div>

      <style>
        {`
                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
      </style>
    </div>
  );
}
