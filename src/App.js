import SideBar from "./components/SideBar";
import Tab from "./components/Tab";
import PaymentMethod from "./components/PaymentMethod";
import AppTable from "./components/AppTable";
import BillingFlex from "./components/BillingFlex";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='flex flex-col md:flex-row w-full'>
      <div className='md:max-w-[20%] fixed'>
        <SideBar />
      </div>
      <Navbar />
      <div className='p-8 bg-[#f9fafb] md:ml-[20%] w-full'>
        <Tab />
        <PaymentMethod />
        <BillingFlex />
        <AppTable />
      </div>
    </div>
  );
}

export default App;
