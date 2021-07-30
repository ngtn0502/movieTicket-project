import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Loading from '../components/Loading.js';
import { getCineRoomAction } from '../../redux/actions/BookingAction/getCineRoomAction';
import BookingPageLeft from '../components/BookingPage.component/BookingPageLeft.js';
import BookingPageRight from '../components/BookingPage.component/BookingPageRight.js';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import AlertModal from '../components/AlertModal.js';
<<<<<<< HEAD
import BookingNavBar from '../components/BookingPage.component/BookingNavBar.js';
import BookingFotter from '../components/BookingPage.component/BookingFotter.js';
=======
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b

function BookingPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
<<<<<<< HEAD
  const [isSideBarShow, setIsSideBarShow] = useState(false);
=======
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
  const { isModalShow, message } = useSelector((state) => state.uiReducer);
  const { cineRoomMovie, cineSeatList, totalAmount } = useSelector(
    (state) => state.bookingReducer
  );
  // ui
  const closeModalHandler = () => {
    dispatch({ type: CLOSE_MODAL });
    history.push('/home');
  };
  //
  // fetch Api phòng chiếu của bộ phim tương ứng vơi mã rạp chiếu trong chi tiết bộ phim
  useEffect(() => {
    dispatch(getCineRoomAction(params.ids));
  }, [dispatch, params.ids]);
  // ghế đang chọn
  const choosingSeat = cineSeatList?.filter((item) => item.dangChon === true);
  return (
    <Wrapper>
      {isModalShow && (
        <div>
          {/* eslint-disable */}
          <div className="backdrop" onClick={closeModalHandler} />
          {/* eslint-enable */}
          <AlertModal message={message} goTo="/home" />
        </div>
      )}
<<<<<<< HEAD
      {/* <BookingNavBar className="nav" /> */}
=======
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
      <main className="booking section-middle">
        <BookingPageLeft
          className="left"
          cineSeatList={cineSeatList}
          cineRoomMovie={cineRoomMovie}
        />
<<<<<<< HEAD
        <section>
          {isSideBarShow && (
            <BookingPageRight
              cineSeatList={cineSeatList}
              cineRoomMovie={cineRoomMovie}
              totalAmount={totalAmount}
              choosingSeat={choosingSeat}
              setIsSideBarShow={setIsSideBarShow}
            />
          )}
=======
        <section className="right">
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
          <BookingPageRight
            cineSeatList={cineSeatList}
            cineRoomMovie={cineRoomMovie}
            totalAmount={totalAmount}
            choosingSeat={choosingSeat}
<<<<<<< HEAD
            setIsSideBarShow={setIsSideBarShow}
            className="right"
          />
        </section>
      </main>
      <BookingFotter
        choosingSeat={choosingSeat}
        className="booking__footer"
        setIsSideBarShow={setIsSideBarShow}
      />
=======
          />
        </section>
      </main>
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
    </Wrapper>
  );
}

export default BookingPage;
const Wrapper = styled.section`
<<<<<<< HEAD
  .backdrop {
    z-index: 3000;
  }
=======
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
  .booking {
    display: block;
    .right {
      display: none;
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
  @media screen and (min-width: 1000px) {
    .booking {
      margin: 5rem auto;
      display: grid;
      grid-template-columns: 1fr 18rem;
      gap: 1.5rem;
      .right {
        display: block;
      }
    }
<<<<<<< HEAD
    .booking__footer {
      display: none;
    }
=======
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
  }
`;
