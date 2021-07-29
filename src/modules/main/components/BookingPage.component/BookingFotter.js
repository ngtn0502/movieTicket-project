import React from 'react';
import styled from 'styled-components';
import { Flex, FlexCenter, FlexHCenter } from '../../../utils/mixin.js';

function BookingFotter({ choosingSeat, className, setIsSideBarShow }) {
  console.log(choosingSeat);
  return (
    <Wrapper className={className}>
      <section className="booking__fotter">
        <div className="seat">
          {choosingSeat.length !== 0
            ? '---------------->'
            : 'Vui lòng chọn ghế'}
        </div>
        {/* eslint-disable  */}
        <div
          className="paying"
          onClick={() => {
            setIsSideBarShow(true);
          }}
          >
          Đặt vé
        </div>
          {/* eslint-enable  */}
      </section>
    </Wrapper>
  );
}

export default BookingFotter;
const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 4rem;
  z-index: 1000;
  margin: 0;
  pad: 0;
  background-color: var(--color-white);
  transition: var(--transition);
  ::-webkit-scrollbar {
    display: none;
  }
  .booking__fotter {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    font-size: 1.25rem;
    color: var(--color-black);
    .seat {
      ${FlexCenter()}
      flex-wrap: wrap;
    }
    .paying {
      ${FlexCenter()}
      background-color: #44c020;
    }
  }
`;
