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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipment from './Components/Shipment/Shipment';
import Login from './Components/Login/Login';

export const userContext = createContext();

function App() {
  const [addProduct, setAddProduct] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    password: "",
    email: "",
  })
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header addProduct={addProduct} setAddProduct={setAddProduct}></Header>
        <Switch>
          <Route exact path="/">
            <TopBanner></TopBanner>
            <CategoryContainer addProduct={addProduct} setAddProduct={setAddProduct}></CategoryContainer>
            <Footer></Footer>
          </Route>
          <Route exact path="/home">
            <TopBanner></TopBanner>
            <CategoryContainer addProduct={addProduct} setAddProduct={setAddProduct}></CategoryContainer>
            <Footer></Footer>
          </Route>
          <Route path="/type/:foodID">
            <FoodDetails addProduct={addProduct} setAddProduct={setAddProduct}></FoodDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment addProduct={addProduct} setAddProduct={setAddProduct}></Shipment>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
