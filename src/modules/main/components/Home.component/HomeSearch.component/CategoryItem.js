import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { FlexCenter } from '../../../../utils/mixin.js';

function CategoryItem({ searchMovie, message, onClick, to }) {
  return (
    <Wrapper className="category__item" onClick={onClick}>
      <HashLink to={to}>
        <img src={searchMovie} alt="icon" />
      </HashLink>
      <HashLink to={to}>
        <span>{message}</span>
      </HashLink>
    </Wrapper>
  );
}

export default CategoryItem;
const Wrapper = styled.div`
  ${FlexCenter()}
  gap: 1rem;
  width: 40%;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  border-radius: 10px;
  padding: 0.5rem;
  img {
    width: 2rem;
    height: 2rem;
  }
  @media screen and (min-width: 576px) {
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
