import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { getMovieListAction } from '../../redux/actions/MovieAction/getMovieListAction';
import CarouselCoverflow from '../components/Home.component/CarouselCoverflow';
import MovieList from '../components/Home.component/MovieList';
import Modal from '../components/Modal';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import Loading from '../components/Loading.js';
import AlertModal from '../components/AlertModal.js';
import { loadingVariants } from '../../utils/constants.js';
import HomeBooking from '../components/Home.component/HomeBooking';
import { getCineplexLogoAction } from '../../redux/actions/HomeAction/getCineplexLogoAction.js';
import { getMovieByCineplex } from '../../redux/actions/HomeAction/getMovieByCineplex.js';
import HomeNews from '../components/Home.component/HomeNew.component/HomeNews.js';
import { getNewsAction } from '../../redux/actions/HomeAction/getNewsAction.js';
import SearchBar2 from '../components/Home.component/HomeSearch.component/SearchBar2.js';

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // movieList
  const { movieList, isLoading } = useSelector((state) => state.homeReducer);
  // cinema List
  useEffect(() => {
    // Dispatch action creator thunk to fetch data in action component
    dispatch(getMovieListAction());
    // Dispatch action creator thunk to get cineplex logo
    dispatch(getCineplexLogoAction());
    // Dispatch action creator thunk to get movie by cineplex
    dispatch(getMovieByCineplex());
    // Dispatch action creator thunk to get News data
    dispatch(getNewsAction());
  }, [dispatch]);
  // Get List Cinema
  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper className="page-100">
        {isLoading && <Loading />}
        <AnimatePresence>
          {isTrailerShow && (
            <>
              {/* eslint-disable */}
              <div
                className='backdrop'
                onClick={() => {
                  dispatch({ type: CLOSE_MODAL });
                }}
              />
              {/* eslint-enable */}

              <Modal trailer={trailer} />
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
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
        </AnimatePresence>

        {!isLoading && (
          <div>
            <CarouselCoverflow className="carousel__overflow" />
            <div id="homePage__search" />

            {/* <Carousel movieList={movieList} className="home__carousel" /> */}
            <SearchBar2 className="home__searchbar" />
            <MovieList movieLists={movieList} className="home__movieList" />
            <div id="homePage__booking" />
            <HomeBooking />
            <div id="homePage__news" />
            <HomeNews />
          </div>
        )}
      </Wrapper>
    </motion.section>
  );
}

export default HomePage;

const Wrapper = styled.section`
  .home__searchbar {
    /* display: none;
    margin-top: 0rem; */
  }
  @media screen and (min-width: 1000px) {
    .home__searchbar {
    }
  }
`;
