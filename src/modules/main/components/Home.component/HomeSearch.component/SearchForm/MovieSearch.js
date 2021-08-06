import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BiMovie } from 'react-icons/bi';
import { FaCity } from 'react-icons/fa';
import { MdTheaters } from 'react-icons/md';
import dateFormat from 'date-format';
import { Link, useHistory } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  cityList,
  exitVariants,
  loadingVariants3,
  movieCategory,
  toDay,
} from '../../../../../utils/constants';
import { getMovieDetailAction } from '../../../../../redux/actions/MovieAction/getMovieDetailAction';
import { getDay } from '../../../../../utils/helper.js';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    width: '100%',
    paddingTop: '1rem',
    margin: '0 0 1rem',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MovieSearch() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [movie, setMovie] = useState('');
  const { movieList } = useSelector((state) => state.homeReducer);
  const [city, setCity] = useState('');
  const [dates, setDates] = useState('');

  const handleChange = (event) => {
    setMovie(event.target.value);
    dispatch(getMovieDetailAction(event.target.value));
  };
  console.log('movieList', movieList);
  const movieAfterToday = movieList.filter(
    (item) => new Date(item.ngayKhoiChieu) > toDay
  );
  const movieChoose = movieAfterToday.filter((item) => item.maPhim === movie);
  console.log('movieChoose', movieChoose);

  return (
    <Wrapper>
      <div>
        <FormControl variant="" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            <BiMovie />
            Phim
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={movie}
            onChange={handleChange}
            label="Phim"
          >
            {movieAfterToday.map((item) => (
              <MenuItem value={item.maPhim}>{item.tenPhim}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <FormControl variant="" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            <FaCity />
            Thành Phố
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
            label="City"
          >
            {cityList.map((item) => (
              <MenuItem value={item.maCity}>{item.tenCity}</MenuItem>
            ))}
          </Select>
        </FormControl> */}
      </div>
      <AnimatePresence>
        <motion.div
          variants={loadingVariants3}
          initial="hidden"
          animate="visible"
          // exit={exitVariants}
          key={movieChoose[0]?.maPhim}
        >
          <div />
          {movie === '' ? null : (
            <div className="movie__picture">
              <div>
                {/* eslint-disable */}
                <img
                  src={movieChoose[0].hinhAnh}
                  alt=''
                  onClick={() => {
                    history.push(`/movie-details/${movieChoose[0].maPhim}`);
                  }}
                />{' '}
                {/* eslint-enable */}
              </div>
              <div>
                <Link
                  to={`/movie-details/${movieChoose[0].maPhim}`}
                  className="booking__button"
                >
                  Avaiable Now
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  #demo-simple-select-outlined-label {
    display: flex;
    font-size: 1.25rem;
    gap: 1rem;
    color: #31d7a9;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .MuiInput-formControl {
    width: 100%;

    &::before {
      border-bottom: 1px solid var(--color-white);
    }
    .MuiSelect-icon,
    .MuiInput-input {
      font-size: 1.25rem;
      color: var(--color-white);
    }
  }
  .movie__picture {
    margin: 1rem 0;
    /* display: flex; */
    img {
      max-width: 80%;
      cursor: pointer;
      border-radius: var(--radius);
      margin: 0 auto;
    }
    div {
      padding-top: 1rem;
      display: flex;
      justify-content: center;
      .booking__button {
        font-size: 1.25rem;
        height: 3.5rem;
      }
    }
  }
  @media screen and (min-width: 576px) {
    .movie__picture {
      margin: 0;
      img {
        max-width: 60%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .movie__picture {
      img {
        max-width: 20%;
      }
    }
  }
`;
