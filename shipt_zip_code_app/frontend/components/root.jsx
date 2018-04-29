import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';

const Root= ({store}) => {
  return (
      <HashRouter>
        <App/>
      </HashRouter>
  );
};

export default Root;
