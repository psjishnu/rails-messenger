import React, { useEffect, useState } from "react";
import { useRoutes, navigate } from "hookrouter";
import Home from "./components/Home";
import Login from "./components/Login";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/Navbar";
import "./styles.css";
import { isLoggedin } from "./helpers/apiRequest";

export const AuthContext = React.createContext({
  user: null,
});

const publicroutes = {
  "/login": () => <Login />,
};
const authRoutes = {
  "/": () => <Home />,
};
const App = () => {
  const [user, setuser] = useState(null);
  const publicRoutes = useRoutes(publicroutes);
  const auth = useRoutes(authRoutes);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (
      sessionStorage.getItem("session_id") &&
      sessionStorage.getItem("_csrf_token")
    ) {
      isLoggedin().then((res) => {
        if (res.success) {
          setuser(res.data.username);
        } else {
          navigate("/login");
        }
        setloading(false);
      });
    } else {
      navigate("/login");
      setloading(false);
    }
  }, []);

  const Notfound = () => (
    <div style={{ width: "100%", textAlign: "center", marginTop: "20%" }}>
      Error 404: Page not found
    </div>
  );
  return (
    <AuthContext.Provider value={{ user }}>
      <Navbar />
      {loading ? (
        <div style={{ width: "100%", textAlign: "center", marginTop: "20%" }}>
          Loading
        </div>
      ) : (
        <div className="ui container">
          {!user ? publicRoutes ?? <Notfound /> : auth ?? <Notfound />}
        </div>
      )}
    </AuthContext.Provider>
  );
};

export default App;
