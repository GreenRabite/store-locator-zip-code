import React from 'react';
import NavBar from './navbar/nav_bar';
import MainForm from './main/main_form';
import BottomSection from './main/bottom_section';

const App = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <div>
        <MainForm/>
        <BottomSection/>
      </div>
    </div>
  );
};

export default App;
