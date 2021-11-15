import './App.css';
//Imports
import React, { useState } from 'react';
/* import {Link} from 'react-router-dom';*/
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home.jsx';
import LifeTime from './components/LifeTime';
import NextBirthday from './components/NextBirthday';
import AboutMe from './components/AboutMe';



function App() {

  const [timeLife,setTimeLife]=useState({TimeLife:0});
  const [timeLess,setTimeLess]=useState({TimeLess:0})

  function calculateNextBirthday(b){
    const today = new Date();
    var thisYearB = new Date(`${b.getMonth()+1} ${b.getDate()}, ${today.getFullYear()}`);
    if(today.getTime()>thisYearB.getTime()){
      var nextBirthday = new Date(`${b.getMonth()+1} ${b.getDate()}, ${today.getFullYear()+1}`);
      setTimeLess({TimeLess:nextBirthday-today});
    }else{
    setTimeLess({TimeLess:thisYearB-today});
    }
  }

  function lifeTime(b){
    const today = new Date();
    setTimeLife({TimeLife:b-today});
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/lifeTime' element={<LifeTime lifeTime={lifeTime} time={timeLife}/>}/>
        <Route exact path='/nextBirthday' element={<NextBirthday timeLess={timeLess} calculateNextBirthday={calculateNextBirthday}/>}/>
        <Route exact path='/aboutMe' element={<AboutMe className='about'/>}/>

      </Routes>
    </div>
  );
}

export default App;
