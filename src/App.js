import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { useAuth0 } from "./react-auth0-spa";

import './App.scss';

const load = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

const App = () => {
  const { loading, isAuthenticated, user, claims, loginWithPopup, logout } = useAuth0();
  
  const load = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;
  
  if (loading) {
    return load();
  }
  
  if(user) {
    user.claims = claims;
  }
  return (
    <HashRouter>
      <React.Suspense fallback={load()}>
        <Switch>
          <Route path="/" name="Home" render={props => 
            <DefaultLayout 
              isAuthenticated={isAuthenticated} 
              user={user}
              login={loginWithPopup} 
              logout={logout} 
              {...props}
            />} 
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
