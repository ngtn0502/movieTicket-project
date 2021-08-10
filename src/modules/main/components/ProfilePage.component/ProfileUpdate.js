import React from 'react';
// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
// import { CLOSE_MODAL } from '../../../redux/actions/constantsAction.js';
// import { validationLengthCheck } from '../../../utils/helper.js';
// import { changeProfileUserAction } from '../../../redux/actions/authAction.js';
import commingsoon from '../../../../assets/img/commingsoon.jpg';

function ProfileUpdate({ className }) {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const [isUsernameError, setIsUsernameError] = useState(false);
  // const [isPasswordError, setIsPasswordError] = useState(false);
  // const [isEmailError, setIsEmailError] = useState(false);
  // const [userLogin, setUserLogin] = useState({
  //   taiKhoan: 'string',
  //   matKhau: 'string',
  //   email: 'string',
  //   soDt: 'string',
  //   maNhom: 'gp01',
  //   maLoaiNguoiDung: 'KhachHang',
  //   hoTen: '',
  // });
  // console.log(
  //   '🚀 ~ file: ProfileUpdate.js ~ line 18 ~ ProfileUpdate ~ userLogin',
  //   userLogin
  // );
  // const userLoginHandler = (e) => {
  //   const { value, name } = e.target;
  //   // Validation
  //   if (name === 'taiKhoan') {
  //     setIsUsernameError(false);
  //     validationLengthCheck(name, value, 'taiKhoan', setIsUsernameError);
  //   }
  //   if (name === 'matKhau') {
  //     setIsPasswordError(false);
  //     validationLengthCheck(name, value, 'matKhau', setIsPasswordError);
  //   }

  //   // Set value of input
  //   setUserLogin({
  //     ...userLogin,
  //     [name]: value,
  //   });
  // };
  // const userSubmitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(changeProfileUserAction(userLogin, history));
  // };
  // const closeModalHandler = () => {
  //   dispatch({ type: CLOSE_MODAL });
  // };
  return (
    <Wrapper className={`${className}`}>
      <img src={commingsoon} alt="commingsoon" />
      {/* <div className="profileUpdate">
        <div className="signIn__form">
          <form autoComplete="off" onSubmit={userSubmitHandler}>
            <TextField
              variant="filled"
              color="secondary"
              id="standard-basic"
              label="Họ và tên"
              className="signIn__input"
              name="hoTen"
              required
              onChange={userLoginHandler}
            /> */}
      {/* <TextField
              variant="filled"
              color="secondary"
              id="standard-basic"
              label="Tài Khoản"
              className="signIn__input"
              name="taiKhoan"
              error={isUsernameError}
              helperText={`${
                isUsernameError
                  ? 'Username must be larger than 4 characters!'
                  : ' '
              } `}
              required
              onChange={userLoginHandler}
            />
            <TextField
              variant="filled"
              color="secondary"
              id="standard-basic"
              label="Mật Khẩu"
              className="signIn__input"
              name="matKhau"
              error={isPasswordError}
              type="password"
              helperText={`${
                isPasswordError
                  ? 'Password must be larger than 4 characters!'
                  : ' '
              } `}
              required
              onChange={userLoginHandler}
            />
            <TextField
              variant="filled"
              color="secondary"
              id="standard-basic"
              label="Email"
              className="signIn__input"
              name="email"
              type="email"
              required
              onChange={userLoginHandler}
            /> */}
      {/* <TextField
              variant="filled"
              color="secondary"
              id="standard-basic"
              label="Số điện thoại"
              className="signIn__input"
              name="soDt"
              type="number"
              required
              onChange={userLoginHandler}
            /> */}
      {/* <div className="signIn__button">
              <button type="submit" className="btn__watching">
                Update information
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </Wrapper>
  );
}

export default ProfileUpdate;
const Wrapper = styled.section`
  img {
    width: 100%;
    margin: 1rem auto;
    border-radius: var(--radius);
  }
  .signIn__form {
    margin: 0 auto;
    .signIn__button {
      width: 100%;
      margin: 1rem auto 0;
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
    margin-top: 1rem;
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
    img {
      width: 70%;
    }
    .signIn__form {
      width: 70%;
      margin: 0 auto;
    }
    .signIn {
      width: 30rem;
    }
  }
`;
