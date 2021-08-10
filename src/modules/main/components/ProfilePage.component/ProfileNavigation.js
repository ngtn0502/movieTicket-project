import React from 'react';
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import schedule from '../../../../assets/img/searchSection/news.png';
import { FlexHCenter } from '../../../utils/mixin.js';

function ProfileContent({ className }) {
  return (
    <Wrapper className={`${className} section-middle`}>
      <div className="navigation__container">
        <div className="navigation__item">
          <FiUser />
          <p className="nameMovie">YOUR PROFILE</p>
        </div>
        <hr />
        <div className="navigation__item">
          <img src={schedule} alt="schedule" />
          <p className="nameMovie">YOUR TRANSACTIONS</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProfileContent;
const Wrapper = styled.div`
  .navigation__container {
    padding-top: 8rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    .navigation__item {
      ${FlexHCenter()}
      gap: 1rem;
      border: 1px solid #343a40;
      padding: 0.5rem;
      font-weight: 700;
      border-radius: var(--radius);
      box-shadow: 0 10px 20px -6px rgb(0 0 0 / 12%);
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
      p {
        font-size: 1rem;
      }
      &:active {
        color: #fff;
        background: #343a40;
        border-color: #343a40;
      }
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;
