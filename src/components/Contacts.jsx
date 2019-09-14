import React from 'react';
import styled from 'styled-components';

import LeafletMap from './LeafletMap';

const Item = styled.li`
padding: 10px;
font-size: 20px;
`;

const Bla = styled(LeafletMap)`
width: 100%;
height: 400px;
`

const Contacts = () => {
  return (
    <div>
      <h2>Контакти</h2>
  
      <div>
        <ul>
          <Item>
            Телефон - <a href="tel:0322546116">(032) 254 61 16</a>
          </Item>
          <Item>
            Группа Facebook -{' '}
            <a href="https://www.facebook.com/pg/LCNPUBD" target="_blank">
              Львівський центр надання послуг учасникам бойових дій
            </a>
          </Item>
          <Item>
            Электронна пошта - <a href="mailto:centr.ubd@gmail.com">centr.ubd@gmail.com</a>
          </Item>
        </ul>

        <Bla />
      </div>
    </div>
  );
}

export default Contacts;
