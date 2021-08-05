import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import { VscComment } from 'react-icons/vsc';
import NewsCard from './NewsCard.js';
import NewsCardMini from './NewCardMini';

function NewsGroup({ newsData, className }) {
  return (
    <Wrapper className={className}>
      <div className="homeNews__firstLine">
        <NewsCard newsData={newsData[0]} />
        <NewsCard newsData={newsData[1]} />
      </div>
      <div className="homeNews__secondLine">
        <NewsCard newsData={newsData[2]} />
        <NewsCard newsData={newsData[3]} />
        <div className="homeNews__secondLine--mini">
          <NewsCardMini newsData={newsData[4]} />
          <NewsCardMini newsData={newsData[5]} />
          <NewsCardMini newsData={newsData[6]} />
          <NewsCardMini newsData={newsData[7]} />
        </div>
      </div>
    </Wrapper>
  );
}

export default NewsGroup;

const Wrapper = styled.section`
  @media screen and (min-width: 576px) {
    .homeNews__secondLine--mini {
      display: none;
    }
    .homeNews__firstLine {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
    .homeNews__secondLine {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      .homeNews__secondLine--mini {
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .homeNews__secondLine--mini {
      display: block;
    }
    .homeNews__secondLine {
      grid-template-columns: 1fr 1fr 0.7fr;
    }
  }
`;
