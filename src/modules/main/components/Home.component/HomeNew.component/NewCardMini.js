import React from 'react';
import styled from 'styled-components';

function NewsCardMini({ newsData }) {
  return (
    <Wrapper className="homeNews__card--mini">
      <a
        href={newsData?.link}
        target="_blank"
        rel="noreferrer"
        className="card__img"
      >
        <img src={newsData?.picture} alt="" />
      </a>
      <a
        href={newsData?.link}
        target="_blank"
        rel="noreferrer"
        className="card__title"
      >
        <p className="nameMovie">{newsData?.title}</p>
      </a>
    </Wrapper>
  );
}

export default NewsCardMini;

const Wrapper = styled.div`
  margin: 0 0 2rem;
  display: flex;
  gap: 1rem;
  img {
    height: 5rem;
    width: 5rem;
  }
`;
