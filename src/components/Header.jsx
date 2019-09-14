import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderEl = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #2c4890;
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 868px;
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
  transition: color 300ms;

  &:visited {
    color: #fff;
  }

  &:hover {
    color: #f6f667;
  }

  @media (max-width: 678px) {
    font-size: 15px;
  }
`;

const Header = () => (
  <HeaderEl>
    <Navigation>
      <Item>
        <LinkEl to="/">Головна</LinkEl>
      </Item>
      <Item>
        <LinkEl to="/contacts/">Контакти</LinkEl>
      </Item>
      <Item>
        <LinkEl to="/media/">Медіа</LinkEl>
      </Item>
      <Item>
        <LinkEl to="/faq/">Питання</LinkEl>
      </Item>
    </Navigation>
  </HeaderEl>
);

export default Header;
