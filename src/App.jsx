import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import FAQ from './components/FAQ';

const Home = () => 'Home';
const Contacts = () => 'Contacts';
const Media = () => 'Media';

const Content = styled.div`
  display: flex;
  max-width: 868px;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

const App = () => (
  <Router>
    <Content>
      <Header/>

      <Route path="/" exact component={Home} />
      <Route path="/contacts/" component={Contacts} />
      <Route path="/media/" component={Media} />
      <Route path="/faq/" component={FAQ} />
    </Content>
  </Router>
);

export default App;
