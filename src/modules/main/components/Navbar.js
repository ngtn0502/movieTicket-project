import React, { useState } from 'react';
import styled from 'styled-components';
import { FiUser, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo-full.png';
import { Flex, FlexCenter, FlexVCenter } from '../../utils/mixin';
import NavLink from './NavLink';

function Navbar() {
  const [isSideBarShow, setisSideBarShow] = useState(false);
  return (
    <Wrapper>
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
          <span className="title" to="/sign-in">
            Đăng nhập
          </span>
        </div>
        <button
          type="button"
          className="toggle"
          onClick={() => setisSideBarShow((prev) => !prev)}
        >
          <FiMenu />
        </button>
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
              <Link to="/sign-in" className='title'>Đăng nhập</Link>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-white);
  height: 10vh;
  display: flex;
  align-items: center;
  z-index: 1000;
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
      ${FlexCenter()}
    }
  }

  .sideBar__show {
    transform: translate(0);
  }
  @media (min-width: 800px) {
    .nav {
      .nav_links {
        ${FlexVCenter()}
        ul {
          display: flex;
          gap: var(--gap);
        }
      }
      .nav_login {
        ${FlexCenter()}
      }
      .toggle {
        display: none;
      }
    }
  }
`;
