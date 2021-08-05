import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { getNewsAction } from '../../../../redux/actions/HomeAction/getNewsAction';
import NewsCard from './NewsCard.js';
import NewsGroup from './NewsGroup.js';
import { loadingVariants2 } from '../../../../utils/constants.js';

function HomeNews({ className }) {
  // type news state
  const [typeNews, setTypeNews] = useState(true);
  // continue state
  const [isContinue, setIsContinue] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const { isLoading, newsDatas } = useSelector((state) => state.homeReducer);
  let newsData = newsDatas.slice(17);
  if (!typeNews) {
    newsData = newsDatas.slice(0, 17);
  }
  return (
    <Wrapper className={`section-middle ${className}`}>
      <div className="homeNews">
        <div className="homeNews__category">
          <button
            type="button"
            className={`btn2 ${!typeNews ? `btn2__active` : null}`}
            onClick={() => {
              setTypeNews(false);
            }}
          >
            Điện ảnh 24h
          </button>
          <button
            type="button"
            className={`btn2 ${typeNews ? `btn2__active` : null}`}
            onClick={() => {
              setTypeNews(true);
            }}
          >
            Khuyến mãi
          </button>
        </div>
        <div className="homeNews__news">
          <NewsGroup newsData={newsData.slice(0, 8)} />
        </div>{' '}
        <AnimatePresence>
          <motion.div
            variants={loadingVariants2}
            initial="hidden"
            animate="visible"
            key={isContinue}
            exit={{ x: 1500, opacity: 0, transition: { duration: 0.8 } }}
          >
            {isContinue && (
              <div className="homeNews__news">
                <NewsGroup newsData={newsData.slice(8, 17)} />
              </div>
            )}
            <div className="homeNews__continue">
              {!isEnd && (
                <button
                  type="button"
                  className="btn2"
                  onClick={() => {
                    setIsContinue(true);
                    setIsEnd(true);
                  }}
                >
                  Xem thêm...
                </button>
              )}
              {isContinue && (
                <button
                  type="button"
                  className="btn2"
                  onClick={() => {
                    setIsContinue(false);
                    setIsEnd(false);
                  }}
                >
                  Thu gọn
                </button>
              )}
            </div>
          </motion.div>{' '}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
}

export default HomeNews;

const Wrapper = styled.section`
  margin: 5rem auto;
  img {
    border-radius: var(--radius);
    margin-bottom: 0.25rem;
  }
  .homeNews__continue,
  .homeNews__category {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    gap: 1rem;
    button {
      margin: 0 2rem;
    }
  }
  .btn2 {
    color: var(--color-white);
  }
`;
