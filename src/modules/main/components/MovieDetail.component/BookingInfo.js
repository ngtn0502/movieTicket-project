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
}) {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
  console.log(lichChieuDuyNhat(dateChieu));
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
        {lichChieuDuyNhat(dateChieu)?.map((_, i) => {
          return (
            <TabPanel value={value} index={i} className='tabPanel' key={i}>
              {lichChieuDuyNhat(dateChieu)?.map((item, index) => {
                return (
                  <div key={index}>
                    <p>
                      {getCinema()} {item.lichChieu[0].thongTinRap.tenCumRap}
                    </p>
                    <div className='tabPanel__btn'>
                      {item.lichChieu.map((product) => {
                        return (
                          <button
                            type='button'
                            className='btn '
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
                  </div>
                );
              })}
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
  .tabPanel {
    p {
      margin: 1rem 0;
      font-size: 1.5rem;
      color: var(--color-white);
      ${FlexHCenter()}
      gap: 1rem;
      img {
        max-width: 4rem;
        height: 4rem;
        border-radius: 10px;
      }
    }
  }
  .tabPanel__btn {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
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
