import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Auth from "routes/Auth";
import Home from "routes/Home";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? ( // 로그인 되어 있다면 Home 화면, 아니라면 Auth 화면을 보여준다.
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route> 
                    </> 
                ) : ( 
                    <Route exact path="/"> 
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    )
};

// export default: 이 객체에는 모듈이 하나만 있다. (AppRouter)
export default AppRouter;