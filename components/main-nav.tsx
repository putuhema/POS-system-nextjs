import {
  RiDashboardFill,
  RiFileList3Line,
  RiTimeLine,
  RiBillLine,
  RiNotification3Fill,
} from "react-icons/ri";

const MainNav = () => {
  return (
    <nav className="flex justify-between items-center p-6 border-b-2  bg-white">
      <div>Logo</div>
      <div className="flex gap-4 items-center justify-center">
        <p className="flex items-center gap-2 text-neutral-500 hover:text-blue-600 cursor-pointer hover:font-bold">
          <RiDashboardFill />
          <span className="">Dashboard</span>
        </p>
        <p className="flex items-center gap-2 text-neutral-500 hover:text-blue-600 cursor-pointer hover:font-bold">
          <span>
            <RiFileList3Line />
          </span>
          Order List
        </p>
        <p className="flex items-center gap-2 text-neutral-500 hover:text-blue-600 cursor-pointer hover:font-bold">
          <span>
            <RiTimeLine />
          </span>
          History
        </p>
        <p className="flex items-center gap-2 text-neutral-500 hover:text-blue-600 cursor-pointer hover:font-bold">
          <span>
            <RiBillLine />
          </span>
          Bills
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <RiNotification3Fill />
        <div className="w-8 h-8 rounded-full bg-neutral-500"></div>
      </div>
    </nav>
  );
};

export default MainNav;
