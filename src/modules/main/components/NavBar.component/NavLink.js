import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { navBarLink } from '../../../utils/constants';

function NavLink() {
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
      <ul>
        {navBarLink.map((item) => {
          console.log(`${item.goTo}${item.path}`);
          return (
            <li className="nav_link" key={item.id}>
              <Link smooth to={`${item.goTo}${item.path}`}>
                <span className="nav_title">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}

export default NavLink;

const Wrapper = styled.div`
  .nav_link {
    cursor: pointer;
    padding: 0.5rem;
    transition: var(--transition);
    border-radius: var(--radius);
    &:hover {
      background-color: var(--color-redNetflix);
    }
  }
`;
