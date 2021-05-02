import React,{useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout.js";
import Login from "./components/Login"
import { auth } from "./firebase";
//import { useStateValue } from "./context/StateProvider";
import Payment from "./components/Payment.js"
import ProductUpdater from "./components/ProductUpdater";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "./redux/actions/userActions";


function App(props) {
  
  function setUser(authUser){
    props.actions.setUser(authUser);
  }


  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        setUser(authUser);
      }
      else{
        //the user is logged out
        props.actions.setUser(null);
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
          
           <Route path="/update" component={ProductUpdater}></Route>
         
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
function mapDispatchToProps(dispatch){
  return {
    actions:{
      setUser:bindActionCreators(userActions.setUser,dispatch)
    }
  }
}
export default connect(null,mapDispatchToProps)(App);
