// ClientList.js
import React from 'react';
import './Client.css';
import one from "../../assets/one.png";
import three from "../../assets/three.png";
import five from '../../assets/five.png';
import six from '../../assets/six.png';

const clients = [
  {
    id: 1,
    name: 'Prathamesh Khaire',
    company: 'CS Pvt Ltd',
    email: 'prathamesh@info.com',
    status: 'Active',
    avatar: one
  },
  {
    id: 2,
    name: 'Onkar Bandal',
    company: 'Isha Industries',
    email: 'onkarbvandal@info.com',
    status: 'Inactive',
    avatar: three
  },
  {
    id: 3,
    name: 'Sameer Kulkarni',
    company: 'Birla Group',
    email: 'sameerkulkarni@info.com',
    status: 'Active',
    avatar: five
  },
  {
    id: 4,
    name: 'Abhijit Sane',
    company: 'TIO Motors',
    email: 'abhijitsane@info.com',
    status: 'Active',
    avatar: six
  },
];

const Client = () => {
  return (
    <div className="client-list">
      <h2>Client List</h2>
      <div className="client-list-header">
        <div><p>Name</p></div>
        <div><p>Email</p></div>
        <div><p>Status</p></div>
        <div><p>Action</p></div>
      </div>
      <div className="client-list-content">
        {clients.map(client => (
          <div key={client.id} className="client-item">
            <div className="client-info">
              <img src={client.avatar} alt={client.name} className="client-avatar" />
              <div>
                <p className="client-name">{client.name}</p>
                <p className="client-company">{client.company}</p>
              </div>
            </div>
            <div className="client-email">{client.email}</div>
            <div className={`client-status ${client.status.toLowerCase()}`}>
              <select value={client.status} onChange={() => {}}>
                <option value="Active" className="status-option active">
                  <div className="status-dot"></div>
                  Active
                </option>
                <option value="Inactive" className="status-option inactive">
                  <div className="status-dot"></div>
                  Inactive
                </option>
              </select>
            </div>
            <div className="client-action"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
