import React from 'react';
import styled from 'styled-components';

function MovieClass({ checkClass }) {
  return (
    <>{checkClass ? <Wrapper>P</Wrapper> : <WrapperC16>C16</WrapperC16>}</>
  );
}

export default MovieClass;

const Wrapper = styled.span`
  padding: 0 1rem;
  font-size: 1rem;
  border-radius: var(--radius);
  background-color: #00ac4d;
  color: var(--color-white);
  margin-right: 0.5rem;
`;

const WrapperC16 = styled.span`
  padding: 0 1rem;
  font-size: 1rem;
  border-radius: var(--radius);
  background-color: #fb4226;
  color: var(--color-white);
  margin-right: 0.5rem;
`;
