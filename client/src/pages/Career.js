import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBriefcase, FaChartBar } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Career.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Career = () => {
  const [careerData, setCareerData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch career data from the backend
  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/career');
        setCareerData(res.data);
      } catch (error) {
        console.error('Error fetching career data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareerData();
  }, []);

  useEffect(() => {
    document.body.classList.add('cc');
    return () => {
      document.body.classList.remove('cc');
    };
  }, []);

  // Generate a unique color for each career
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Prepare data for the career chart
  const chartData = {
    labels: ['2021', '2022', '2023', '2024', '2025'], // Example years
    datasets: careerData.map((career) => ({
      label: career.name,
      data: career.salaryOverTime, // Example data, replace with actual
      borderColor: generateRandomColor(),
      backgroundColor: generateRandomColor(),
      fill: false,
      pointRadius: 5,
    })),
  };

  if (loading) {
    return <div className="loading-text">Loading career information...</div>;
  }

  return (
    <div className="career-container">
      <h2 className="career-title">
        <FaBriefcase className="career-icon" /> Career Information
      </h2>

      {/* Career Overview Table */}
      <div className="career-table-container">
        <table className="career-table">
          <thead>
            <tr>
              <th className="table-header">Career</th>
              <th className="table-header">Eligibility</th>
              <th className="table-header">Required Exams</th>
              <th className="table-header">Steps to Enter</th>
            </tr>
          </thead>
          <tbody>
            {careerData.map((career, index) => (
              <tr key={index} className="table-row">
                <td>{career.name}</td>
                <td>{career.eligibility}</td>
                <td>{career.requiredExams.join(', ')}</td>
                <td>{career.steps.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Career Demand & Salary Chart */}
      <div className="career-chart-container">
        <h3 className="career-chart-title">
          <FaChartBar className="chart-icon" /> Career Salary & Demand Over Time
        </h3>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Career;
