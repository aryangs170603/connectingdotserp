import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 30;

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("https://qhvpqmhj-5001.inc1.devtunnels.ms/api/leads");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setLeads(data.reverse()); // Reverse to show the most recent first
      } catch (error) {
        console.error("Error fetching leads:", error);
        alert("Error fetching leads: " + error.message);  // Show error on screen
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
    if (leads.length === 0) {
      alert('No data available for download');
      return;
    }

    // Define the CSV headers
    const headers = ['Name', 'Mobile Number', 'Course Name', 'Email ID', 'Date'];

    // Map leads data into CSV rows
    const csvRows = leads.map(lead => [
      lead.name,
      lead.contact,
      lead.coursename,
      lead.email,
      new Date(lead.createdAt).toLocaleDateString()  // Proper date extraction
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(','),  // Join headers by comma
      ...csvRows.map(row => row.join(','))  // Join each row by comma
    ].join('\n');  // Join rows with a new line

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv' });

    // Create a download link for the CSV
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads.csv';

    // Trigger download
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
                <tr key={index}>
                  <td>{indexOfFirstLead + index + 1}</td>
                  <td>{lead.name}</td>
                  <td>{lead.contact}</td>
                  <td>{lead.coursename}</td>
                  <td>{lead.email}</td>
                  <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No leads found</td>
              </tr>
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
