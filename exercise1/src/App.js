import React from 'react';
import './App.css';
import Menu from './components/Menu';
import PopularNews from './components/PopularNews';
import HeadNews from './components/HeadNews';
import SideNews from './components/SideNews';



function App() {
  return(
    <div className= 'backGround'>
      <Menu />
      <PopularNews />
      <div className='sideBySide'>
      <HeadNews />
      <SideNews />
      </div>
    </div>
  );
}

export default App;