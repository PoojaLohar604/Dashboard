import React from "react";
import "./Card.css";
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
import { MdAppSettingsAlt } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

const Card = () => {
  const cardData = [
    {
      title: "Job Posted",
      icon: <BsFillFileEarmarkPlusFill className="icon-green" />,
      number: 45,
      button: "Manage",
      styleClass: "green"
    },
    {
      title: "Projects",
      icon: <MdAppSettingsAlt className="icon-light-blue" />,
      number: 65,
      button: "Manage",
      styleClass: "light-blue"
    },
    {
      title: "Tasks",
      icon: <FaTasks className="icon-orange" />,
      number: 32,
      button: "Manage",
      styleClass: "orange"
    },
    {
      title: "Employees",
      icon: <HiUserGroup className="icon-blue" />,
      number: 41,
      button: "Manage",
      styleClass: "blue"
    },
    {
      title: "Client",
      icon: <HiUserGroup className="icon-green" />,
      number: 54,
      button: "Manage",
      styleClass: "green"
    },
  ];
  
  return (
    <div className="main-cards">
      {cardData.map((data, index) => (
        <div className={`card-content ${data.styleClass}`} key={index}>
            <div className="title-and-icon">
                <p>{data.title}</p>
                  {data.icon}
            </div>
            <div className="number-and-button">
                <h1>{data.number}</h1>
                <button>{data.button}</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
