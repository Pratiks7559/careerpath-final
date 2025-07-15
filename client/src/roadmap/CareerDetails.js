import React from 'react';
import './cad.css';
const CareerDetails = ({ data }) => {
  if (!data) return null;

  const renderData = (item) => {
    if (Array.isArray(item)) {
      return (
        <ul className="career-details-list">
          {item.map((subItem, index) => (
            <li key={index} className="career-details-list-item">
              {typeof subItem === 'object' ? renderData(subItem) : subItem}
            </li>
          ))}
        </ul>
      );
    } else if (typeof item === 'object' && item !== null) {
      return (
        <div className="career-details-object-container">
          {Object.entries(item)
            .filter(([key]) => !isUnwantedKey(key))
            .map(([key, value], index) => (
              <div key={index} className="career-details-object-item">
                <strong>{formatKey(key)}:</strong> {renderData(value)}
              </div>
            ))}
        </div>
      );
    } else {
      return <span>{item}</span>;
    }
  };

  return (
    <div className="career-details-container">
      {Object.entries(data)
        .filter(([key]) => !isUnwantedKey(key))
        .map(([key, value], index) => (
          <div key={index} className="career-details-section">
            <h3 className="career-details-key">{formatKey(key)}</h3>
            {renderData(value)}
          </div>
        ))}
    </div>
  );
};

// Utility function to prettify keys
const formatKey = (key) => {
  return key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
};

// List of unwanted keys
const unwantedKeys = [
  'chartdata',
  'chart_data',
  'labels',
  'datasets',
  'backgroundcolor',
  'bordercolor',
  'borderwidth',
  'fill',
  'hoverbackgroundcolor',
  'hoverbordercolor',
];

// Check if key is unwanted
const isUnwantedKey = (key) => {
  const lowerKey = key.toLowerCase();
  return unwantedKeys.includes(lowerKey);
};

export default CareerDetails;
