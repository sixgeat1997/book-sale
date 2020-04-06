import React from 'react';
import './App.css';
import Sale from './component/Sale';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar'
import Welcome from './component/Welcome';
import Showbook from './component/Showbook';
import Home from './component/Home';
import Footer from './component/Footer';


function App() {

  return (

    <BrowserRouter>
      <div className="body">
        <Navbar />
        <div style={{marginLeft:"200px",marginRight:"200px",marginTop:"10px",height:"1000px"}}>

          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/home'} component={Home} />
            <Route path={'/allbook'} component={Showbook} />
            <Route path={'/sale'} component={Sale} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
