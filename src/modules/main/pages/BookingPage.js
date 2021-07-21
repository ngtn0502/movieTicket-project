import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../components/Loading.js';
import { getCineRoomAction } from '../../redux/actions/getCineRoomAction';

function BookingPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const cineRoomList = useSelector(
    (state) => state.cineRoomReducer.cineRoomList
  );

  console.log(cineRoomList);

  useEffect(() => {
    dispatch(getCineRoomAction(params.ids));
  }, [dispatch]);
  return (
    <Wrapper>
      <div className="booking">
        <div className="booking__chair">{/*  */}</div>
      </div>
    </Wrapper>
  );
}

export default BookingPage;
const Wrapper = styled.section``;
