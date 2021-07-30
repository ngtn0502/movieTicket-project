import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getMovieDetailAction } from '../../redux/actions/MovieAction/getMovieDetailAction';
import Banner from '../components/MovieDetail.component/Banner';
import { getMovieListAction } from '../../redux/actions/MovieAction/getMovieListAction';
import Modal from '../components/Modal';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import MovieInfor from '../components/MovieDetail.component/MovieInfor';
import Loading from '../components/Loading.js';
import MovieDetailBooking from '../components/MovieDetail.component/MovieDetailBooking';

function MovieDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  // UI

  const uiState = useSelector((state) => state.uiReducer);
  const { isTrailerShow, trailer } = uiState;
  // Movie Detail
  const { movieDetail, isLoading } = useSelector(
    (state) => state.movieDetailReducer
  );
  const movieList = useSelector((state) => state.movieListReducer.movieList);
  const movie = movieList.find((item) => item.maPhim === Number(params.id));

  // movieList
  useEffect(() => {
    dispatch(getMovieListAction());
  }, [dispatch]);

  // movie detail
  useEffect(() => {
    dispatch(getMovieDetailAction(params.id));
  }, [dispatch, params]);
  console.log(movieDetail);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <div className="page-100">
        {isLoading && <Loading />}
        {isTrailerShow && (
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
        {!isLoading && (
          <div>
            <Banner movie={movieDetail || []} params={params} />
            <MovieInfor
              movieDetail={movieDetail || []}
              movie={movieDetail || []}
            />
            <MovieDetailBooking movie={movieDetail || []} />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default MovieDetailsPage;

const Backdrop = styled.div``;

const Wrapper = styled.section`
  background-color: var(--color-bg);
`;
