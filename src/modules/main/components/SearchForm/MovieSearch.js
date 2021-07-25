import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { movieCategory } from '../../../utils/constants';
import { getMovieDetailAction } from '../../../redux/actions/MovieAction/getMovieDetailAction';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [age, setAge] = useState('');
  const movieList = useSelector((state) => state.movieListReducer.movieList);

  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(getMovieDetailAction(event.target.value));
  };

  return (
    <Wrapper>
      <FormControl variant="" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Phim</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Phim"
        >
          {movieList.map((item) => (
            <MenuItem value={item.maPhim}>{item.tenPhim}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  #demo-simple-select-outlined-label {
    color: black;
  }
`;
