import React from 'react';
import NavBar from './navbar/nav_bar';
import MainForm from './main/main_form';
import BottomSection from './main/bottom_section';
import Footer from './footer/footer';

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
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
