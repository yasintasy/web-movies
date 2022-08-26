import React from 'react';
import NavigationBar from './components/NavigationBar';
import './App.css';
import "./style/landingpage.css";
import Intro from './components/Intro';
import Trending from './components/Trending'
import Superhero from './components/Superhero'


function App() {
  return (
    <div>
      <div className='myBg'>
        <NavigationBar />
        <Intro />
      </div>
      <div className='trending'>
        <Trending />
      </div>
      <div className='superhero'>
        <Superhero />
      </div>

    </div>
  )
}

export default App;
