import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BiMovie } from 'react-icons/bi';
import { FaCity } from 'react-icons/fa';
import { movieCategory } from '../../../../../utils/constants';
import { getMovieDetailAction } from '../../../../../redux/actions/MovieAction/getMovieDetailAction';

const cityList = [
  {
    maCity: '1',
    tenCity: 'Thành phố Hồ Chí Minh',
  },
  {
    maCity: '2',
    tenCity: 'Hà Nội',
  },
  {
    maCity: '3',
    tenCity: 'Cần Thơ',
  },
  {
    maCity: '4',
    tenCity: 'Đà Nẵng',
  },
  {
    maCity: '5',
    tenCity: 'Vũng Tàu',
  },
  {
    maCity: '6',
    tenCity: 'Đà Lạt',
  },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    paddingTop: '1rem',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CitySearch() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [city, setCity] = useState('');

  const handleChangeCity = (event) => {
    setCity(event.target.value);
    // dispatch(getMovieDetailAction(event.target.value));
  };

  return (
    <Wrapper>
      <FormControl variant="" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          <FaCity />
          Thành Phố
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={city}
          onChange={handleChangeCity}
          label="City"
        >
          {cityList.map((item) => (
            <MenuItem value={item.maCity}>{item.tenCity}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1rem 0;
  #demo-simple-select-outlined-label {
    display: flex;
    font-size: 1.5rem;
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
      font-size: 1.5rem;
      color: var(--color-white);
    }
  }
`;
