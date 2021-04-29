import React,{useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout.js";
import Login from "./components/Login"
import { auth } from "./firebase";
import { useStateValue } from "./context/StateProvider";
import Payment from "./components/Payment.js"
import ProductUpdater from "./components/ProductUpdater";

function App() {
  const [{user},dispatch]=useStateValue();
  
  useEffect(() => {
    //will only once when app component loads
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        console.log(authUser)
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
  }, [])



  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment/>
          </Route>
          
          {user? <Route path="/update" component={ProductUpdater}/>:null}
         
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
