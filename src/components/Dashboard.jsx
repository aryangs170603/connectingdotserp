import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 30;

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch('/api/leads');
        const data = await response.json();
        setLeads(data);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchLeads();
  }, []);

  const handleNewLead = async (newLead) => {
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLead),
      });

      const response = await fetch('/api/leads');
      const data = await response.json();
      setLeads(data);
    } catch (error) {
      console.error('Error adding new lead:', error);
    }
  };

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch('/api/leads');
        const data = await response.json();
        setLeads(data);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchLeads();
  }, []);

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(leads.length / leadsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const downloadCSV = () => {
    const csvData = leads.map(lead => ({
      Name: lead.name,
      'Mobile Number': lead.mobile,
      'Course Name': lead.courseName,
      'Email ID': lead.email,
      Date: new Date(lead.date).toLocaleDateString()
    }));

    const csvContent = [
      ['Name', 'Mobile Number', 'Course Name', 'Email ID', 'Date'],
      ...csvData.map(row => Object.values(row))
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="container dashboard-container">
      <h2 className="mt-4">Contact Leads</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-3">
          <thead className="thead-dark">
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Course Name</th>
              <th>Email ID</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentLeads.length > 0 ? (
              currentLeads.map((lead, index) => (
                <tr key={lead._id}>
                  <td>{indexOfFirstLead + index + 1}</td>
                  <td>{lead.name}</td>
                  <td>{lead.mobile}</td>
                  <td>{lead.courseName}</td>
                  <td>{lead.email}</td>
                  <td>{new Date(lead.date).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              Array.from({ length: 30 }).map((_, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination-controls">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
      <div className="download-controls mt-4">
        <button onClick={downloadCSV} className="btn btn-primary">
          Download All Contact Leads Data
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
