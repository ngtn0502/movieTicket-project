import React from 'react';
import styled from 'styled-components';
import { FaBars, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { links, socials } from '../../../utils/constants';
import bgImage from '../../../../assets/img/bg-popcorn.jpg';

const socialsVariants = {
  hover: {
    scale: 1.5,
    transition: {
      duration: 0.3,
    },
  },
};

const linksVariants = {
  hover: {
    scale: 1.5,
    transition: {
      duration: 0.3,
    },
  },
};

function Footer() {
  return (
    <Wrapper style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay" />
      <div className="section__middle">
        <div className="footer__links">
          <div className="footer__link">
            <span className="footer__link__icon">
              <FaBars />
            </span>
          </div>
          <h2>Links</h2>
          <ul>
            {links.map((link) => (
              <motion.li
                key={link.id}
                variants={socialsVariants}
                whileHover="hover"
              >
                <Link to={link.url}>{link.text}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="footer__links">
          <div className="footer__link">
            <span className="footer__link__icon">
              <FaGlobe />
            </span>
          </div>
          <h2>Socials</h2>
          <ul>
            {socials.map((link) => (
              <motion.li
                key={link.id}
                variants={linksVariants}
                whileHover="hover"
              >
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.image}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__copy">
        <h2>© 2021 - Cinema Website | Developed By NhanNguyen</h2>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  object-fit: cover;
  z-index: 2;
  color: var(--color-white);
  /* width: 10rem; */
  .overlay {
    background: var(--color-overlay);
    opacity: 1;
    z-index: 1;
  }
  .section__middle {
    position: relative;
    z-index: 2;
  }
  .footer__link {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  }
  .footer__link__icon {
    width: 3rem;
    height: 3rem;
    border: 2px solid var(--color-white);
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      transform: rotate(-45deg);
      width: 2rem;
      height: 2rem;
      fill: var(--color-white);
    }
  }
  .footer__links {
    padding: 1.5rem;
    h2 {
      text-align: center;
      color: var(--color-white);
      font-size: 1.75rem;
    }
    ul {
      display: flex;
      margin: 0 auto;
      margin-top: 2rem;
      justify-content: space-between;
      gap: 0.5rem;
      max-width: 33rem;
      a {
        text-transform: uppercase;
        font-size: 1rem;
        color: var(--color-white);
        font-weight: 400;
      }
      svg {
        width: 1.75rem;
        height: 2rem;
        fill: var(--color-white);
        font-weight: 400;
      }
    }
  }
  .footer__copy {
    position: relative;
    text-align: center;
    padding: 2rem;
    z-index: 2;
    h2 {
      font-size: 1rem;
    }
  }
  @media (min-width: 920px) {
    .section__middle {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
    }
  }
`;

export default Footer;
