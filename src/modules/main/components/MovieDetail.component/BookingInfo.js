/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import format from 'date-format';
import { getDay } from '../../../utils/helper.js';
import { useHistory } from 'react-router';
import { FlexHCenter } from './../../../utils/mixin';
import { useEffect } from 'react';
import { motion } from 'framer-motion';


export const loadingVariants2 = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x:0,
    transition: {
      duration: 0.5,
    },
  },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'rgba(300,300,300,0.1);',
  },
}));

export default function BookingInfo({
  ngayChieuAllUnique,
  dateChieu,
  setNgayChieu,
  getCinema,
  cinema,
  getCinemaLogo,
}) {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    console.log('Change cinema');
    setValue(0);
  }, [cinema]);
  // console.log(value);
  const ngayChieuHandler = (item) => {
    setNgayChieu([getDay(new Date(item))]);
  };
  // Logic tìm toàn bộ lịch chiếu của bộ phim trong cùng một cụm rạp - đảm bảo trong cùng một cụm rạp lịch chiếu của một bộ phim là duy nhất
  const lichChieuDuyNhat = (dateChieu) => {
    const arr = [];
    dateChieu?.forEach((item) => {
      const index = arr.findIndex(
        (product) => product.maCumRap === item.thongTinRap.maCumRap
      );
      if (index === -1) {
        arr.push({ maCumRap: item.thongTinRap.maCumRap, lichChieu: [item] });
      } else {
        arr[index]?.lichChieu?.push(item);
      }
    });
    return arr;
  };
  // debugger;
  // console.log(lichChieuDuyNhat(dateChieu));
  // console.log(ngayChieuAllUnique);
  // console.log(dateChieu);
  // console.log(value);
  return (
    <Wrapper>
      <div className={classes.root}>
        <AppBar position='static' color='default' className='appBar'>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='auto'
            className='tabs'
          >
            {ngayChieuAllUnique?.map((item, i) => {
              return (
                <Tab
                  label={
                    <div>
                      <p className='date__weekday'>{getDay(new Date(item))}</p>
                      <p className='date__date'>
                        {format(`dd / MM`, new Date(item))}
                      </p>
                    </div>
                  }
                  onClick={ngayChieuHandler.bind(null, item)}
                  className='date'
                  key={i}
                ></Tab>
              );
            })}
            {ngayChieuAllUnique.length === 0 && (
              <div className='bookingInfo__notfound'>
                <Typography component={'span'} variant={'body2'}>
                  Không tìm thấy lịch chiếu
                </Typography>
              </div>
            )}
            ;
          </Tabs>
        </AppBar>
        {/* {dateChieu?.map((item, i) => {
          console.log(item.thongTinRap.tenCumRap);
          return (
            <TabPanel value={value} index={i} className='tabPanel' key={i}>
              <div className='tabPanel__btn'>
              <p>{item.thongTinRap.tenCumRap} - Rạp 2D</p>
                {dateChieu?.map((item) => {
                  return (
                    <button
                      type='button'
                      className='btn'
                      onClick={() => {
                        history.push(`/booking/${item.maLichChieu}`);
                      }}
                    >
                      {format(`hh:mm`, new Date(item.ngayChieuGioChieu))}
                    </button>
                  );
                })}
              </div>
            </TabPanel>
          );
        })} */}
        {/*  */}
        {/*  */}
        {ngayChieuAllUnique?.map((_, i) => {
          return (
            <TabPanel value={value} index={i} className='tabPanel' key={i}>
              {lichChieuDuyNhat(dateChieu) !== [] &&
                lichChieuDuyNhat(dateChieu)?.map((item, index) => {
                  const string = item.lichChieu[0].thongTinRap.tenCumRap;
                  const indexDivide = string.indexOf('-');
                  return (
                    <motion.div
                      variants={loadingVariants2}
                      initial='hidden'
                      animate='visible'
                      key={index}
                    >
                      <p>
                        {getCinemaLogo(cinema)}
                        <span className='bookingInfo__cinemaName'>
                          {string.slice(0, indexDivide)}
                          <span> {string.slice(indexDivide)}</span>
                        </span>
                      </p>
                      <div className='tabPanel__btn'>
                        {item.lichChieu.map((product) => {
                          return (
                            <button
                              type='button'
                              className='btn'
                              onClick={() => {
                                history.push(`/booking/${product.maLichChieu}`);
                              }}
                            >
                              {format(
                                `hh:mm`,
                                new Date(product.ngayChieuGioChieu)
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              {lichChieuDuyNhat(dateChieu).length === 0 && (
                <Typography component={'span'} variant={'body2'}>
                  Không có lịch chiếu trong ngày hôm nay
                </Typography>
              )}
            </TabPanel>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  .Mui-selected {
    .date__weekday {
      color: var(--color-redNetflix);
    }
  }
  .btn {
    border: 1px solid black;
  }

  .bookingInfo__notfound {
    padding: 1rem;
    span {
      font-size: 1rem;
      color: var(--color-title);
      font-weight: 700;
    }
  }

  .tabPanel {
    .bookingInfo__cinemaName {
      color: var(--color-redNetflix);
      span {
        color: var(--color-white);
      }
    }
    .MuiTypography-root {
      flex-wrap: wrap;
      div {
        width: 100%;
      }
    }
    p {
      margin: 1rem 0;
      font-size: 1.5rem;
      color: var(--color-white);
      ${FlexHCenter()}
      gap: 1rem;
      img {
        max-width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
  .tabPanel__btn {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    button {
      background-color: transparent;
      border-radius: 0;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      letter-spacing: 0.25rem;
      &:hover {
        background-color: var(--color-seat);
      }
    }
  }
  .appBar {
    background-color: rgba(300, 300, 300, 0.1);
  }
  @media screen and (min-width: 700px) {
    .MuiTab-root {
      min-width: 100px;
    }
    /* header */
    .appBar {
      .tabs {
        .date__weekday {
          font-size: 1rem !important;
        }
        .date__date {
          font-size: 1rem !important;
        }
      }
    }
    /* child */
  }
`;
