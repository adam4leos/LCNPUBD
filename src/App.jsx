import React from 'react';
import styled from 'styled-components';

const AppEl = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <AppEl>
      <Header>
        <ul>
          <li>
            Main
          </li>
          <li>
            Media
          </li>
          <li>
            Contacts
          </li>
          <li>
            FAQ
          </li>
        </ul>
      </Header>
    </AppEl>
  );
}

export default App;
