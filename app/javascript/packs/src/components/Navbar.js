import React from "react";
import { useRoutes, A } from "hookrouter";

function Navbar() {
  const routes = useRoutes;
  return (
    <div className="ui small inverted menu">
      <div className="ui container">
        <A href="/" className="item">
          Chatroom
        </A>
        <a className="item">Messages</a>
        <div className="right menu">
          <a className="item">Log out</a>
          <A href="/login" className="item">
            Log in
          </A>
          <div className="item">
            <A href="/signup" className="ui primary button">
              Sign Up
            </A>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
