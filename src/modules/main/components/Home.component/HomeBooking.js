import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { AnimatePresence, motion } from 'framer-motion';
import HomeBookingSchedule from './HomeBookingSchedule.js';
import { FlexCenter, FlexHCenter, FlexVCenter } from '../../../utils/mixin';
import { getCinema } from '../../../utils/constants';

// variant for MUI

export const loadingCineVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
export const loadingScheduleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function HomeBooking() {
  const { cineplexList, movieByCineplex } = useSelector(
    (state) => state.homeReducer
  );

  const [cineplex, setCineplex] = useState('BHDStar');
  const [phimTheoCumRap, setPhimTheoCumRap] = useState(
    'bhd-star-cineplex-bitexco'
  );
  // For animation key purpose (because i design two layout screen so each layout much have one unique key value array)
  const [cineplex2, setCineplex2] = useState('BHDStar2');
  //
  const [isShowSchedule, setIsShowSchedule] = useState(false);
  const itemCupRapHandler = (data) => {
    setPhimTheoCumRap(data);
    setIsShowSchedule((state) => !state);
  };
  //
  const setCineplexHandler = (item) => {
    setCineplex(item.maHeThongRap);
    // For animation of big screen layout purpose
    setCineplex2(item.maHeThongRap.concat('2'));
  };
  // Create unique cineplex
  const cineplexByBrand = movieByCineplex.filter(
    (item) => item.maHeThongRap === cineplex
  );
  // create lstCumRap
  // if dont understand - review API (because the structure of API result)
  let lstCumRap;
  if (cineplexByBrand !== undefined) {
    lstCumRap = cineplexByBrand[0]?.lstCumRap;
  }
  const phimTheoCumRapArray = lstCumRap?.filter(
    (item) => item.maCumRap === phimTheoCumRap
  );
  let danhSachPhim;
  if (phimTheoCumRapArray !== undefined) {
    danhSachPhim = phimTheoCumRapArray[0]?.danhSachPhim;
    console.log(
      '🚀 ~ file: HomeBooking.js ~ line 79 ~ HomeBooking ~ danhSachPhim',
      danhSachPhim
    );
  }
  // lấy cụm rạp đầu tiên
  useEffect(() => {
    if (lstCumRap !== undefined) {
      setPhimTheoCumRap(lstCumRap[0].maCumRap);
    }
  }, [cineplex]);
  return (
    <Wrapper className="section-middle">
      <div className="homeBooking">
        <div className="homeBooking__cineplexLogo">
          {cineplexList.map((item) => (
            /* eslint-disable */
            <div
              onClick={setCineplexHandler.bind(null, item)}
              className={`homeBooking__logo--item ${
                cineplex === item.maHeThongRap ? 'active' : null
              }`}
            >
              <img src={item.logo} alt='movie' />
            </div>
            /* eslint-enable */
          ))}
        </div>
        <div className="homeBooking__main">
          <motion.div
            variants={loadingCineVariants}
            initial="hidden"
            animate="visible"
            key={cineplex}
            className="homeBooking__cineplex mobile"
          >
            {lstCumRap?.map((item) => {
              /* eslint-disable */
              const phimTheoCumRapArray = lstCumRap?.filter(
                (item) => item.maCumRap === phimTheoCumRap
              );
              let danhSachPhim2;
              if (phimTheoCumRapArray !== undefined) {
                danhSachPhim2 = phimTheoCumRapArray[0]?.danhSachPhim;
              }
              return (
                <Accordion className='accorditon hoomBooking'>
                  <AccordionSummary
                    className={`homeBooking__cineplex--item ${
                      phimTheoCumRap === item.maCumRap ? 'active' : null
                    }`}
                    onClick={itemCupRapHandler.bind(null, item.maCumRap)}
                  >
                    {getCinema(cineplex)}
                    <div>
                      <p className='nameMovie'>{item.tenCumRap}</p>
                      <p className='subNameMovie'>
                        {item.diaChi?.slice(0, 51)}......
                      </p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <HomeBookingSchedule
                      danhSachPhim={item.danhSachPhim}
                      className='homeBooking__schedule--mobile'
                    />
                  </AccordionDetails>
                </Accordion>
              );
              /* eslint-enable */
            })}
          </motion.div>
          <motion.div
            variants={loadingCineVariants}
            initial="hidden"
            animate="visible"
            key={cineplex2}
            className="homeBooking__cineplex desktop"
          >
            {lstCumRap?.map((item) => (
              /* eslint-disable */
              <div
                className='accorditon hoomBooking'
                className={`homeBooking__cineplex--item ${
                  phimTheoCumRap === item.maCumRap ? 'active' : null
                }`}
                onClick={itemCupRapHandler.bind(null, item.maCumRap)}
              >
                {getCinema(cineplex)}
                <div>
                  <p className='nameMovie'>{item.tenCumRap}</p>
                  <p className='subNameMovie'>
                    {item.diaChi?.slice(0, 51)}......
                  </p>
                </div>
              </div>

              /* eslint-enable */
            ))}
          </motion.div>
          <motion.div
            variants={loadingScheduleVariants}
            initial="hidden"
            animate="visible"
            key={phimTheoCumRap}
            className="homeBooking__schedule desktop"
          >
            <HomeBookingSchedule danhSachPhim={danhSachPhim} />
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}

export default HomeBooking;

const Wrapper = styled.main`
  margin: 5rem auto;
  background-color: rgba(300, 300, 300, 0.1);

  /* Override Material UI style */
  .accorditon {
    background-color: transparent;
  }
  .desktop {
    display: none;
  }
  .homeBooking {
    gap: 2rem;
    overflow: hidden;
    /*  */
    border: 2px solid var(--color-gray-800);
    /* LOGO part */
    .homeBooking__cineplexLogo {
      margin: 0 auto;
      height: auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 20px;
      img {
        width: 4rem;
        height: auto;
        border-radius: var(--radius);
      }
      .homeBooking__logo--item {
        position: relative;
        padding: 20px;
        /* height: 7rem; */
        transition: var(--transition);
        opacity: 0.5;
        cursor: pointer;
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          height: 2px;
          width: calc(100% - 10px);
          transform: translate(-50%, 0rem);
          background-color: var(--color-gray-800);
          box-shadow: 0 -4px 10px 1px var(--color-gray-800);
          transition: var(--transition);
        }
        &:hover {
          opacity: 1;
          &::after {
            background-color: #fb4226;
            box-shadow: 0 -4px 10px 1px #fb4226;
          }
        }

        &:before {
          content: '';
          position: absolute;
          right: -1rem;
          bottom: 0;
          height: 10000rem;
          /* width: 2rem; */
          transform: rotateX('45deg');
          border: 1px solid var(--color-gray-800);
          background-color: var(--color-gray-800);
        }
      }
      .active {
        opacity: 1;
        &::after {
          background-color: #fb4226;
          box-shadow: 0 -4px 10px 1px #fb4226;
        }
      }
    }
    /* Cụm rạp part */
    .homeBooking__cineplex {
      position: relative;
      overflow: hidden;
      transition: var(--transition);
      overflow-y: auto;
      .homeBooking__schedule--mobile {
        overflow: hidden;
        transition: max-height 0.6s ease;
      }
      .homeBooking__schedule--active {
        height: 100%;
      }

      img {
        width: 5rem;
        height: 5rem;
        border-radius: var(--radius);
      }
      /* Scroll Bar */

      &::-webkit-scrollbar {
        width: 5px;
        background-color: var(--color-gray-400);
        border-radius: var(--radius);
      }
      &::-webkit-scrollbar-thumb {
        width: 5px;
        background-color: var(--color-gray-800);
        border: 2px solid var(--color-gray-800);
        border-radius: var(--radius);
      }
      /*  */
      /* Each cụm rạp item */
      .homeBooking__cineplex--item {
        display: flex;
        gap: 1rem;
        position: relative;
        cursor: pointer;
        padding: 20px;
        /* margin: 1rem 0; */
        /* height: 7rem; */
        opacity: 0.5;
        .MuiAccordionSummary-content {
          ${FlexHCenter()}
          gap: 1rem;
        }
        &:before {
          content: '';
          position: absolute;
          /* right: -4rem; */
          right: 0;
          bottom: -42rem;
          height: 10000rem;
          /* width: 2rem; */
          transform: rotateX('45deg');
          border: 1px solid var(--color-gray-800);
          background-color: var(--color-gray-800);
        }
      }
      /* Hover - active line */
      .active {
        opacity: 1;
        &::after {
          background-color: #fb4226;
          box-shadow: 0 -4px 10px 1px #fb4226;
        }
      }
    }
  }
  /* For big screen */
  @media screen and (min-width: 992px) {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }

    .homeBooking {
      display: grid;
      grid-template-columns: 100px 1fr;

      .homeBooking__main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: start;
      }
      .homeBooking__cineplexLogo {
        display: block;
        height: 42rem;
        border-bottom: none;
      }
      /* Home booking part 2  */
      .homeBooking__cineplex {
        overflow-y: hidden;
        height: 42rem;

        /* overflow-y: auto; */

        &:hover {
          overflow-y: auto;
        }
        .homeBooking__schedule--mobile {
          display: none;
        }
        .homeBooking__schedule--active {
          display: none;
        }

        .homeBooking__cineplex--item {
          /* margin: 0 0 1rem; */
          /* Hover - Active Line */
          img {
            width: 4rem;
            height: 4rem;
          }
          &:after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            height: 2px;
            min-width: calc(100% - 5rem);
            transform: translate(-50%, 0rem);
            background-color: var(--color-gray-800);
            box-shadow: 0 -4px 10px 1px var(--color-gray-800);
            transition: var(--transition);
          }
          &:hover {
            opacity: 1;
            &::after {
              background-color: #fb4226;
              box-shadow: 0 -4px 10px 1px #fb4226;
            }
          }
        }
        .active {
          opacity: 1;
          &::after {
            background-color: #fb4226;
            box-shadow: 0 -4px 10px 1px #fb4226;
          }
        }
      }
    }
  }
`;
