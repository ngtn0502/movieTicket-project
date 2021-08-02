import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import MovieClass from './MovieClass';
import { FlexHCenter } from '../../../utils/mixin';
import { randomDuration } from '../../../utils/helper';
// import playVideo from '../../../assets/img/play-video.png';
import { SHOW_MODAL } from '../../../redux/actions/constantsAction';

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="movieCard__img">
        <FaPlay
          className="playVideo"
          onClick={() => {
            dispatch({ type: SHOW_MODAL, payload: movie.trailer });
          }}
        />
        <Link to={`/movie-details/${movie.maPhim}`}>
          <div className="overlay" />
          <img src={movie.hinhAnh} alt="movie" />
        </Link>
      </div>
      <h5 className="name">
        <Link to={`/movie-details/${movie.maPhim}`}>
          <MovieClass checkClass={movie.tenPhim?.length % 2 === 0} />
          {movie.tenPhim}
        </Link>
      </h5>
      <p className="time">{randomDuration()} phút</p>
    </Wrapper>
  );
}

export default MovieCard;

const Wrapper = styled.div`
  margin-bottom: 2rem;
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
  .name {
    color: var(--color-emphasis-1000);
    padding-top: 1rem;
    font-size: 1rem;
    ${FlexHCenter()}
    line-height: 1.25;
  }
  .time {
    font-size: 1rem;
    color: var(--color-sub);
  }
  @media screen and (min-width: 700px) {
    img {
      height: 25rem;
    }
  }
`;
