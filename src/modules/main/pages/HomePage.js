import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getMovieListAction } from '../../redux/actions/MovieAction/getMovieListAction';
import CarouselCoverflow from '../components/Home.component/CarouselCoverflow';
import MovieList from '../components/Home.component/MovieList';
import SearchBar from '../components/Home.component/SearchBar';
import Modal from '../components/Modal';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import Loading from '../components/Loading.js';
import AlertModal from '../components/AlertModal.js';

function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  // ui
  const uiState = useSelector((state) => state.uiReducer);
  const { isTrailerShow, trailer } = uiState;
  const { isModalShow, message, goTo, type, message2 } = useSelector(
    (state) => state.uiReducer.modal
  );
  // close modal
  const closeModalHandler = () => {
    dispatch({ type: CLOSE_MODAL });
    // goTo depend on what modal appear for
    if (goTo) {
      history.push(goTo);
    }
  };
  // movieList
  const { movieList, isLoading } = useSelector(
    (state) => state.movieListReducer
  );
  // cinema List
  useEffect(() => {
    // Dispatch action creator thunk to fetch data in action component
    dispatch(getMovieListAction());
  }, [dispatch]);
  // Get List Cinema
  return (
    <Wrapper className="page-100">
      {isLoading && <Loading />}
      {isTrailerShow && (
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
      {isModalShow && (
        <div>
          {/* eslint-disable */}
          <div className='backdrop' onClick={closeModalHandler} />
          {/* eslint-enable */}
          <AlertModal
            message={message}
            goTo={goTo}
            type={type}
            message2={message2}
          />
        </div>
      )}
      {!isLoading && (
        <div>
          <CarouselCoverflow movieList={movieList} />
          {/* <Carousel movieList={movieList} className="home__carousel" /> */}
          <SearchBar className="home__searchbar" />
          <MovieList movieList={movieList} className="home__movieList" />
        </div>
      )}
    </Wrapper>
  );
}

export default HomePage;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 110;
`;

const Wrapper = styled.section`
  .home__searchbar {
    display: none;
    margin-top: 0rem;
  }
  @media screen and (min-width: 1000px) {
    .home__searchbar {
      display: flex;
    }
  }
`;
