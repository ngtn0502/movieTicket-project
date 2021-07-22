/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import format from 'date-format';
import { mapCGV } from '../../../utils/constants.js';
import { getDay } from '../../../utils/helper.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(300, 300, 300, 0.1)",
    display: 'flex',
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function BookingInfo({
  ngayChieuAllUnique,
  dateChieu,
  setNgayChieu,
}) {
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
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          className={`${classes.tabs} tabs`}
        >
          {ngayChieuAllUnique?.map((item, i) => {
            return (
              <Tab
                label={
                  <div>
                    <span className='date__weekday'>
                      {getDay(new Date(item))}
                    </span>
                    <span className='date__date'>
                      {format(`dd / MM`, new Date(item))}
                    </span>
                  </div>
                }
                {...a11yProps(`${i}`)}
                onClick={ngayChieuHandler.bind(null, item)}
                className='date'
              ></Tab>
            );
          })}
        </Tabs>
        {/*  */}
        {dateChieu?.map((item, i) => {
          return (
            <TabPanel value={value} index={i}>
              <span>{format(`hh:mm`, new Date(item.ngayChieuGioChieu))}</span>
            </TabPanel>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`

`;
