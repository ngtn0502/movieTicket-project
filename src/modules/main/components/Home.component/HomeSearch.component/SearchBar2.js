import React from 'react';
import styled from 'styled-components';
import searchBg from '../../../../../assets/img/searchSection/ticket-bg01.jpg';
import searchNews from '../../../../../assets/img/searchSection/news.png';
import searchMovie from '../../../../../assets/img/searchSection/ticket-tab01.png';
import city from '../../../../../assets/img/searchSection/city.png';
import { FlexCenter, FlexHCenter } from '../../../../utils/mixin';
import CategoryItem from './CategoryItem.js';
import FilterItem from './FilterItem.js';
import MovieSearch from './SearchForm/MovieSearch.js';
import CitySearch from './SearchForm/CitySearch.js';

function SearchBar2({ className }) {
  return (
    <Wrapper className={`section-middle ${className}`}>
      <div className="searchBar">
        <div className="searchBar__top">
          <div className="searchBar__title">
            <p className="subNameMovie">WELCOME TO G-CINEMA</p>
            <p className="nameMovie">WHAT ARE YOU LOOKING FOR</p>
          </div>
          <div className="searchBar__catagory">
            <CategoryItem
              searchMovie={searchMovie}
              message="Movie"
              to="#homePage__search"
            />
            <CategoryItem
              searchMovie={searchNews}
              message="News"
              to="#homePage__news"
            />
          </div>
        </div>
        <div className="searchBar__bottom">
          <div className="searchBar__card">
            <div className="searchBar__bar">{/*  */}</div>
            <div className="searchBar__filter">
              <div className="filter__item">
                <MovieSearch />
                {/* <CitySearch /> */}
                {/* <FilterItem /img={city} message="City" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SearchBar2;
const Wrapper = styled.section`
  margin: 5rem auto;
  background-color: #004953;
  border-radius: var(--radius2);
  font-weight: 600;
  .searchBar {
    padding: 2rem;
  }
  /* TOP */
  .searchBar__top {
    gap: 2rem;
    .searchBar__title {
      p {
        text-align: center;
      }
      .subNameMovie {
        color: #31d7a9;
        font-size: 1.25rem;
      }
      .nameMovie {
        font-size: 1.5rem;
      }
    }
    .searchBar__catagory {
      display: flex;
      justify-content: center;
      padding: 1rem;
      gap: 3rem;
    }
  }
  /* BOTTOM */
  .searchBar__bottom {
    .searchBar__card {
      padding: 2rem;
      background-color: var(--color-bg);
      border-radius: var(--radius2);
    }
  }

  @media screen and (min-width: 768px) {
    .searchBar {
      display: grid;
      padding: 2rem;
      /* TOP */
      .searchBar__top {
        display: grid;
        grid-template-columns: 1fr 1fr;
        .searchBar__title {
          p {
            text-align: left;
          }
          .subNameMovie {
            font-size: 1.5rem;
          }
          .nameMovie {
            font-size: 2rem;
          }
        }
      }
      /* Bottom */
      .searchBar__bottom {
      }
    }
  }
  @media screen and (min-width: 992px) {
  }
`;
