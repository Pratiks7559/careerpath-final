// File: src/pages/IntroPage.jsx

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CareerPathLogo from './CareerPathLogo';
import LanguageSelector from './LanguageSelector';
import './Intro.css';

const IntroPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    document.body.classList.add('cbc');
    return () => {
      document.body.classList.remove('cbc');
    };
  }, []);

  const features = t('features.list', { returnObjects: true });

  return (
    <div className="intro-wrapper">
      {/* NAVBAR */}
      <header className="intro-navbar">
        <div className="navbar-left">
          <CareerPathLogo />
        </div>
        <nav className="navbar-right">
          <button onClick={() => scrollTo(homeRef)}>{t('navbar.home')}</button>
          <button onClick={() => scrollTo(aboutRef)}>{t('navbar.about')}</button>
          <button onClick={() => scrollTo(featuresRef)}>{t('navbar.features')}</button>
          <button onClick={() => scrollTo(faqRef)}>{t('navbar.faq')}</button>
          <button onClick={() => scrollTo(contactRef)}>{t('navbar.contact')}</button>
          <LanguageSelector />
          <button className="intro-button login-btn" onClick={() => navigate('/login')}>
            {t('navbar.login')}
          </button>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="intro-content-section">
        {/* HOME SECTION */}
        <section id="home" ref={homeRef} className="intro-hero">
          <h1 className="intro-title">{t('home.title')}</h1>
          <p className="intro-subtitle">{t('home.subtitle')}</p>
          <button className="intro-button get-started-button" onClick={() => navigate('/register')}>
            {t('home.getStarted')}
          </button>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" ref={featuresRef} className="features-section">
          <h2>{t('features.heading')}</h2>
          <ul className="features-list">
            {Array.isArray(features) &&
              features.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
          </ul>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" ref={aboutRef} className="about-section">
          <h2>{t('about.heading')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" ref={faqRef} className="faq-section">
          <h2>{t('faq.heading')}</h2>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div className="faq-item" key={n}>
              <h3>{t(`faq.q${n}.question`)}</h3>
              <p>{t(`faq.q${n}.answer`)}</p>
            </div>
          ))}
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" ref={contactRef} className="contact-section">
          <h2>{t('contact.heading')}</h2>
          <p>📧 {t('contact.email')} <a href="mailto:support@careerpath.com">support@careerpath.com</a></p>
          <p>📞 {t('contact.phone')} +91 98765 43210</p>
          <p>📍 {t('contact.address')}</p>
          <p>💬 {t('contact.partnership')} <a href="mailto:partners@careerpath.com">partners@careerpath.com</a></p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="intro-footer">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} CareerPath. {t('footer.copyright')}</p>
        </div>
        <div className="footer-right">
          <button className="footer-link" onClick={() => setShowPrivacy(true)}>{t('footer.privacy')}</button>
          <button className="footer-link" onClick={() => setShowTerms(true)}>{t('footer.terms')}</button>
          <a href="#contact" className="footer-link" onClick={() => scrollTo(contactRef)}>
            {t('navbar.contact')}
          </a>
        </div>
      </footer>

      {/* PRIVACY MODAL */}
      {showPrivacy && (
        <div className="modal-overlay" onClick={() => setShowPrivacy(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{t('privacyPolicy.heading')}</h3>
            <p>{t('privacyPolicy.p1')}</p>
            <p>{t('privacyPolicy.p2')}</p>
            <p>{t('privacyPolicy.p3')}</p>
            <button className="modal-close" onClick={() => setShowPrivacy(false)}>
              {t('terms.close')}
            </button>
          </div>
        </div>
      )}

      {/* TERMS MODAL */}
      {showTerms && (
        <div className="modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{t('terms.heading')}</h3>
            <p>{t('terms.p1')}</p>
            <p>{t('terms.p2')}</p>
            <p>{t('terms.p3')}</p>
            <button className="modal-close" onClick={() => setShowTerms(false)}>
              {t('terms.close')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroPage;
