import React from 'react';
import styled from 'styled-components';
import { FlexHCenter } from '../../../../utils/mixin.js';

function FilterItem({ img, message }) {
  return (
    <Wrapper className="">
      <img src={img} alt="icon" />
      <span>{message}</span>
    </Wrapper>
  );
}

export default FilterItem;
const Wrapper = styled.div`
  ${FlexHCenter()}
  gap: 0.5rem;
  margin: 1rem 0;
  span {
    font-size: 1.5rem;
  }
  img {
    border-radius: var(--radius);
    width: 2.5rem;
    height: 2.5rem;
  }
  @media screen and (min-width: 576px) {
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;
