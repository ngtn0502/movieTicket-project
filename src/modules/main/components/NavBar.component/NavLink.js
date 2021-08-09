import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { navBarLink } from '../../../utils/constants';

function NavLink({
  logoutHandler,
  setIsSideBarShow,
  isLoginSuccess,
  userLogin,
}) {
  // const history = useHistory();
  // const navLinkHandler = (item) => {
  //   if (item.id === '4') {
  //     // history.push(`${item.goTo}`);
  //     document
  //       .getElementById(`${item.path}`)
  //       .scrollIntoView({ behavior: 'smooth' });
  //   }
  //   if (item.id === '1') {
  //     history.push(`${item.path}`);
  //   }
  // };

  return (
    <Wrapper>
      {/*eslint-disable*/}
      <ul>
        {navBarLink.map((item) => (
          <Link smooth to={`${item.goTo}${item.path}`}>
            <li
              className='nav_link'
              key={item.id}
              onClick={() => {
                setIsSideBarShow(false);
              }}
            >
              <span className='nav_title'>{item.title}</span>
            </li>
          </Link>
        ))}
        {isLoginSuccess || userLogin && (
          <li
            className='nav_link mobile'
            key={5}
            onClick={() => {
              setIsSideBarShow(false);
              return logoutHandler();
            }}
          >
            <span className='nav_title'>LOG OUT</span>
          </li>
        )}
      </ul>
    </Wrapper>
  );
}

export default NavLink;

const Wrapper = styled.div`
  .nav_link {
    cursor: pointer;
    font-weight: 400;
    transition: var(--transition);
    border-radius: var(--radius);
    padding: 1rem;
    &:hover {
      background-color: var(--color-redNetflix);
    }
    .nav_title {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
  }
`;
