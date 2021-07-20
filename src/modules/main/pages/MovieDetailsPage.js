import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getMovieDetailAction } from '../../redux/actions/getMovieDetailAction';
import Banner from '../components/MovieDetail.component/Banner';
import { getMovieListAction } from '../../redux/actions/getMovieListAction';
import Modal from '../components/Modal';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import MovieInfor from '../components/MovieDetail.component/MovieInfor.js';

function MovieDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  // UI

  const uiState = useSelector((state) => state.uiReducer);
  const { isModalShow, trailer } = uiState;
  // Movie
  const movieDetail = useSelector(
    (state) => state.movieDetailReducer.movieDetail
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

  return (
    <Wrapper>
      <div className="page-100">
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
        <Banner movie={movieDetail || []} params={params} />
        <MovieInfor movieDetail={movieDetail} movie={movieDetail || []} />
      </div>
    </Wrapper>
  );
}

export default MovieDetailsPage;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 110;
`;

const Wrapper = styled.section`
  .page-100 {
    height: 100%;
  }
  background-color: var(--color-bg);
`;
