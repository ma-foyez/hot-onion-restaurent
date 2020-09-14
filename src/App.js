import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Navbar } from 'react-bootstrap';
import Header from './Components/Header/Header';
import TopBanner from './Components/TopBanner/TopBanner';
import CategoryContainer from './Components/CategoryContainer/CategoryContainer';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodDetails from './Components/FoodDetails/FoodDetails';
function App() {

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <TopBanner></TopBanner>
            <CategoryContainer></CategoryContainer>
            <Footer></Footer>
          </Route>
          <Route exact path="/home">
            <TopBanner></TopBanner>
            <CategoryContainer></CategoryContainer>
            <Footer></Footer>
          </Route>
          <Route path="/type/:foodID">
            <FoodDetails></FoodDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
