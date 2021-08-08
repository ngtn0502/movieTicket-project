import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiUser, FiMenu } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../../assets/img/logo-full.png';
import { Flex, FlexCenter, FlexVCenter } from '../../../utils/mixin';
import NavLink from './NavLink.js';
import {
  USER_LOGOUT,
  USER_LOGOUT_ALERT,
} from '../../../redux/actions/constantsAction.js';

function Navbar() {
  const [isSideBarShow, setisSideBarShow] = useState(false);
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
            <NavLink />
          </div>
          <div className="nav_login">
            <FiUser />
            {isLoginSuccess || userLogin ? (
              <div>
                <Link to="/profile" className="nav_login--title">
                  {loginData?.hoTen || userLogin.hoTen}
                </Link>

                <button type="button" onClick={logoutHandler}>
                  Đăng xuất
                </button>
              </div>
            ) : (
              <Link to="/sign-in" className="nav_login--title">
                Đăng nhập
              </Link>
            )}
          </div>
          <button
            type="button"
            className="toggle"
            onClick={() => setisSideBarShow((prev) => !prev)}
          >
            <FiMenu />
          </button>
        </div>
      </div>
      <div>
        {/* eslint-disable */}
        {isSideBarShow && (
          <div
            className='backdrop'
            onClick={() => setisSideBarShow((prev) => !prev)}
          />
        )}
        <div className={`sideBar ${isSideBarShow ? 'sideBar__show' : null}`}>
          <div className='sideBar__links'>
            <div className='nav_login'>
              <FiUser />
              {isLoginSuccess || userLogin ? (
                <Link to='/profile' className='nav_login--title'>
                  {loginData?.hoTen || userLogin.hoTen}
                </Link>
              ) : (
                <Link to='/sign-in' className='nav_login--title'>
                  Đăng nhập
                </Link>
              )}
            </div>
            {/*  */}
            <NavLink />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
  .nav__bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 4rem;
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
  }
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
    width: 60vw;
    background-color: var(--color-white);
    height: 100vh;
    transition: var(--transition);
    transform: translateX(60vw);
    z-index: 1000;
    .sideBar__links {
      li {
        margin: 1rem;
      }
    }
    .nav_login {
      margin: 2rem;
      gap: var(--gap);
      color: var(--color-gray-700);
      ${FlexCenter()};
      .nav_login--title {
        font-weight: 400;
        font-size: 1.25rem;
        color: var(--color-gray-700);
      }
    }
  }

  .sideBar__show {
    transform: translate(0);
  }
  @media (min-width: 800px) {
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
        gap: 1rem;
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
              width: 2px;
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
