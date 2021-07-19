import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navBarLink } from '../../utils/constants';

function NavLink() {
  return (
    <Wrapper>
      <ul>
        {navBarLink.map((item) => (
          <li className="nav_link" key={item.id}>
            <Link to={item.path}>
              <span className="title">{item.title}</span>
            </Link>
          </li>
        ))}
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
      background-color: var(--color-emphasis-300);
    }
  }
`;
