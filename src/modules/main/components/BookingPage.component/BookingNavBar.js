import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../../assets/img/logo-full.png';
import { Flex, FlexCenter } from '../../../utils/mixin.js';

let userLogin;
if (localStorage.getItem('userLogin')) {
  userLogin = JSON.parse(localStorage.getItem('userLogin'));
}
function BookingNavBar() {
  return (
    <Wrapper>
      <section className="nav">
        <main className="booking__nav">
          <div className="booking__nav--logo">
            <img src={logo} alt="" />
          </div>
          <div className="booking__nav--login">
            <div className="nav_login">
              <FiUser />
              {userLogin ? (
                <div>
                  <Link to="/profile" className="nav_login--title">
                    {userLogin.hoTen}
                  </Link>
                </div>
              ) : (
                <Link to="/sign-in" className="nav_login--title">
                  Đăng nhập
                </Link>
              )}
            </div>
          </div>
        </main>
      </section>
    </Wrapper>
  );
}

export default BookingNavBar;

const Wrapper = styled.nav`
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 4rem;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);
    transition: var(--transition);
  }
  .booking__nav {
    ${Flex({ justify: 'space-around', algin: 'center' })}
    height: 100%;
    .booking__nav--logo {
      img {
        max-width: 5rem;
        height: 3rem;
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
  }
`;
