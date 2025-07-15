import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Import career options
import engineerData from './options/engineer';
import doctorData from './options/doctor';
import lawyerData from './options/lawyer';
import painterData from './options/painter';
import businessmanData from './options/businessman';
import hotelManagerData from './options/hotelmanager';
import farmerData from './options/farmer';
import pharmacistData from './options/pharmacist';
import teacherData from './options/teacher';
import scientistData from './options/scientist';
import sportsmanData from './options/sportman';
import politicianData from './options/politician';
import policeOfficerData from './options/police';
import armyOfficerData from './options/army';
import iasOfficerData from './options/ias';
import ipsOfficerData from './options/ips';
import fashionDesignerData from './options/fdesigner';
import entrepreneurData from './options/enterpreneur';
import caData from './options/ca';
import pilotData from './options/pilot';
import CareerDetails from './CareerDetails';
import './cas.css';

// Register ChartJS modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const careerOptions = [
  { label: 'Engineer', value: 'Engineer', data: engineerData },
  { label: 'Doctor', value: 'Doctor', data: doctorData },
  { label: 'Lawyer', value: 'Lawyer', data: lawyerData },
  { label: 'Painter', value: 'Painter', data: painterData },
  { label: 'Businessman', value: 'Businessman', data: businessmanData },
  { label: 'Hotel Manager', value: 'Hotel Manager', data: hotelManagerData },
  { label: 'Farmer', value: 'Farmer', data: farmerData },
  { label: 'Pharmacist', value: 'Pharmacist', data: pharmacistData },
  { label: 'Teacher', value: 'Teacher', data: teacherData },
  { label: 'Scientist', value: 'Scientist', data: scientistData },
  { label: 'Sportsman', value: 'Sportsman', data: sportsmanData },
  { label: 'Politician', value: 'Politician', data: politicianData },
  { label: 'Police Officer', value: 'Police Officer', data: policeOfficerData },
  { label: 'Army Officer', value: 'Army Officer', data: armyOfficerData },
  { label: 'IAS', value: 'IAS', data: iasOfficerData },
  { label: 'IPS', value: 'IPS', data: ipsOfficerData },
  { label: 'Fashion Designer', value: 'Fashion Designer', data: fashionDesignerData },
  { label: 'Entrepreneur', value: 'Entrepreneur', data: entrepreneurData },
  { label: 'Chartered Accountant', value: 'Chartered Accountant', data: caData },
  { label: 'Pilot', value: 'Pilot', data: pilotData },
];

const CareerSelection = ({ onSelectCareer }) => {
  const [selectedCareer, setSelectedCareer] = useState('');
  const [careerData, setCareerData] = useState(null);
  const [chartData, setChartData] = useState(null);

  const handleSelect = (event) => {
    const selectedValue = event.target.value.trim();
    setSelectedCareer(selectedValue);

    const selectedOption = careerOptions.find(option => option.value === selectedValue);
    if (selectedOption) {
      setCareerData(selectedOption.data);
      setChartData(selectedOption.data.chartData);
      if (onSelectCareer) {
        onSelectCareer(selectedOption.data);
      }
    }
  };

  return (
    <div className="career-selection-container">
      <select 
        className="career-selection-dropdown" 
        value={selectedCareer} 
        onChange={handleSelect}
      >
        <option value="">Select a Career</option>
        {careerOptions.map((career) => (
          <option key={career.value} value={career.value}>
            {career.label}
          </option>
        ))}
      </select>

      {careerData && (
        <div className="career-details-wrapper">
          <CareerDetails data={careerData} />
        </div>
      )}

      {chartData && (
        <div className="career-chart-wrapper">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: `${selectedCareer} Career Chart`,
                },
              },
            }}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default CareerSelection;
