"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgersCard from "./BurgersCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const PopularBurger = () => {
  return (
    <div className=" pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className=" text-red-600"> Burgers</span>
      </h1>
      <div className=" w-[80%] mt-[4rem] mx-auto ">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          {/* BurgersCard */}
          <BurgersCard
            title="Spicy Inferno"
            image="/images/b1.png"
            reviews="8"
            price="10.88$" />
          <BurgersCard
            title="Garlic Butter Bliss"
            image="/images/b2.png"
            reviews="6"
            price="14.88$" />

          <BurgersCard
            title="Juicy Jackpot"
            image="/images/b3.png"
            reviews="10"
            price="17.88$" />
          <BurgersCard
            title="Beefy Bite"
            image="/images/b4.png"
            reviews="4"
            price="10.88$" />

          <BurgersCard
            title="Buffalo Burn"
            image="/images/b5.png"
            reviews="6"
            price="16.88$" />
          <BurgersCard
            title="The Cowboy Classic"
            image="/images/b6.png"
            reviews="9"
            price="13.88$" />

          <BurgersCard
            title="The Double Decker"
            image="/images/b7.png"
            reviews="10"
            price="14.88$" />
          <BurgersCard
            title="BBQ Bliss"
            image="/images/b8.png"
            reviews="6"
            price="9.88$" />

          <BurgersCard
            title="Maple Bacon Blast"
            image="/images/b9.png"
            reviews="9"
            price="12.88$" />

        </Carousel>

      </div>
    </div>
  );
};

export default PopularBurger;
