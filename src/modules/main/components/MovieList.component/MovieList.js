import React from 'react';
import styled from 'styled-components';
//
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import MovieCard from './MovieCard';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

export default function Carousel({ movieList }) {
  return (
    <Wrapper className="section-middle">
      <Swiper
        spaceBetween={30}
        centeredSlides
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation
        className="mySwiper"
      >
        <SwiperSlide className="movie__list">
          {movieList.slice(1, 9).map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </SwiperSlide>
        <SwiperSlide className="movie__list">
          {movieList.slice(10, 18).map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 5rem;
  .swiper-slide {
    margin-right: 0;
  }
  .movie__list {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 1.5rem;
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
