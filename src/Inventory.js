import Header from './Components/Header';
import MainContent from './Components/MainContent';
import SideBar from './Components/SideBar';

const Inventory = () => {
  return (
    <div className="h-full  bg-white">
      <Header />

      <div className="flex flex-row justify-center align-items container max-w-screen-xl mx-auto gap-x-4">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
};

export default Inventory;
