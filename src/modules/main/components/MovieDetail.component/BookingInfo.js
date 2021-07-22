/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import format from 'date-format';
import { mapCGV } from '../../../utils/constants.js';
import { getDay } from '../../../utils/helper.js';

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
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


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ngayChieuHandler = (item) => {
    setNgayChieu([getDay(new Date(item))]);
  };
  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
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
          ;
        </Tabs>
      </AppBar>
      {dateChieu?.map((item, i) => {
        return (
          <TabPanel value={value} index={i}>
            <span>{format(`hh:mm`, new Date(item.ngayChieuGioChieu))}</span>
          </TabPanel>
        );
      })}
    </div>
  );
}
