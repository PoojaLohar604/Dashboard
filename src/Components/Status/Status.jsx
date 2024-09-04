import React from "react";
import "./Status.css";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from '../../assets/four.png'

const Status = () => {
  const statusData = [
    {
      status: "Intern Employee",
      number: 21,
      percent: "15%",
      styleClass: "light-bluecircle",
    },
    {
      status: "Permanent Employee",
      number: 84,
      percent: "60%",
      styleClass: "orangecircle",
    },
    {
      status: "Probationary Employee",
      number: 45,
      percent: "25%",
      styleClass: "greencircle",
    },
  ];
  const teamData = [
    {
      image: one ,
      name: "Prathamesh Khaire",
      present: "Sick Leave. ",
      date: "14th - 16th",
      year: "Jan 2023",
    },
    {
      image: two,
      name: "Aditi Jadhav",
      present: "Travel purpose ",
      date: "11th - 19th",
      year: "Jan 2023",
    },
    {
      image: three,
      name: "Onkar Bandal",
      present: "Career break",
      date: "14th (Today)",
      year: "Jan 2023",
    },
  ];

  const upcomingLeavesData = [
    {
        image: four,
        name: "Monoj Adhav",
        present: "Sick Leave",
        date: "14th - 16th",
        year: "Jan 2023",
      },
    {
      image: one,
      name: "Monoj Adhav",
      present: "Sick Leave",
      date: "14th - 16th",
      year: "Jan 2023",
    },
    {
      image: two,
      name: "Aditi Jadhav",
      present: "Travel purpose",
      date: "11th - 19th",
      year: "Jan 2023",
    },
    {
      image: three,
      name: "Onkar Bandal",
      present: "Not Mension",
      date: "14th (Today)",
      year: "Jan 2023",
    }
  ];

  return (
    <div className="status-cards-div">
      <div className="employment-status">
        <h5>Employment Status</h5>
        <div className="success-line">
          <div className="blueline"></div>
          <div className="orangeline"></div>
          <div className="greenline"></div>
        </div>
        <div className="success-line-percent">
          <div className="blueline-percent">
            <p>15%</p>
          </div>
          <div className="orangeline-percent">
            <p>60%</p>
          </div>
          <div className="greenline-percent">
            <p>25%</p>
          </div>
        </div>
        <div className="total-number">
          <h4>Total</h4>
          <h4>160</h4>
        </div>

        <div className="status-details">
          {statusData.map((data, index) => (
            <div className={`status-content ${data.styleClass}`} key={index}>
              <div></div> {/* Circle */}
              <p>{data.status}</p>
              <h6>{data.number}</h6>
              <h5>{data.percent}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="team-status">
        <h5>Team Analytics</h5>
        <div className="team-tab">
          <div className="button-one">
            <button>Absent</button>
          </div>
          <div>
            <button>Remote</button>
          </div>
        </div>
        {teamData.map((data, index) => (
          <div className="team-absent-details" key={index}>
            <div className="image-name">
              <img src={data.image} />
              <div className="name-details">
                <h6>{data.name}</h6>
                <p>{data.present}</p>
              </div>
            </div>
            <div className="date-year">
                <h6>{data.date}</h6>
                <p>{data.year}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="upcoming-leave">
      <h5>Upcoming Leaves</h5>
      {upcomingLeavesData.map((data, index) => (
          <div className="team-absent-details" key={index}>
            <div className="image-name">
              <img src={data.image} />
              <div className="name-details">
                <h6>{data.name}</h6>
                <p>{data.present}</p>
              </div>
            </div>
            <div className="date-year">
                <h6>{data.date}</h6>
                <p>{data.year}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Status;
