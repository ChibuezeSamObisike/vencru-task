import SideBar from "./components/SideBar";
import Tab from "./components/Tab";
import PaymentMethod from "./components/PaymentMethod";
import AppTable from "./components/AppTable";

function App() {
  return (
    <div className='flex w-full'>
      <div className='md:max-w-[20%] fixed'>
        <SideBar />
      </div>
      <div className='p-8 bg-[#f9fafb] md:ml-[20%] w-full'>
        <Tab />
        <PaymentMethod />
        <AppTable />
      </div>
    </div>
  );
}

export default App;
