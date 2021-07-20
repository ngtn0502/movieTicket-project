import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import bgImage from '../../../assets/img/bg-popcorn2.jpg';
import logo from '../../../assets/img/logo-full.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input: {
    color: 'white',
  },
}));

function SignInPage() {
  const classes = useStyles();

  return (
    <Wrapper style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="page-100">
        <div className="signIn">
          <img src={logo} alt="movie" />
          <h5>Thế giới phim trên đầu ngón tay</h5>
          <div className="signIn__form">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                variant="filled"
                color="secondary"
                id="standard-basic"
                label="Tài Khoảng"
                className={classes.input}
              />
              <TextField
                variant="filled"
                color="secondary"
                id="standard-basic"
                label="Mật Khẩu"
                className={classes.input}
              />
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SignInPage;
const Wrapper = styled.section`
  position: relative;
  .signIn__input {
    color: var(--color-white);
  }
  .signIn {
    max-width: 360px;
    padding: 40px 32px 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(
      to bottom,
      rgba(20, 50, 93, 0.9),
      rgba(8, 22, 48, 0.9)
    );
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 45%);
    text-align: center;
    color: #fff;
    border-radius: 6px;
  }
`;
