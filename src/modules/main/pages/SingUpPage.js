import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import bgImage from '../../../assets/img/bg-singin.jpg';
import logo from '../../../assets/img/logo-full.png';
import { userSignUpAction } from '../../redux/actions/authAction';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import AlertModal from '../components/AlertModal.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function SignUpPage() {
  const { isModalShow, message, type, message2, goTo } = useSelector(
    (state) => state.uiReducer.modal
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [userLogin, setUserLogin] = useState({
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom: 'gp01',
    maLoaiNguoiDung: 'KhachHang',
    hoTen: '',
  });
  const userLoginHandler = (e) => {
    const { value, name } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };
  console.log(userLogin);
  const userSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userSignUpAction(userLogin, history));
  };
  const closeModalHandler = () => {
    dispatch({ type: CLOSE_MODAL });
  };
  return (
    <Wrapper style={{ backgroundImage: `url(${bgImage})` }}>
      {isModalShow && (
        <div>
          {/* eslint-disable */}
          <div className="backdrop" onClick={closeModalHandler} />
          {/* eslint-enable */}
          <AlertModal
            message={message}
            goTo={goTo}
            type={type}
            message2={message2}
          />
        </div>
      )}
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
                label="Họ và tên"
                className="signIn__input"
                name="hoTen"
                onChange={userLoginHandler}
              />
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
              <TextField
                variant="filled"
                color="secondary"
                id="standard-basic"
                label="Email"
                className="signIn__input"
                name="email"
                onChange={userLoginHandler}
              />
              <TextField
                variant="filled"
                color="secondary"
                id="standard-basic"
                label="Số điện thoại"
                className="signIn__input"
                name="soDt"
                onChange={userLoginHandler}
              />
              <div className="signIn__button">
                <button type="submit" className="btn__watching">
                  Đăng Ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SignUpPage;
const Wrapper = styled.section`
  position: relative;
  .page-100 {
    height: 100vh;
  }
  .signIn {
    width: 350px;
    padding: 20px 20px 0;
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
      color: var(--color-title);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (min-width: 576px) {
    .signIn {
      width: 450px;
    }
  }
`;
