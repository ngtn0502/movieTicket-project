import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import bgImage from '../../../assets/img/bg-singin.jpg';
import logo from '../../../assets/img/logo-full.png';
import { userLoginAction } from '../../redux/actions/userLoginAction';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function SignInPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [userLogin, setUserLogin] = useState({
    taiKhoan: '',
    matKhau: '',
  });
  const userLoginHandler = (e) => {
    const { value, name } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };
  const userSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(userLogin, history));
  };

  return (
    <Wrapper style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="page-100">
        <div className="signIn">
          <img src={logo} alt="movie" />
          <h5>Thế giới phim trên đầu ngón tay</h5>
          <div className="signIn__form">
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={userSubmitHandler}
            >
              <TextField
                variant="filled"
                color="secondary"
                id="standard-basic"
                label="Tài Khoản"
                className="signIn__input"
                name="taiKhoan"
                onChange={userLoginHandler}
              />
              <TextField
                variant="filled"
                color="secondary"
                id="standard-basic"
                label="Mật Khẩu"
                className="signIn__input"
                name="matKhau"
                onChange={userLoginHandler}
              />

              <div className="signIn__button">
                <button type="submit" className="btn__watching">
                  Đăng Nhập
                </button>
                <p className="signUp">
                  Bạn mới tham gia G-Cinema?{' '}
                  <Link to="/sign-up">Đăng ký ngay.</Link>
                </p>
              </div>
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
  .page-100 {
    height: 100vh;
  }
  .signIn {
    width: 350px;
    padding: 40px 32px 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-image: linear-gradient(
      to bottom,
      rgba(20, 50, 93, 0.9),
      rgba(8, 22, 48, 0.9)
    ); */
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 45%);
    color: #fff;
    border-radius: 6px;
    img {
      margin: 0 auto;
      max-width: 200px;
    }
    h5 {
      font-size: 1.25rem;
      padding: 1rem;
      text-align: center;
    }
  }
  .signIn__form {
    .signIn__button {
      width: 100%;
      margin: 2rem auto;
      .btn__watching {
        text-transform: none;
        width: 100%;
        padding: 1rem 1rem;
        font-size: 1.25rem;
      }
    }
  }
  .signIn__input {
    display: block;
    margin: 0 auto;
    width: 100%;
    margin-top: 2rem;
    background-color: rgba(160, 160, 160, 0.2);
    .MuiInputBase-root {
      width: 100%;
    }
    label {
      font-size: 1rem;
      color: var(--color-white);
    }
    input {
      color: var(--color-white);
      font-size: 1.5rem;
      width: 100%;
    }
  }
  .signUp {
    padding-top: 1rem;
    a {
      color: var(--color-white);
    }
  }
  @media screen and (min-width: 576px) {
    .signIn {
      width: 450px;
    }
  }
`;
