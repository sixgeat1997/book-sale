import React from 'react';
import './App.css';
import Sale from './component/Sale';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar'
import Welcome from './component/Welcome';
import Promotioms from './component/Promotions';
import Showbook from './component/Showbook';


function App() {

  return (

    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path={'/'} component={Welcome} />
          <Route path={'/allbook'} component={Showbook} />
          <Route path={'/sale'} component={Sale} />
          <Route path={'/promotions'} component={Promotioms} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
