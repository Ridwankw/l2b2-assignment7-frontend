import Sidebar from "./Sidebar";
import StatisticalInsights from "./StatisticalInsights";
import UserSupplies from "./UserSupplies";

const DashboardHome = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
        <div className="grid grid-cols-2 gap-4">
          <UserSupplies />
          <StatisticalInsights />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
