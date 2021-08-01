import React, { useState } from 'react';
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
import { motion } from 'framer-motion';
import MovieCard from './MovieCard';
import { loadingVariants } from '../../../utils/constants.js';

// install Swiper modules
SwiperCore.use([Navigation]);

export default function Carousel({ movieList }) {
  const [typeMovie, setTypeMovie] = useState(true);
  // I have to fake type of Movie cause REST API does not support :(
  const fakeTypeMovie = typeMovie ? [0, 8] : [16, 24];
  const fakeTypeMovie2 = typeMovie ? [8, 16] : [16, 24];

  const currentMovieHandler = () => {
    setTypeMovie(true);
  };

  const comingMovieHandler = () => {
    setTypeMovie(false);
  };
  // Render movie list
  const renderMovieList = () => {
    for (let i = 18; i < movieList.length; i + 8) {
      return (
        <SwiperSlide className="movie__list">
          {movieList.slice(i, i + 8).map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </SwiperSlide>
      );
    }
  };
  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper className="section-middle">
        {/* id for scrolling in to purpose */}
        <div className="movieList__navigation" id="homePage__movieList">
          <button
            type="button"
            className={`btn2 ${typeMovie ? `btn2__active` : null}`}
            onClick={currentMovieHandler}
          >
            Đang chiếu
          </button>
          <button
            type="button"
            className={`btn2 ${!typeMovie ? `btn2__active` : null}`}
            onClick={comingMovieHandler}
          >
            Sắp chiếu
          </button>
        </div>
        {/* For screen > 800px */}
        <Swiper
          spaceBetween={30}
          centeredSlides
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          navigation
          className="mySwiper "
        >
          {typeMovie && (
            <>
              <SwiperSlide className="movie__list">
                {movieList.slice(0, 8).map((movie) => (
                  <MovieCard movie={movie} />
                ))}
              </SwiperSlide>
              <SwiperSlide className="movie__list">
                {movieList.slice(8, 16).map((movie) => (
                  <MovieCard movie={movie} />
                ))}
              </SwiperSlide>
            </>
          )}
          {!typeMovie && (
            <>
              <SwiperSlide className="movie__list">
                {movieList.slice(18, 26).map((movie) => (
                  <MovieCard movie={movie} />
                ))}
              </SwiperSlide>
              <SwiperSlide className="movie__list">
                {movieList.slice(26).map((movie) => (
                  <MovieCard movie={movie} />
                ))}
              </SwiperSlide>
            </>
          )}
        </Swiper>
        {/* For screen < 800px */}
        <div className="movie__list--mobile">
          {movieList.slice(0, 8).map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </Wrapper>{' '}
    </motion.section>
  );
}

const Wrapper = styled.main`
  background-attachment: fixed;
  position: relative;
  .mySwiper {
    display: none;
  }
  .movie__list--mobile {
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    gap: 1.5rem;
  }
  /* navigation */
  .movieList__navigation {
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    button {
      margin: 0 2rem;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  @media screen and (min-width: 800px) {
    margin-top: 7rem;
    .movie__list--mobile {
      display: none;
    }
    .movieList__navigation {
      button {
        font-size: 1rem;
      }
    }
    .mySwiper {
      display: block;
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
    .swiper-container {
      position: static;
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 5rem;
      height: 5rem;
      color: var(--color-white);
      z-index: 200;
      visibility: visible;
      top: 40%;
    }
    .swiper-button-prev {
      left: -7rem;
    }

    .swiper-button-next {
      right: -7rem;
    }
    .swiper-pagination {
      bottom: 3rem;
    }
  }
`;
