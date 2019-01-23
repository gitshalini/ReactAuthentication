import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';

  export default class App extends React.Component{
    render(){
      return(
        <div>
        <Game></Game>
        </div>
      );
    }
  }
  
  
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  