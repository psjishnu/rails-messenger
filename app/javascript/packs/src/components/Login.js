import React from "react";

function Login() {
  return (
    <>
      <h2 className="ui center aligned large header">
        Welcome to MessageMe - <em>a complete Chat App</em>
      </h2>

      <h4 className="ui center aligned medium icon header">
        <i className="circular orange power off tiny icon"></i>
        Log in to continue
      </h4>

      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <form className="ui form">
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input type="text" placeholder="Username" />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input type="text" placeholder="Password" />
                  <i className="lock icon"></i>
                </div>
              </div>
              <button className="ui orange submit button">Login</button>
            </form>
          </div>
          <div className="middle aligned column">
            <div className="ui big orange disabled button">
              <i className="signup icon"></i>
              Sign Up
            </div>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    </>
  );
}

export default Login;
