import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Box, Image } from "@chakra-ui/react";
import { SlLike, SlDislike } from "react-icons/sl";
import { FaComment } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "https://picsum.photos/id/1/400/400",
  },
  {
    url: "https://picsum.photos/id/2/400/400",
  },
  //Second image url
  {
    url: "https://picsum.photos/id/3/400/400",
  },
  //Third image url
  {
    url: "https://picsum.photos/id/4/400/400",
  },

  //Fourth image url

  {
    url: "https://picsum.photos/id/5/400/400",
  },
];
const Slider = () => {
  return (
    <div className="parent" style={{ margin: "2rem" }}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index} style={{ marginLeft: "1rem" }}>
              <Image
                src={imageUrl.url}
                alt="movie"
                // fallbackSrc="https://via.placeholder.com/150"
                boxSize="310px"
              />
              <Box pos="absolute" bottom={"5"} left="5">
                <Button
                  colorScheme="whatsapp"
                  // variant={"outline"}
                  rounded="full"
                  p={"4"}
                >
                  <SlLike />
                </Button>
                <Button
                  colorScheme="facebook"
                  // variant={"outline"}
                  rounded="full"
                  m={"4"}
                >
                  <SlDislike />
                </Button>
                <Button colorScheme="blue" rounded="full" m={"4"}>
                  <FaComment />
                </Button>
              </Box>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
