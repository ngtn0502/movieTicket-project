import React from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  CLOSE_MODAL,
  SHOW_MODAL,
} from '../../../redux/actions/constantsAction.js';
import Modal from '../Modal';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Carousel({ movieList }) {
  const uiState = useSelector((state) => state.uiReducer);
  const dispatch = useDispatch();
  const { isModalShow, trailer } = uiState;
  return (
    <Wrapper>
      {isModalShow && (
        <div className="section-middle">
          <Backdrop
            className="backdrop"
            onClick={() => {
              dispatch({ type: CLOSE_MODAL });
            }}
          />
          <Modal trailer={trailer} />
        </div>
      )}
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
          <SwiperSlide className="carousel__slide">
            <FaPlay
              className="playVideo"
              onClick={() => {
                dispatch({ type: SHOW_MODAL, payload: movie.trailer });
              }}
            />
            <img src={movie.hinhAnh} alt="movie" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}
const Backdrop = styled.div``;
const Wrapper = styled.div`
  display: none;
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
  .carousel__slide:hover .playVideo {
    opacity: 1;
  }
  .playVideo {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    color: var(--color-white);
    width: 5rem;
    height: 5rem;
    opacity: 0;
    transition: var(--transition);
    &:hover {
      color: var(--color-gray-700);
    }
  }

  @media screen and (min-width: 650px) {
    display: block;
    img {
      display: block;
      height: 70vh;
      width: 100%;
    }
  }

  @media screen and (min-width: 900px) {
    display: block;
    img {
      display: block;
      height: 90vh;
      width: 100%;
    }
  }
`;
