import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiUser, FiMenu } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../../assets/img/logo-full.png';
import { Flex, FlexCenter, FlexVCenter } from '../../../utils/mixin';
import NavLink from './NavLink.js';
import {
  CLOSE_MODAL,
  USER_LOGOUT,
  USER_LOGOUT_ALERT,
} from '../../../redux/actions/constantsAction.js';

function Navbar() {
  const [isSideBarShow, setIsSideBarShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoginSuccess, loginData } = useSelector(
    (state) => state.authReducer
  );

  // login
  let userLogin;
  if (localStorage.getItem('userLogin')) {
    userLogin = JSON.parse(localStorage.getItem('userLogin'));
  }
  // Scroll down animation
  const [isSideBarScroll, setIsSideBarScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsSideBarScroll(true);
      } else {
        setIsSideBarScroll(false);
      }
      return () => {
        window.removeEventListener('scroll');
      };
    });
  }, [isSideBarScroll]);
  //
  // log out
  const logoutHandler = () => {
    dispatch({ type: CLOSE_MODAL });
    dispatch({
      type: USER_LOGOUT_ALERT,
      payload: {
        type: 'Logout',
        message: 'Bạn có chắc muốn đăng xuất?',
        goTo: null,
      },
    });
  };
  return (
    <Wrapper>
      <div className={`nav__bar ${isSideBarScroll && 'nav__scrollDown'}`}>
        <div className="nav">
          <div className="nav_logo">
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav_links">
            <NavLink
              logoutHandler={logoutHandler}
              setIsSideBarShow={setIsSideBarShow}
            />
          </div>
          <div className="nav_login">
            <FiUser />
            {isLoginSuccess || userLogin ? (
              <div>
                <Link to="/profile" className="nav_login--title">
                  {loginData?.hoTen || userLogin.hoTen}
                </Link>

                <button type="button" onClick={logoutHandler}>
                  LOG OUT
                </button>
              </div>
            ) : (
              <>
                <Link to="/sign-in" className="btn2 nav_login--title signIn">
                  LOG IN
                </Link>
                <Link
                  to="/sign-up"
                  className="btn nav_login--title"
                  onClick={() => {
                    setIsSideBarShow(false);
                  }}
                >
                  SIGN UP
                </Link>
              </>
            )}
          </div>
          {/* eslint-disable */}
        </div>
      </div>
      <div className='sideBar__toggle'>
        <div
          class='menuToggle'
          onClick={() => setIsSideBarShow((prev) => !prev)}
        >
          {/* eslint-enable */}
          <input type="checkbox" />
          <span className={`${isSideBarShow ? 'menuToggle__span' : null}`} />
          <span
            className={`${
              isSideBarShow ? 'menuToggle__span menuToggle__span2' : null
            }`}
          />
          <span
            className={`${
              isSideBarShow ? 'menuToggle__span menuToggle__span3' : null
            }`}
          />
        </div>
      </div>
      {/* For Mobile */}
      <div>
        {/* eslint-disable */}
        {isSideBarShow && (
          <div
            className='backdrop'
            onClick={() => setIsSideBarShow((prev) => !prev)}
          />
        )}
        <div className={`sideBar ${isSideBarShow ? 'sideBar__show' : null}`}>
          <div className='sideBar__links'>
            <div className='nav_login'>
              {isLoginSuccess || userLogin ? (
                <>
                  <FiUser />
                  <Link to='/profile' className='nav_login--title'>
                    {loginData?.hoTen || userLogin.hoTen}
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to='/sign-in'
                    className='nav_login--title signIn'
                    onClick={() => {
                      setIsSideBarShow(false);
                    }}
                  >
                    LOG IN
                  </Link>
                  <Link
                    to='/sign-up'
                    className='nav_login--title'
                    onClick={() => {
                      setIsSideBarShow(false);
                    }}
                  >
                    SIGN UP
                  </Link>
                </>
              )}
            </div>
            {/*  */}
            <NavLink
              logoutHandler={logoutHandler}
              setIsSideBarShow={setIsSideBarShow}
              isLoginSuccess={isLoginSuccess}
              userLogin={userLogin}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
  font-weight: 700;
  font-size: 1.25rem;
  .nav__bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 5rem;
    z-index: 1000;
    background-color: rgba(300, 300, 300, 0.1);
    transition: var(--transition);
  }
  .nav {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    img {
      width: 8rem;
      height: 3rem;
      margin: 0 1rem;
    }
    .toggle {
      svg {
        line {
          color: var(--color-white);
        }
        width: 2.25rem;
        height: 2.25rem;
      }
      margin: 0 1rem;
    }
    /* Button toogle */
  }
  .sideBar__toggle {
    position: fixed;
    right: 1rem;
    top: 2rem;
    z-index: 3500;
  }
  .menuToggle {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  .menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 3500;
  }

  .menuToggle span {
    display: flex;
    width: 29px;
    height: 3px;
    margin-bottom: 5px;
    position: relative;
    background: #ffffff;
    border-radius: 3px;
    z-index: 3500;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  .menuToggle {
    cursor: pointer;
    .menuToggle span:first-child {
      transform-origin: 0% 0%;
    }

    .menuToggle span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
    .menuToggle__input {
      background: rgba(0, 0, 0) !important;
    }
    .menuToggle__span {
      opacity: 1;
      transform: rotate(45deg) translate(-3px, -1px);
      background: rgba(0, 0, 0);
      transform-origin: 7px 2px;
    }
    .menuToggle__span3 {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    .menuToggle__span2 {
      transform: rotate(-45deg) translate(0, -1px);
    }
  }
  /*  */
  .nav__scrollDown {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .nav_links,
  .nav_login {
    display: none;
  }
  .sideBar {
    position: fixed;
    right: 0;
    top: 0;
    width: 15rem;
    background-color: var(--color-white);
    height: 100vh;
    border-radius: var(--radius);
    z-index: 3100;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(1100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    .sideBar__links {
      padding: 3rem 0;
      li {
        margin: 1rem;
      }
    }
    .nav_login {
      margin: 1.5rem;
      gap: var(--gap);
      color: var(--color-gray-700);
      ${FlexCenter()};
      .nav_login--title {
        font-weight: 400;
        font-size: 1.25rem;
        letter-spacing: 0.05rem;
        color: var(--color-gray-700);
      }
      .signIn {
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: 0;
          right: -0.5rem;
          background-color: var(--color-gray-700);
          height: 100%;
          width: 1px;
        }
      }
    }
  }

  /*  */
  .sideBar__show {
    transform: none;
  }
  .btn,
  .btn2 {
    padding: 0.5rem;
  }
  .btn2 {
    border-color: var(--color-gray-700);
  }

  @media (min-width: 768px) {
    .sideBar__toggle {
      display: none;
    }

    .nav__bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 4rem;
      display: flex;
      align-items: center;
      z-index: 1000;
      background-color: rgba(300, 300, 300, 0.1);
      transition: var(--transition);
      .nav_links,
      .nav_title,
      .nav_login--title {
        color: white !important;
      }
    }
    .nav {
      img {
        width: 7rem;
      }
      width: 90%;
      ${Flex({ justify: 'space-between' })}
      margin: 0 auto;
      .nav_links,
      .nav_login {
        display: none;
      }
      .toggle {
        ${FlexCenter()}
      }
    }
    .nav__scrollDown {
      background-color: rgba(0, 0, 0, 0.8);
      li:hover {
        background-color: var(--color-redNetflix);
      }
      .nav_links,
      .nav_title,
      .nav_login--title {
        color: white !important;
      }
    }
    .nav {
      .nav_links {
        ${FlexVCenter()}
        ul {
          display: flex;
          gap: var(--gap);
        }
      }
      .nav_login {
        gap: 0.5rem;
        ${FlexCenter()}
        color: var(--color-gray-700);
        .nav_login--title {
          font-size: 1rem;
          font-weight: 400;
          color: var(--color-gray-700);
        }
        div {
          display: flex;
          align-items: center;
          button {
            font-size: 1rem;
            color: var(--color-title);
            position: relative;
            margin-left: 1rem;
            font-weight: 400;
            transform: translateY(10%);
            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: -0.5rem;
              height: 100%;
              width: 1px;
              background-color: #fff;
            }
          }
        }
      }
      .toggle {
        display: none;
      }
    }
  }
`;
