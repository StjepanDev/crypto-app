import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../shared/Page';

function index() {
  return (
    <Page name="settings">
      <WelcomeMessage />
      <ConfirmButton />
    </Page>
  );
}

export default index;
