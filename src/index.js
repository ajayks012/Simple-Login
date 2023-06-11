import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import UserProfile from "./UserProfile";
import { Provider, useSelector } from "react-redux";
import store from "./Redux/Store";
import { Redirect } from "react-router-dom";
// const RouterComponent = () => {
//   // const isLoggedIn = useSelector((state) => state.isLoggedIn);

//   if (true) {
//     return (
//       <Switch>
//         <Route path="/" element={<App />} />
//         {/* <Route path="/login" element={<Login />} /> */}
//         <Route path="/profile" element={<UserProfile />} />
//       </Switch>
//     );
//   } else {
//     return <Redirect to="/login" />;
//   }
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      {/* <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes> */}
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
      {/* {RouterComponent()} */}
    </Router>
  </Provider>
);
