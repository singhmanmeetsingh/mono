import React, { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import './App.scss';
import MainRoute from "./Route";
import loaderImg from './assets/images/animated_loader.gif'
 const App =() => {

  const Loader = () => (
    <>
      <img src={loaderImg} className="loader"/>
    </>
  )

  return (
    <>
    <Suspense fallback={<Loader/>}><MainRoute/></Suspense>
    </>
  );
}

export default App;
