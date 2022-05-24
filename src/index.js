import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import RouteList from "./Components/Layout/RouteList";
import Dashboard from "./Components/Dashboard";
import Download from "./Components/Download";
import ProfileUser from "./Components/pages/ProfileUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          {RouteList.map((routeItem, index) => {
            return (
              <Route
                key={index}
                path={routeItem.path}
                element={<routeItem.element />}
                className={(navLink) => (navLink.isActive ? "bg-red-100" : "bg-sky-800")}
              />
            ); // spreadW
          })}
          <Route path="/ProfileUser/*" element={<ProfileUser />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="download" element={<Download />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>,

  // <AppRedux />,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
