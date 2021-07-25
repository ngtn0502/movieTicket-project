import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../components/Loading.js';
import { getCineRoomAction } from '../../redux/actions/BookingAction/getCineRoomAction';
import BookingPageLeft from '../components/BookingPage.component/BookingPageLeft';
import BookingPageRight from '../components/BookingPage.component/BookingPageRight.js';

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
      <main className="booking section-middle">
        <BookingPageLeft cineRoomList={cineRoomList} />
        <BookingPageRight cineRoomList={cineRoomList} />
      </main>
    </Wrapper>
  );
}

export default BookingPage;
const Wrapper = styled.section`
  .booking {
    margin: 5rem auto;
    display: grid;
    grid-template-columns: 1fr 18rem;
    gap: 2rem;
  }
`;
