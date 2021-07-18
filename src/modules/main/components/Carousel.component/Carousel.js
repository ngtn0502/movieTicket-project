import React from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Carousel({ movieList }) {
  return (
    <Wrapper>
      <Swiper
        spaceBetween={30}
        centeredSlides
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation
        className="mySwiper"
      >
        {movieList.slice(28, 35).map((movie) => (
          <SwiperSlide>
            <img src={movie.hinhAnh} alt="movie" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    display: block;
    height: 90vh;
    width: 100%;
  }
  .swiper-pagination-bullet {
    height: 1rem;
    width: 1rem;
    background: var(--clr-primary-8);
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 5rem;
    height: 5rem;
    color: var(--color-gray-0);
  }
  .swiper-pagination {
    bottom: 3rem;
  }
`;
