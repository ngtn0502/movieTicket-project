import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { footerCompany, importantLinks } from '../../../utils/constants';
import appStore from '../../../../assets/img/download/app_store.jpg';
import windows from '../../../../assets/img/download/windows.jpg';
import ggPlay from '../../../../assets/img/download/google_play.jpg';
import { FlexCenter } from '../../../utils/mixin.js';

function Footer() {
  return (
    <Wrapper /* >style={{ backgroundImage: `url(${bgImage})` }} */>
      <div className="footer__newsletter section-middle">
        <div className="newsletter__container">
          <div className="newsletter__title">
            <p className="subNameMovie">SUBSCRIBE NOW</p>
            <p className="nameMovie">
              TO GET LATEST UPDATE ABOUT NEW MOVIE AND MORE...
            </p>
          </div>
          <form className="newsletter__form">
            <input type="text" placeholder="Your Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
          <p className="subNameMovie">
            We send you latest update and news to your email
          </p>
        </div>
      </div>
      {/* <ul>
        {socials.map((link) => (
          <motion.li key={link.id} variants={linksVariants} whileHover="hover">
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.image}
            </a>
          </motion.li>
        ))}
      </ul> */}
      {/* <div className="overlay" /> */}
      <div className="footer__information section-middle">
        {footerCompany.map((item) => (
          <div className="footer__links" key={item.id}>
            <h5 className="footer__links-title">{item.title}</h5>
            <p className="footer__links-content subNameMovie">{item.content}</p>
          </div>
        ))}
        {importantLinks.map((item) => (
          <div className="footer__links" key={item.id}>
            <h5 className="footer__links-title">{item.text}</h5>
            <div className="footer__links-link subNameMovie">
              {item.link.map((i) => (
                <Link key={i.id} to={i.to}>
                  {i.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="footer__links">
          <h5 className="footer__links-title">Download</h5>
          <div className="footer__links-download subNameMovie">
            <a
              href="https://apps.apple.com/vn/app/apple-store/id375380948?l=vi"
              target="_blank"
              rel="noreferrer"
            >
              <img src={appStore} alt="download" />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ggPlay} alt="download" />
            </a>
            <a
              href="https://www.microsoft.com/vi-vn/store/apps/windows"
              target="_blank"
              rel="noreferrer"
            >
              <img src={windows} alt="download" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <h2>
          © 2021 - Booking Ticket Website | By{' '}
          <a
            href="http://nhannguyen.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Nhan
          </a>
        </h2>
        <h2>For educational purpose</h2>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: relative;
  background-color: var(--color-darkBg);
  z-index: 2;
  color: var(--color-white);
  margin-top: 15rem;
  /* width: 10rem; */
  .footer__newsletter {
    background-color: var(--color-darkBg2);
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: 0 0 20px 10px rgb(0 0 0 / 50%);
    border-radius: var(--radius2);
    .newsletter__container {
      ${FlexCenter()}
      flex-direction: column;
      padding: 3.5rem 1.25rem;
      font-weight: 700;
      .subNameMovie,
      .nameMovie {
        text-align: center;
      }
      .newsletter__title {
        .subNameMovie {
          color: #31d7a9;
          font-size: 1.25rem;
        }
        .nameMovie {
          font-size: 1.75rem;
          padding: 1rem 0 2rem;
        }
      }
      .newsletter__form {
        display: flex;
        position: relative;
        padding-bottom: 1rem;
        input {
          height: 64px;
          width: 100%;
          font-size: 1rem;
          padding-right: 160px;
          color: var(--color-black);
          border: 2px solid #31d7a9;
          border-radius: 50px;
          padding-left: 20px;
          box-shadow: 0 3px 10px 0 rgb(0 0 0 / 10%);
          outline: none;
        }
        button {
          position: absolute;
          right: 6.5px;
          top: 6.5px;
          background: #31d7a9;
          font-size: 1rem;
          color: var(--color-black);
          -webkit-box-shadow: 0 10px 15px 0 rgb(59 55 188 / 50%);
          box-shadow: 0 10px 15px 0 rgb(59 55 188 / 50%);
          width: auto;
          height: 60%;
          padding: 0 40px;
          border-radius: 25px;
          border: none;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
  .footer__information {
    padding-top: 20rem;
  }
  .overlay {
    background: var(--color-overlay);
    opacity: 1;
    z-index: 1;
  }
  .section__middle {
    position: relative;
    z-index: 2;
  }

  .footer__links {
    padding: 0.5rem;
    .footer__links-title {
      color: var(--color-white);
      font-size: 1.75rem;
      position: relative;
      margin: 2rem 0 3rem;
      &:before {
        position: absolute;
        content: '';
        width: 50px;
        height: 2px;
        background: #31d7a9;
        bottom: -16px;
        left: 0;
      }
      &:after {
        position: absolute;
        content: '';
        width: 30px;
        height: 3px;
        background: #31d7a9;
        bottom: -22px;
        left: 0;
      }
    }
    .footer__links-content {
      color: var(--color-white);
      font-weight: 500;
    }
    .footer__links-link {
      a {
        font-weight: 500;
        display: inline-block;
        width: 100%;
        padding: 0 0 0.5rem;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .footer__links-download {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      a {
        img {
          max-width: 100%;
          border-radius: var(--radius);
        }
      }
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
  @media (min-width: 992px) {
    .footer__newsletter {
      top: -30%;
      .newsletter__container {
        .newsletter__title {
          .subNameMovie {
            font-size: 1.5rem;
          }
          .nameMovie {
            font-size: 2rem;
          }
        }
      }
    }
    .footer__information {
      padding-top: 14rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      .footer__links-download {
        display: flex;
        img {
          max-width: 50%;
        }
      }
    }
    .footer__copy {
      padding: 1rem;
      a {
        color: var(--color-title);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .footer__newsletter {
      top: -22%;
    }
  }
`;

export default Footer;
