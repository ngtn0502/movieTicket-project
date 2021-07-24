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
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BookingInfo({
  ngayChieuAllUnique,
  dateChieu,
  setNgayChieu,
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
                ></Tab>
              );
            })}
            ;
          </Tabs>
        </AppBar>
        {dateChieu?.map((item, i) => {
          return (
            <TabPanel value={value} index={i} className='tabPanel'>
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
  .btn {
    border: 1px solid black;
    margin: 1rem 1rem;
  }
  .tabPanel {
    p {
      font-size: 1.5rem;
      color: var(--color-white);
    }
  }
  @media screen and (min-width: 700px) {
    .MuiTab-root {
      min-width: 100px;
    }
    /* header */
    .appBar {
      .tabs {
        .date__weekday {
          color: var(--color-emphasis-500);
        }
        .date {
          font-size: 1rem;
        }
      }
    }
    /* child */
  }
`;
