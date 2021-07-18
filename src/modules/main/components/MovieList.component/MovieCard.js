import React from 'react';
import styled from 'styled-components';

function MovieCard({ movie }) {
  return (
    <Wrapper>
      <img src={movie.hinhAnh} alt="movie" />
      <span>{movie.tenPhim}</span>
      <p>{movie.maPhim}</p>
    </Wrapper>
  );
}

export default MovieCard;

const Wrapper = styled.div`
  img {
    border-radius: var(--radius);
    display: block;
    height: 20rem;
    width: 100%;
  }
`;
