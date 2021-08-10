import React from 'react';
import { Carousel } from '3d-react-carousal';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SHOW_MODAL } from '../../../redux/actions/constantsAction.js';
import {
  carouselBackground,
  loadingVariants,
} from '../../../utils/constants.js';
import { carouselData } from '../../../utils/carouselData.js';

function CarouselCoverflow({ className }) {
  const dispatch = useDispatch();
  const silde = [
    carouselData.slice(0).map((movie) => (
      <div className="carousel__slider" key={movie.maPhim}>
        <FaPlay
          className="playVideo"
          onClick={() => {
            dispatch({ type: SHOW_MODAL, payload: movie.trailer });
          }}
        />
        <div className="carousel__button">
          <Link to={`/movie-details/${movie.maPhim}`}>
            <button type="button" className="btn__watching">
              Available Now
            </button>
          </Link>
        </div>
        {/* <Link to={`/movie-details/${movie.maPhim}`}> */}
        <img src={movie.hinhAnh} alt="5" className="slider" />
        {/* </Link> */}
      </div>
    )),
  ];
  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <BigWrapper className={className}>
        <div className="overlay" />
        <Wrapper
          style={{ backgroundImage: `url(${carouselBackground})` }}
          className="coverflow"
        >
          <div className="App">
            {/* <header className="App-header">
            <h1 className="App-title">/</h1>
          </header> */}
            <br />
            <br />
            <br />
            <Carousel slides={silde[0]} />
            {/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal} */}
          </div>
        </Wrapper>
      </BigWrapper>
    </motion.section>
  );
}
// Using React.memo to prevent re-render child component when parent component re-render - prevent every time CarouselCoverFlow re-render it will re-load the carousel again and harm to UX
export default React.memo(CarouselCoverflow);
const BigWrapper = styled.main`
  position: relative;
  .overlay {
    height: 100%;
    opacity: 1;
    background: linear-gradient(
      to top,
      var(--color-bg),
      rgba(10, 32, 41, 0.25)
    );
  }
`;
const Wrapper = styled.div`
  background-attachment: fixed;
  height: 44rem;
  .App {
    position: relative;
    z-index: 20;
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
  .carousel__slider {
    position: relative;
    &:hover .playVideo {
      opacity: 1;
    }
    &:hover .carousel__button {
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
      z-index: 100;
      transition: var(--transition);
      &:hover {
        color: var(--color-gray-700);
      }
    }
    .movieCard__booking {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      opacity: 0;
      z-index: 2;
      transition: var(--transition);
    }
    .carousel__button {
      position: absolute;
      opacity: 0;
      bottom: 0;
      left: 50%;
      width: 100%;
      transform: translate(-50%, 100%);
      transition: var(--transition);
      .btn__watching {
        /* font-size: 1.25rem; */
        width: 100%;
      }
    }
  }
  .carousel__slider:hover .booking__button {
    opacity: 1;
  }

  .slider-left,
  .slider-right {
    font-size: 1.5rem;
  }
  .slider-single {
    display: flex;
    justify-content: center;
  }
  .proactive,
  .preactive {
    .slider-single-content {
      opacity: 0.7 !important;
    }
  }
  .react-3d-carousel .slider-container .slider-content {
    width: 80%;
  }
  .slider-single-content {
    width: 80% !important;
    box-shadow: 10px 10px 10px rgb(0 0 0 / 50%);
  }
  .slider {
    width: 500px;
    height: 450px;
  }
  .react-3d-carousel .slider-container .slider-left div,
  .react-3d-carousel .slider-container .slider-right div {
    padding: 1rem;
    border: none;
  }
  @media screen and (min-width: 700px) {
    height: 65rem;
    .App {
      padding-bottom: 5rem;
    }
    .slider {
      width: 500px;
      height: 700px;
    }
    .slider-left,
    .slider-right {
      font-size: 2rem;
    }
  }
`;
