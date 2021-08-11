import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import bgImage from '../../../assets/img/bg-singin.jpg';
import logo from '../../../assets/img/logo-full.png';
import { userLoginAction } from '../../redux/actions/authAction';
import AlertModal from '../components/AlertModal.js';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import { loadingVariants } from '../../utils/constants.js';
import { validationLengthCheck } from '../../utils/helper.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function SignInPage() {
  const { isModalShow, message, type, message2, goTo } = useSelector(
    (state) => state.uiReducer.modal
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // For form input
  const [userLogin, setUserLogin] = useState({
    taiKhoan: '',
    matKhau: '',
  });
  // For validation
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const userLoginHandler = (e) => {
    const { value, name } = e.target;
    // Validation
    if (name === 'taiKhoan') {
      setIsUsernameError(false);
      validationLengthCheck(name, value, 'taiKhoan', setIsUsernameError);
    }
    if (name === 'matKhau') {
      setIsPasswordError(false);
      validationLengthCheck(name, value, 'matKhau', setIsPasswordError);
    }

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };
  const userSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(userLogin, history));
  };
  const closeModalHandler = () => {
    dispatch({ type: CLOSE_MODAL });
  };
  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper style={{ backgroundImage: `url(${bgImage})` }}>
        <AnimatePresence>
          {isModalShow && (
            <div>
              {/* eslint-disable */}
              <div className='backdrop' onClick={closeModalHandler} />
              {/* eslint-enable */}
              <AlertModal
                message={message}
                goTo={goTo}
                type={type}
                message2={message2}
              />
            </div>
          )}{' '}
        </AnimatePresence>

        <div className="page-100">
          <div className="signIn">
            <img src={logo} alt="movie" />
            <h5>JOIN US NOW</h5>
            <div className="signIn__form">
              <form
                className={classes.root}
                autoComplete="off"
                required
                onSubmit={userSubmitHandler}
              >
                <TextField
                  variant="filled"
                  color="secondary"
                  id="standard-basic"
                  label="Username"
                  className="signIn__input"
                  name="taiKhoan"
                  required
                  helperText={`${
                    isUsernameError
                      ? 'Username must be larger than 4 characters!'
                      : ' '
                  } `}
                  error={isUsernameError}
                  onChange={userLoginHandler}
                />
                <TextField
                  variant="filled"
                  color="secondary"
                  id="standard-basic"
                  label="Password"
                  type="password"
                  className="signIn__input"
                  name="matKhau"
                  error={isPasswordError}
                  helperText={`${
                    isPasswordError
                      ? 'Password must be larger than 4 characters!'
                      : ' '
                  } `}
                  required
                  onChange={userLoginHandler}
                />
                <div className="signIn__button">
                  <button type="submit" className="btn__watching">
                    Login
                  </button>
                  <p className="signUp">
                    Don't have an account?{' '}
                    <Link to="/sign-up">Sign up now. </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>{' '}
    </motion.section>
  );
}

export default SignInPage;
const Wrapper = styled.main`
  position: relative;
  .overlay {
    opacity: 1;
  }
  .page-100 {
    height: 120vh;
  }
  .signIn {
    width: 90vw;
    padding: 2rem;
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
      max-width: 100px;
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
      width: 30rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .page-100 {
      height: 100vh;
    }
  }
`;
