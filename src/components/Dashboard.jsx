import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = ({ temporaryLeads }) => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('/api/leads').then((response) => {
      setLeads(response.data);
    });
  }, []);

  useEffect(() => {
    if (temporaryLeads.length > 0) {
      // Send the temporary leads to MongoDB Atlas
      axios.post('/api/leads', temporaryLeads)
        .then(() => {
          // Fetch the updated list of leads after adding temporary leads
          axios.get('/api/leads').then((response) => {
            setLeads(response.data);
          });
        })
        .catch((error) => {
          console.error('Error adding temporary leads:', error);
        });
    }
  }, [temporaryLeads]);

  return (
    <div className="container dashboard-container">
      <h2 className="mt-4">Contact Leads</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-3">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Course Name</th>
              <th>Email ID</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.name}</td>
                <td>{lead.mobile}</td>
                <td>{lead.courseName}</td>
                <td>{lead.email}</td>
                <td>{new Date(lead.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
