import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import { movieCategory, movieHour } from '../../../utils/constants';

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

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Wrapper>
      <FormControl variant="" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Xuất Chiếu
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Xuat Chieu"
        >
          {movieHour.map((item) => (
            <MenuItem value={item.value}>{item.title}</MenuItem>
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
