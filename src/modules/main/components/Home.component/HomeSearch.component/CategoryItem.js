import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { FlexCenter } from '../../../../utils/mixin.js';

function CategoryItem({ searchMovie, message, to }) {
  return (
    <Wrapper>
      <HashLink to={to}>
        <div className="category__item">
          <img src={searchMovie} alt="icon" />
          <span>{message}</span>
        </div>
      </HashLink>
    </Wrapper>
  );
}

export default CategoryItem;
const Wrapper = styled.div`
  .category__item {
    ${FlexCenter()}
    gap: 1rem;
    /* width: 40%; */
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
    border-radius: 10px;
    padding: 0.5rem 2rem;
    transition: var(--transition);
    &:hover {
      box-shadow: 0px 10px 15px 0px rgb(160 160 160 / 50%);
      background-color: rgb(10, 63, 73, 0.7);
    }
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  @media screen and (min-width: 576px) {
    .category__item {
      width: 40%;
      padding: 0.5rem 5rem;
      gap: 1rem;
      img {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
`;
