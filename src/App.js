import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import PupolarMovies from './PupolarMovies';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Movieprofile from './MovieProfile';
function App() {
  

  const api_key = '88626d5c6ba59d5c33bd290f8a75e0a9';
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' 


//https://api.themoviedb.org/3/movie/530/videos?api_key=88626d5c6ba59d5c33bd290f8a75e0a9 = video id
//https://www.youtube.com/watch?v=R3Unq55oBxQ = youTube video key
//https://api.themoviedb.org/3/movie/157336?api_key=88626d5c6ba59d5c33bd290f8a75e0a9
//https://api.themoviedb.org/3/movie/157336/videos?api_key=88626d5c6ba59d5c33bd290f8a75e0a9

var nimrod = 'nimrod';

  return (
    <div className="App">
 
    <BrowserRouter>
      
     
      <Switch>

        <Route path="/" exact component={PupolarMovies} />
        <Route path="/MovieProfile" exact component={Movieprofile} />
       

      </Switch>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
