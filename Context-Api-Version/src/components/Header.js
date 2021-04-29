import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import {auth} from "../firebase";

function Header() {
  const [{ basket }] = useStateValue();
  const [{ user },dispath] = useStateValue();

  const Logout=()=>{

    auth.signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });

    dispath({
      type:'LOG_OUT'
    })
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {user ? 
        <div >
        <span className="header__optionLineOne">{user.email}</span>
        <span className="header__optionLineTwo" onClick={Logout}>Sing out</span> 
        </div>:
        <Link to="login">
          <div>
          <span className="header__optionLineOne">Guest</span>
           <span className="header__optionLineTwo">Sing in</span></div></Link>}
        
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span
              className="header__optionLineTwo
          header__basketCount"
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;