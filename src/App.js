import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import  routesConfig from './common/routesConfig'

function App (){
  return (
    <BrowserRouter>
      {routesConfig && Array.isArray(routesConfig) ?
        routesConfig.map((route,index) => <Route {...route} key={index}/>)
        : null}
    </BrowserRouter>
  );
}

export default App;
