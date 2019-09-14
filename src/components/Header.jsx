import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderEl = styled.div`
  display: flex;
  justify-content: center;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Header = () => (
  <HeaderEl>
    <Navigation>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contacts/">Contacts</Link>
      </li>
      <li>
        <Link to="/media/">Media</Link>
      </li>
      <li>
        <Link to="/faq/">FAQ</Link>
      </li>
    </Navigation>
  </HeaderEl>
);

export default Header;
