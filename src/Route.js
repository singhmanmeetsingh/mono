import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

 const MainRoute =() => {

    const Landing =React.lazy(()=>{
      return import("./routes/Landing/Landing")
    })

    const Button = React.lazy(() => {
        return import("./routes/Buttons/Button");
      });

    const My404Component = React.lazy(()=>{
        return import("./routes/ErrorComponent")
    })

  return (
    <Switch>
        <Route path="/" render={(props)=><Landing {...props} />} />
        <Route path="/button" render={(props) => <Button {...props} />} />
        <Route path='*' exact={true} component={My404Component} />
    </Switch>
  );
}

export default MainRoute;