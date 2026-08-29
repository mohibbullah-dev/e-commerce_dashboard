import { CgMenuOreos } from "react-icons/cg";
const Header = ({ isSidebarOpen, setIsSiderbarOpen }) => {
  return (
    <div className="">
      <div className="flex-1 justify-between items-center bg-amber-300 h-[80px] m-2 rounded-md">
        <div onClick={() => setIsSiderbarOpen(!isSidebarOpen)}>
          <CgMenuOreos className={`m-5 block lg:hidden`} size={24} />
        </div>
        <div>fsfsd</div>
      </div>
    </div>
  );
};

export default Header;
