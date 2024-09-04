import "./App.css";
import { useState } from "react";
import logo from "./assets/logo.png";
import navlogo from "./assets/navlogo.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUserCircleCheckThin, PiHandbagLight } from "react-icons/pi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdOutlineChair } from "react-icons/md";
import { LuFileInput } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiExchangeLine,
} from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { TbLockCheck } from "react-icons/tb";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import Card from './Components/Crads/Card';
import Graphone from './Components/Graphone/Graphone';
import GrapheTwo from './Components/GrapheTwo/GrapheTwo';
import Status from './Components/Status/Status';
import Client from './Components/Clients/Client';
import Chat from './Components/LiveChat/Chat';


const dropdownData = [
  {
    name: "User Management",
    icon: <PiUserCircleCheckThin />,
    options: ["Option 1", "Option 2"],
  },
  {
    name: "Job Portal Setup",
    icon: <PiHandbagLight />,
    options: ["Option 1", "Option 2"],
  },
  {
    name: "Recruitment",
    icon: <AiOutlineFileSearch />,
    options: ["Option 1", "Option 2"],
  },
  {
    name: "HR",
    icon: <MdOutlineChair />,
    options: ["Option 1", "Option 2"],
  },
  {
    name: "Leave Management",
    icon: <LuFileInput />,
    options: ["Option 1", "Option 2"],
  },
  {
    name: "General Setup",
    icon: <CiSettings />,
    options: ["Option 1", "Option 2"],
  },
  {
    name: "Functional Setup",
    icon: <MdOutlineWifiProtectedSetup />,
    options: ["Option 1", "Option 2"],
  },
  {
    name: "Transactions",
    icon: <RiExchangeLine />,
    options: ["Option 1", "Option 2"],
  },
  {
    name: "Roles and Permission",
    icon: <TbLockCheck />,
    options: ["Option 1", "Option 2"],
  },
];
function App() {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (name) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  return (
    <>
      <div className="dashboard-home-page-content">
        <div className="dashboard-main-content-start">
          <div className="dashboard-left-side-div">
            <div className="logo-arrowbutton">
              <img src={logo} alt="Logo" />
              <button>
                <FaArrowLeftLong />
              </button>
            </div>
            <div className="dashboard-dropdown-menu">
              <div className="dropdown-menu">
                <LuLayoutDashboard />
                <p>Dashboard </p>
              </div>

              {dropdownData.map((item) => (
                <div key={item.name}>
                  <div
                    className="dropdown-menu-list"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.icon}
                    <p>{item.name}</p>
                    {openDropdowns[item.name] ? (
                      <RiArrowDropUpLine />
                    ) : (
                      <RiArrowDropDownLine />
                    )}
                  </div>
                  <div className="list-of-dropdown-menu">
                    {openDropdowns[item.name] && (
                      <ul className="dropdown-content">
                        {item.options.map((option, index) => (
                          <li key={index}>{option}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="dashboard-right-side-div">
            <div className="navbar-of-dashboard">
              <div className="search-bar">
                <IoSearchOutline />
                <input type="text" placeholder="Search Your Subject" />
              </div>
              <div className="notification-profile">
                <img src="https://cdn-icons-png.flaticon.com/128/14009/14009677.png" />
                <IoMdNotificationsOutline />
                <p>Jagruti B</p>
                <div className="navbar-logo-image">
                  <img src={navlogo} />
                </div>
              </div>
            </div>
            <div className="main-components-of-dashboard">
              <div className="heading-of-dashboard">
                <h4>Welcome back, <span> Jagruti</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
              <div className="cards-of-dashboard">
                 <Card />
              </div>
              <div className="total-expenses">
                <div className="graphe-one-div"> <Graphone /></div>
                <div className="graphe-two-div"> <GrapheTwo /></div>
              </div>
              <div className="employment-status-all-cards">
                <Status />
              </div>
              <div className="client-live-chat-div">
              <div className="client-list-div">
                 <Client />
              </div>
              <div className="live-chat-div">
                <Chat />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
