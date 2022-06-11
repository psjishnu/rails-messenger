import React, { useContext } from "react";
import { A } from "hookrouter";
import { AuthContext } from "../App";
import { logout } from "../helpers/apiRequest";

function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="ui small inverted menu">
      <div className="ui container">
        <A href="/" className="item">
          Chatroom
        </A>
        <a className="item">Messages</a>
        <div className="right menu">
          {user ? (
            <A
              href="#"
              onClick={() => {
                logout().then(() => {
                  localStorage.removeItem("session_id");
                  localStorage.removeItem("_csrf_token");
                  window.location.reload(false);
                });
              }}
              className="item"
            >
              Log out
            </A>
          ) : (
            <>
              <A href="/login" className="item">
                Log in
              </A>
              <div className="item">
                <A href="#" className="ui primary button">
                  Sign Up
                </A>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
