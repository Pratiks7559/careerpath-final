// LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="language-selector">
      <label htmlFor="lang">🌐</label>
      <select id="lang" value={i18n.language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="mr">मराठी</option>
        <option value="gu">ગુજરાતી</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
