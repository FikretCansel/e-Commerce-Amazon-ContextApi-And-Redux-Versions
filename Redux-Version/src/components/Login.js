import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import "../css/Login.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../redux/actions/userActions";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SingIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const SingUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => console.log(auth))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="body">
      <form>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={email}
            placeholder="e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-success" onClick={SingIn}>
            Sing in
          </button>
          <button className="btn btn-success" onClick={SingUp}>
            Sing up
          </button>
        </div>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setUser: bindActionCreators(userActions.setUser, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(Login);
