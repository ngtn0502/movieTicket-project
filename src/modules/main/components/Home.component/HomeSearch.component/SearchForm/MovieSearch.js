import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BiMovie } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import dateFormat from 'date-format';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineSchedule } from 'react-icons/ai';
import { loadingVariants3, today } from '../../../../../utils/constants';
import { getMovieDetailAction } from '../../../../../redux/actions/MovieAction/getMovieDetailAction';
import { getDay } from '../../../../../utils/helper.js';
import { FlexCenter } from '../../../../../utils/mixin.js';

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
  const classes = useStyles();
  // Handle choosen event
  const [movieChoose, setMovieChoose] = useState('');
  const [cinemaChoose, setCinemaChoose] = useState('');
  const [scheduleChoose, setScheduleChoose] = useState('');
  // Lấy danh sách phim
  const { movieList } = useSelector((state) => state.homeReducer);
  // Lấy lich chiếu của danh sách phim
  const { movieDetail, isLoading } = useSelector(
    (state) => state.movieDetailReducer
  );

  // Handle sự kiện chọn bộ phim mới
  const movieChooseHandler = (event) => {
    setMovieChoose(event.target.value);
    setCinemaChoose('');
    setScheduleChoose('');
    // Lấy chi tiết của bộ phim vừa mớI chọn, do API result về ko nằm chung
    dispatch(getMovieDetailAction(event.target.value));
  }; // Handle sự kiện chọn rạp chiếu
  const cinemaChooseHandler = (event) => {
    setCinemaChoose(event.target.value);
  };
  // Lấy những bộ phim chiếu sau ngày hôm nay
  const movieAfterToday = movieList.filter(
    (item) => new Date(item.ngayKhoiChieu) > today()
  );
  // Lấy những rạp có chiếu bộ phim này
  const cinemaByMovie = movieDetail?.lichChieu?.map(
    (item) => item.thongTinRap.tenCumRap
  );
  const cinemaByMovieUnique = [...new Set(cinemaByMovie)];
  console.log(
    '🚀 ~ file: MovieSearch.js ~ line 64 ~ MovieSearch ~ cinemaByMovieUnique',
    cinemaByMovieUnique
  );
  // Lấy thời gian chiếu bộ phim này của rạp đã chọn

  const movieByCinema = movieDetail?.lichChieu?.filter(
    (item) => item.thongTinRap.tenCumRap === cinemaChoose
  );

  return (
    <Wrapper>
      {/* Movie Search Part */}
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            <BiMovie />
            Moives
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={movieChoose}
            onChange={movieChooseHandler}
            label="Phim"
          >
            {movieAfterToday.map((item, i) => (
              <MenuItem value={item.maPhim} key={i}>
                {item.tenPhim}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Cinema Search Part */}
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="demo-simple-select-outlined-label"
            className={`${movieChoose === '' ? 'cinemaSearch__label' : null}`}
          >
            <FaMapMarkerAlt
              className={`${isLoading ? 'cinemaSearch__label' : null}`}
            />
            <p className={`${isLoading ? 'cinemaSearch__label' : null}`}>
              {isLoading ? 'Finding Cinemas...' : 'Cinemas'}
            </p>
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={cinemaChoose}
            onChange={cinemaChooseHandler}
            label="Cinema"
            disabled={isLoading || movieChoose === ''}
          >
            {!isLoading ? (
              cinemaByMovieUnique?.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))
            ) : (
              <MenuItem value="1">Finding Cinema</MenuItem>
            )}
          </Select>
        </FormControl>
      </div>
      {/* Schedule Search Part */}{' '}
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="demo-simple-select-outlined-label"
            className={`${cinemaChoose === '' ? 'cinemaSearch__label' : null}`}
          >
            <AiOutlineSchedule />
            <p> Dates</p>
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={scheduleChoose}
            onChange={(e) => {
              setScheduleChoose(e.target.value);
            }}
            label="schedule"
            disabled={isLoading || movieChoose === '' || cinemaChoose === ''}
          >
            {movieByCinema?.map((item) => (
              <MenuItem value={item.ngayChieuGioChieu}>
                {getDay(new Date(item.ngayChieuGioChieu))} -
                {dateFormat('dd:MM:yyyy', new Date(item.ngayChieuGioChieu))}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Button Bookng */}
      <AnimatePresence>
        <motion.div
          variants={loadingVariants3}
          initial="hidden"
          animate="visible"
          // exit={{ opacity: 0 }}
          key={scheduleChoose}
          className="search__btn"
        >
          {scheduleChoose === '' ? null : (
            <div>
              <Link
                to={`/booking/${movieByCinema[0]?.maLichChieu}`}
                className="booking__button"
              >
                Avaiable Now
              </Link>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .cinemaSearch__label {
    color: var(--color-gray-700);
    p,
    svg {
      color: var(--color-gray-700);
    }
  }
  #demo-simple-select-outlined-label {
    ${FlexCenter()}
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
  .search__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      .booking__button {
        font-size: 1.25rem;
        height: 3.5rem;
        opacity: 1;
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
    column-gap: 3rem;
    row-gap: 1rem;
  }
`;
