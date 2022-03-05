import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

function AppBar() {
  return (
    <Bar>
      <div>Crypto</div>
      <div></div>
      <div>Dash Board</div>
      <div>Settings</div>
    </Bar>
  );
}

export default AppBar;
