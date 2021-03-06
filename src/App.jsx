import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Media from './components/Media';

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 868px;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  box-shadow: 0 1px 10px #000;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 0 0 10px 10px;
`;

const App = () => (
  <Router>
    <Header/>

    <Content>
      <Route path="/" exact component={Home} />
      <Route path="/contacts/" component={Contacts} />
      <Route path="/media/" component={Media} />
      <Route path="/faq/" component={FAQ} />
    </Content>
  </Router>
);

export default App;
