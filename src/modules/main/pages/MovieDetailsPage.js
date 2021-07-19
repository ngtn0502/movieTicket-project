import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getMovieDetailAction } from '../../redux/actions/getMovieDetailAction';

function MovieDetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const movieDetail = useSelector(
    (state) => state.movieDetailReducer.movieDetail
  );
  console.log(movieDetail);
  useEffect(() => {
    dispatch(getMovieDetailAction(params.id));
  }, [dispatch, params]);

  return <div>MovieDetailsPage</div>;
}

export default MovieDetailsPage;
