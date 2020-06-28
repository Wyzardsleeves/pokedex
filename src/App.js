import React from 'react';
import 'App.css';
import ClientHome from 'Components/ClientHome'
import {BrowserRouter} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css' //had to add this in order to get materialize

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ClientHome />
      </BrowserRouter>
    </div>
  );
}

export default App;
