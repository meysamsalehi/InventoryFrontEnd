import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import SideBar from "./Components/SideBar";
import InventoryProvider from "./Components/Providers/InventoryProvider";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import RouteList from "./Components/Layout/RouteList";
import ProfileUser from "./Components/ProfileUser";
import Dashboard from "./Components/Dashboard";
import Download from "./Components/Download";

const Inventory = () => {
  return (
    <InventoryProvider>
      <Layout>
        <Routes>
          {RouteList.map((routeItem, index) => {
            return (
              <Route
                key={index}
                path={routeItem.path}
                element={<routeItem.element />}
                className={(navLink) => (navLink.isActive ? "active" : "")}
              />
            ); // spreadW
          })}
          <Route path="/ProfileUser/*" element={<ProfileUser />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="download" element={<Download />} />
          </Route>
        </Routes>
      </Layout>
    </InventoryProvider>
  );
};

export default Inventory;
