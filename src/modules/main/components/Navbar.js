import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiUser, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo-full.png';
import { Flex, FlexCenter, FlexVCenter } from '../../utils/mixin';
import NavLink from './NavLink';

function Navbar() {
  const [isSideBarShow, setisSideBarShow] = useState(false);
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
            <Link className="nav_login--title" to="/sign-in">
              Đăng nhập
            </Link>
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
              <Link to='/sign-in' className='nav_login--title'>
                Đăng nhập
              </Link>
            </div>
            <NavLink />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
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
      width: 100%;
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
          font-weight: 400;
          color: var(--color-gray-700);
        }
      }
      .toggle {
        display: none;
      }
    }
  }
`;
