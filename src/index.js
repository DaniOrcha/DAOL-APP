
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import './Styles/mainstyle.css';
import './Styles/portfolio.css';

import MainPage from './Pages/MainPage';
import Unity from './Pages/Unity';
import Ethereum from './Pages/Ethereum';
import IoT from './Pages/Iot';
import Automation from './Pages/Automation';
import Electronic from './Pages/Electronic';
import Contact from './Pages/Contact';
import Visit from './Pages/Visits';
import ImageGallery from './Pages/Imagegallery';


import Navbar from './Components/navbar';
import Footer from './Components/Footer';


ReactDOM.render(
    <Router>

        < Navbar />

        <Switch>
            <Route exact path="/" component={withRouter(MainPage)} />
            <Route path="/Unity" component={withRouter(Unity)} />
            <Route path="/Ethereum" component={withRouter(Ethereum)} />
            <Route path="/IoT" component={withRouter(IoT)} />
            <Route path="/Automation" component={withRouter(Automation)} />
            <Route path="/Electronic" component={withRouter(Electronic)} />
            <Route path="/Contact" component={withRouter(Contact)} />
            <Route path="/Visits" component={withRouter(Visit)} />
            <Route path="/Imagegallery" component={withRouter(ImageGallery)} />
        </Switch>

        <Footer />

    </Router>


    ,
    document.getElementById('root')
);
