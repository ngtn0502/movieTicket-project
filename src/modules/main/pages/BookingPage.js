import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from '../components/Loading.js';
import { getCineRoomAction } from '../../redux/actions/BookingAction/getCineRoomAction';
import BookingPageLeft from '../components/BookingPage.component/BookingPageLeft.js';
import BookingPageRight from '../components/BookingPage.component/BookingPageRight.js';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import AlertModal from '../components/AlertModal.js';
import BookingNavBar from '../components/BookingPage.component/BookingNavBar.js';
import BookingFotter from '../components/BookingPage.component/BookingFotter.js';
import { loadingVariants } from '../../utils/constants.js';

function BookingPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const [isSideBarShow, setIsSideBarShow] = useState(false);
  const { isModalShow, message, goTo, type, message2 } = useSelector(
    (state) => state.uiReducer.modal
  );
  const { cineRoomMovie, cineSeatList, totalAmount, isLoading } = useSelector(
    (state) => state.bookingReducer
  );
  // ui
  const closeModalHandler = () => {
    dispatch({ type: CLOSE_MODAL });
    // goTo depend on what modal appear for
    if (goTo) {
      history.push(goTo);
    }
  };
  //
  // fetch Api phòng chiếu của bộ phim tương ứng vơi mã rạp chiếu trong chi tiết bộ phim
  useEffect(() => {
    dispatch(getCineRoomAction(params.ids));
  }, [dispatch, params.ids]);
  // ghế đang chọn
  const choosingSeat = cineSeatList?.filter((item) => item.dangChon === true);
  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper>
        {/* Alert modal */}
        <AnimatePresence>
          {isModalShow && (
            <div>
              {/* eslint-disable */}
            <div className='backdrop' onClick={closeModalHandler}></div>
            {/* eslint-enable */}

              <AlertModal
                message={message}
                goTo={goTo}
                type={type}
                message2={message2}
                choosingSeat={choosingSeat}
                cineRoomMovie={cineRoomMovie}
              />
            </div>
          )}
        </AnimatePresence>

        {/* Check if it loading */}
        {isLoading && <Loading />}
        {!isLoading && (
          <main className="booking section-middle">
            <BookingPageLeft
              className="left"
              cineSeatList={cineSeatList}
              cineRoomMovie={cineRoomMovie}
            />
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
              <BookingPageRight
                cineSeatList={cineSeatList}
                cineRoomMovie={cineRoomMovie}
                totalAmount={totalAmount}
                choosingSeat={choosingSeat}
                setIsSideBarShow={setIsSideBarShow}
                className="right"
              />
            </section>
          </main>
        )}
        <BookingFotter
          choosingSeat={choosingSeat}
          className="booking__footer"
          setIsSideBarShow={setIsSideBarShow}
        />
      </Wrapper>{' '}
    </motion.section>
  );
}

export default BookingPage;
const Wrapper = styled.section`
  .backdrop {
    z-index: 2999;
  }
  .booking {
    display: block;
    .right {
      display: none;
    }
  }
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
    .booking__footer {
      display: none;
    }
  }
`;
