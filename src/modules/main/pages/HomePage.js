import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel.component/Carousel';
import { getData } from '../../redux/actions/getDataAction';
import SearchBar from '../components/Search.component/SearchBar.js';
import MovieList from '../components/MovieList.component/MovieList';

function HomePage() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieReducer.movieList);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="page-100">
      <Carousel movieList={movieList} />
      <SearchBar />
      <MovieList movieList={movieList} />
    </div>
  );
}

export default HomePage;
