import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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
  const classes = useStyles();
  const [age, setAge] = useState('');
  const movieDetail = useSelector(
    (state) => state.movieDetailReducer.movieDetail
  );
  //  avoid map through undefined value
  let lichChieu = [];
  let cumRap = [];
  if (movieDetail) {
    lichChieu = movieDetail.lichChieu;
    // Take unique array of cinema
    const getUnique = () => {
      const id = [];
      const unique = [];

      for (let i = 0; i < lichChieu.length; i += 1) {
        for (let j = 0; j < lichChieu.length; j += 1) {
          if (
            lichChieu[i].maRap === lichChieu[j].maRap &&
            !id.includes(lichChieu[j].maRap)
          ) {
            id.push(lichChieu[j].maRap);
            unique.push(lichChieu[j]);
          }
        }
      }
      return unique;
    };
    cumRap = getUnique();
    //
    console.log(cumRap);
  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Wrapper>
      <FormControl variant="" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Rạp</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="rap"
        >
          {cumRap.map((item) => (
            <MenuItem value={item.thongTinRap.maRap}>
              {item.thongTinRap.tenCumRap}
            </MenuItem>
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
