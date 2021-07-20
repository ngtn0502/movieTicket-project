import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { getMovieListAction } from '../../redux/actions/getMovieListAction';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import Modal from '../components/Modal';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import { getCinemaListAction } from '../../redux/actions/getCinemaListAction';

function HomePage() {
  const dispatch = useDispatch();
  // ui
  const uiState = useSelector((state) => state.uiReducer);
  const { isModalShow, trailer } = uiState;
  // movieList
  const movieList = useSelector((state) => state.movieListReducer.movieList);
  // cinema List
  useEffect(() => {
    // Dispatch action creator thunk to fetch data in action component
    dispatch(getMovieListAction());
  }, [dispatch]);
  // Get List Cinema
  return (
    <Wrapper className="page-100">
      {isModalShow && (
        <>
          <Backdrop
            className="backdrop"
            onClick={() => {
              dispatch({ type: CLOSE_MODAL });
            }}
          />
          <Modal trailer={trailer} />
        </>
      )}
      <Carousel movieList={movieList} className="home__carousel" />
      <SearchBar className="home__searchbar" />
      <MovieList movieList={movieList} className="home__movieList" />
    </Wrapper>
  );
}

export default HomePage;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 110;
`;

const Wrapper = styled.section`
  .home__searchbar {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    .home__searchbar {
      display: flex;
    }
  }
`;
