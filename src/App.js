
import './App.css';
import Header from './componet/Header/Header';
import Shop from './componet/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './componet/Review/Review';
import Inventory from './componet/Inventory/Inventory';
import NotFound from './componet/NotFound/NotFound';
import ProductDetail from './componet/ProductDetail/ProductDetail';
import Login from './componet/Login/Login';
import Shipment from './componet/Shipment/Shipment';
import React, { createContext, useState } from 'react';
import PrivateRoute from './componet/PrivateRoute/PrivateRoute';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     
      <Router>
       <Header></Header>
          <Switch>
              <Route path='/shop'>
                  <Shop></Shop> 
              </Route>
              <Route path='/review'>
                  <Review></Review>
              </Route>
              <PrivateRoute path='/inventory'>
                    <Inventory></Inventory>
              </PrivateRoute>
              <Route path='/login'>
                   <Login></Login>
              </Route>
              <PrivateRoute path='/shipment'>
                   <Shipment></Shipment>
              </PrivateRoute>
              <Route exact path='/'>
                  <Shop></Shop>
              </Route>
              <Route path='/product/:productKey'>
                  <ProductDetail></ProductDetail>
              </Route>
              <Route path='*'>
                  <NotFound></NotFound>
              </Route>
          </Switch>
      </Router>
      
        
    </UserContext.Provider>
  );
}

export default App;
