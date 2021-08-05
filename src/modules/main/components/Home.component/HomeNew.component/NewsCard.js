import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import { VscComment } from 'react-icons/vsc';
import { AnimatePresence, motion } from 'framer-motion';
import { loadingVariants2 } from '../../../../utils/constants.js';

function NewsCard({ newsData }) {
  return (
    <Wrapper className="homeNews__card">
      <AnimatePresence>
        <motion.div
          variants={loadingVariants2}
          initial="hidden"
          animate="visible"
          key={newsData?.id}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <a href={newsData?.link} target="_blank" rel="noreferrer">
            <div className="card__img">
              <img src={newsData?.picture} alt="" />
            </div>
          </a>
          <a
            href={newsData?.link}
            target="_blank"
            rel="noreferrer"
            className="card__title"
          >
            <p className="nameMovie">{newsData?.title}</p>
          </a>
          <div className="card__content">
            <p className="subNameMovie">{newsData?.content}</p>
          </div>
          <div className="card__social">
            <a
              href={newsData?.link}
              target="_blank"
              rel="noreferrer"
              className="card__like"
            >
              <AiOutlineLike />
              <span>{newsData?.like}</span>
            </a>
            <a
              href={newsData?.link}
              target="_blank"
              rel="noreferrer"
              className="card__comment"
            >
              <VscComment />
              <span>{newsData?.comment}</span>
            </a>
          </div>
        </motion.div>{' '}
      </AnimatePresence>
    </Wrapper>
  );
}

export default NewsCard;

const Wrapper = styled.section`
  margin: 0 0 2rem;
  .card__content {
    margin: 0.5rem 0;
  }
  .card__social {
    display: flex;
    gap: 1rem;
    .card__like,
    .card__comment {
      display: flex;
      gap: 0.5rem;
    }
  }
`;
