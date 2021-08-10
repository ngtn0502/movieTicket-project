import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

export const scrollToTopVariants = {
  hidden: {
    opacity: 0,
    y: -1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
function ScrollToTop({ to, className }) {
  const [isShowScrollToTop, setIsShowScrollToTop] = useState(false);
  const scrollHandler = () => {
    if (window.pageYOffset > 500) {
      setIsShowScrollToTop(true);
    } else {
      setIsShowScrollToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
  }, []);
  return (
    <Wrapper className={className}>
      <AnimatePresence>
        <motion.div
          variants={scrollToTopVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -1000, transition: { duration: 1 } }}
          key={isShowScrollToTop}
        >
          {isShowScrollToTop && (
            <HashLink to={`${to}`} className="scrollToTop__button">
              <FaAngleDoubleUp />
            </HashLink>
          )}{' '}
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
}

export default ScrollToTop;
const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 6000;
  .scrollToTop__button {
    svg {
      width: 3rem;
      height: 3rem;
      transition: var(--transition);
      &:hover {
        fill: var(--color-seat);
      }
    }
  }
`;
