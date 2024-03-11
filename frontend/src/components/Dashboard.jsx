import Balance from "./Balance";
import Topbar from "./Topbar";
import Users from "./Users";

function Dashboard() {
  return (
    <div className="w-full h-[100vh] bg-zinc-100 px-[4vw]">
      <Topbar />
      <Balance />
      <Users />
    </div>
  );
}

export default Dashboard;
