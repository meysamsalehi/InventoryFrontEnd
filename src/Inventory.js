import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import SideBar from "./Components/SideBar";

const Inventory = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-row justify-center align-items  max-w-screen-2xl mx-auto gap-x-4">
        <SideBar />
        <MainContent />
      </div>

      
    </div>
  );
};

export default Inventory;
