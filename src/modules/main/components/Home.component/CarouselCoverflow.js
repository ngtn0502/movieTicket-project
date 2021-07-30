import React from 'react';
import { Carousel } from '3d-react-carousal';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { SHOW_MODAL } from '../../../redux/actions/constantsAction.js';
import { carouselBackground } from '../../../utils/constants.js';

function CarouselCoverflow({ movieList }) {
  const dispatch = useDispatch();
  const silde = [
    movieList.slice(5, 10).map((movie) => (
      <div className="carousel__slider">
        <FaPlay
          className="playVideo"
          onClick={() => {
            dispatch({ type: SHOW_MODAL, payload: movie.trailer });
          }}
        />
        <img src={movie.hinhAnh} alt="5" className="slider" />
      </div>
    )),
  ];
  return (
    <BigWrapper>
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
  );
}

export default CarouselCoverflow;
const BigWrapper = styled.div`
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
  @media screen and (min-width: 700px) {
    .App {
      padding-bottom: 10rem;
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
