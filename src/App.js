import React, { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import './App.scss';
import MainRoute from "./Route";
 const App =() => {

  // const Button = React.lazy(() => {
  //   return import("./routes/Buttons/Button");
  // });
  // const route =(
  //   <Switch>
  //       <Route path="/button" render={(props) => <Button {...props} />} />
  //   </Switch>
  // )

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}><MainRoute/></Suspense>
    </>
  );
}

export default App;
