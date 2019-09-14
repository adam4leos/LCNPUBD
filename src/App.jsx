import React from 'react';
import styled from 'styled-components';

import FAQ from './components/FAQ';

const AppEl = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppEl>
      <FAQ />
    </AppEl>
  );
}

export default App;
