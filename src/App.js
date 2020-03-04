import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import ClientMain from 'Components/ClientMain'
import {BrowserRouter} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css' //had to add this in order to get materialize

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ClientMain />
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
<header className="App-header">
  <Counter />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <span>
    <span>Learn </span>
    <a
      className="App-link"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React
    </a>
    <span>, </span>
    <a
      className="App-link"
      href="https://redux.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Redux
    </a>
    <span>, </span>
    <a
      className="App-link"
      href="https://redux-toolkit.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Redux Toolkit
    </a>
    ,<span> and </span>
    <a
      className="App-link"
      href="https://react-redux.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React Redux
    </a>
  </span>
</header>
*/
