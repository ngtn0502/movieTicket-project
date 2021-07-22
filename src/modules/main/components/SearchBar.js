import React from 'react';
import styled from 'styled-components';
import {
  movieCategory,
  movieCine,
  movieHour,
  movieDate,
} from '../../utils/constants';
import { FlexCenter, Flex } from '../../utils/mixin.js';
import MovieSearch from './SearchForm/MovieSearch';
import CinemaSearch from './SearchForm/CinemaSearch';
import DateSearch from './SearchForm/DateSearch';
import HourSearch from './SearchForm/HourSearch';

function SearchBar({ className }) {
  return (
    <BigWrapper className={className}>
      <Search className="section-middle">
        <Wrapper>
          <div className="search">
            {/* movie category */}
            <div className="search__field">
              <MovieSearch />
            </div>
            {/* movie cine */}
            <div className="search__field">
              <CinemaSearch />
            </div>
            {/* movie date */}s
            <div className="search__field">
              <DateSearch />
            </div>
            {/* movie hour */}
            <div className="search__field">
              <HourSearch />
            </div>
            <div search__button>
              <button type="button" className="btn">
                Mua Vé Ngay
              </button>
            </div>
          </div>
        </Wrapper>
      </Search>
    </BigWrapper>
  );
}

export default SearchBar;
const BigWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Search = styled.main`
  position: absolute;
  /* margin: 0 auto; */
  z-index: 105;
`;

const Wrapper = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  background: var(--color-white);
  width: 100%;
  height: 10vh;
  ${FlexCenter()}
  .search {
    width: 90%;
    ${Flex({ justify: 'space-between', algin: 'center' })}
  }
  .search__field {
    position: relative;
    ${FlexCenter()}
    select {
      font-size: 1rem;
      outline: none;
      border: none;
      height: 2rem;
      width: 100%;
    }
    :after {
      content: '';
      position: absolute;
      top: 50%;
      left: 120%;
      height: 100%;
      transform: translate(50%, -50%);
      background-color: var(--color-gray-400);
      border-right: 2px solid #fff;
      border-right-color: rgba(238, 238, 238, 0.88);
    }
  }
`;
