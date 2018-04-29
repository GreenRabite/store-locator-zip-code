import React from 'react';
import NavBar from './navbar/nav_bar';
import MainForm from './main/main_form';

const App = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <div className="main-body">
        <MainForm/>
      </div>
    </div>
  );
};

export default App;
