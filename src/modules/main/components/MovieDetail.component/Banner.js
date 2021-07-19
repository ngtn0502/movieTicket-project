import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FaPlay } from 'react-icons/fa';
import { SHOW_MODAL } from '../../../redux/actions/constantsAction';

// Cause lack of trailer in api i use hard link

const trailer = 'https://www.youtube.com/embed/K0eDlFX9GMc';

function Banner({ movie }) {
  const dispatch = useDispatch();

  return (
    <Wrapper className="movieCard__img">
      <FaPlay
        className="playVideo"
        onClick={() => {
          dispatch({ type: SHOW_MODAL, payload: trailer });
        }}
      />
      <div className="overlay" />
      <img src={movie.hinhAnh} alt="movie" />
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.div`
  img {
    border-radius: var(--radius);
    display: block;
    height: 20rem;
    width: 100%;
  }
  .movieCard__img {
    position: relative;
    overflow: hidden;

    .playVideo {
      position: absolute;
      height: 3rem;
      width: 3rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: var(--transition);
      cursor: pointer;
      z-index: 2;
      fill: white;
      &:hover {
        fill: var(--color-gray-600);
      }
    }
    img {
      cursor: pointer;
    }
    &:hover .overlay {
      opacity: 1;
    }
    &:hover .playVideo {
      opacity: 1;
    }
  }
`;
