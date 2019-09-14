import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderEl = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;
  background: #2c4890;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  background: #2c4890;
  color: #fff;
  text-align: center;
  width: 25%;
  font-size: 0;
  transition: background 300ms;

  &:hover {
    background: #4060b4;
  }
`;

const LinkEl = styled(Link)`
  display: inline-block;
  padding: 20px;
  color: #fff;
  text-decoration: none;
  width: 100%;
  font-size: 20px;
  box-sizing: border-box;
  text-transform: uppercase;
  font-weight: bold;
  transition: opacity 300ms;

  &:visited {
    color: #fff;
  }

  &:hover {
    opacity: .8;
  }
`;

const Header = () => (
  <HeaderEl>
    <Navigation>
      <Item>
        <LinkEl to="/">Home</LinkEl>
      </Item>
      <Item>
        <LinkEl to="/contacts/">Contacts</LinkEl>
      </Item>
      <Item>
        <LinkEl to="/media/">Media</LinkEl>
      </Item>
      <Item>
        <LinkEl to="/faq/">FAQ</LinkEl>
      </Item>
    </Navigation>
  </HeaderEl>
);

export default Header;
