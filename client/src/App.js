import React from 'react';
import Main from './Components/Main';
import { Router } from '@reach/router';
import Detail from './Components/Detail';
import TheMain from './Components/TheMain';
import PlayerList from './Components/PlayerList';
import AddPlayer from './Components/AddPlayer';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AddPlayer path="/players/addplayer" />
        <TheMain path="/" />
        <Main path="/player/list"/>
        <Detail path="/:id/detail" />
        
        
      </Router>
    </div>
  );
}

export default App;
