import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import MovieClass from './MovieClass';
import { randomDuration } from '../../../utils/helper';
// import playVideo from '../../../assets/img/play-video.png';
import { SHOW_MODAL } from '../../../redux/actions/constantsAction';
import CircleLoading from '../CircleLoading.js';
import commingsoon from '../../../../assets/img/commingsoon.jpg';

export const loadingVariants2 = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
function MovieCard({ movie }) {
  const [isImgLoading, setIsImgLoading] = useState(false);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {' '}
      <motion.div
        variants={loadingVariants2}
        initial="hidden"
        animate="visible"
        key={movie.maPhim}
      >
        <div className="movieCard__img">
          <FaPlay
            className="playVideo"
            onClick={() => {
              dispatch({ type: SHOW_MODAL, payload: movie.trailer });
            }}
          />
          <div className="movieCard__booking">
            <HashLink
              to={`/movie-details/${movie.maPhim}#movieDetail__booking`}
              type="button"
              className="btn__watching"
            >
              Available now
            </HashLink>
          </div>
          <Link to={`/movie-details/${movie.maPhim}`}>
            <div className="overlay" />
            {!isImgLoading && <CircleLoading className="loading" />}
            <img
              src={movie.hinhAnh || commingsoon}
              alt="movie"
              onLoad={() => setIsImgLoading(true)}
            />
          </Link>
        </div>
        <h5 className="nameMovie">
          <Link to={`/movie-details/${movie.maPhim}`}>
            <MovieClass checkClass={movie.tenPhim?.length % 2 === 0} />
            {movie.tenPhim}
          </Link>
        </h5>
        <p className="subNameMovie">{randomDuration()} minutes</p>{' '}
      </motion.div>
    </Wrapper>
  );
}

export default MovieCard;

const Wrapper = styled.div`
  margin-bottom: 2rem;
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    border-radius: var(--radius);
    display: block;
    height: 20rem;
    width: 100%;
  }
  .movieCard__img {
    position: relative;
    overflow: hidden;
    margin-bottom: 0.5rem;

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
    .movieCard__booking {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      opacity: 0;
      z-index: 2;
      transition: var(--transition);
      .btn__watching {
        margin: 0;
        padding: 0.5rem 1rem;
      }
    }
    img {
      cursor: pointer;
    }
    &:hover .movieCard__booking {
      opacity: 1;
    }
    &:hover .overlay {
      opacity: 1;
    }
    &:hover .playVideo {
      opacity: 1;
    }
  }

  @media screen and (min-width: 700px) {
    img {
      height: 25rem;
    }
  }
`;
