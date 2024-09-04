import React, { useState } from 'react';
import './Footer.css';
import { assets } from '../../Assets/assets';
import logo1 from '../NavBar/RawData/logo1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const openPrivacyModal = () => {
    setIsPrivacyModalOpen(true);
  };

  const closePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
  };

  const openTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const closeTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  const closeModalOnClickOutside = (e) => {
    if (e.target.className === 'modal') {
      closePrivacyModal();
      closeTermsModal();
    }
  };

  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={logo1} className='footer-logo' alt="" />
          <p>Curating the latest trends for a stylish and comfortable life. Thank you for shopping with us!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul className='productlink'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/"><li>Products</li></Link>
            <li onClick={openPrivacyModal}>Privacy Policy</li>
            <li onClick={openTermsModal}>Terms and Conditions</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>Get In Touch</h2>
          <ul>
            <li>+2349160003015</li>
            <li>5 Eleruwa Street, Wemabod Estate</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className='footer-copyright'>Copyright 2024 &copy; TrendyNest.com - All Right's Reserved.</p>

      {isPrivacyModalOpen && (
        <div className="modal" onClick={closeModalOnClickOutside}>
          <div className="modal-content">
            <span className="close" onClick={closePrivacyModal}>&times;</span>
            <h2>Privacy Policy</h2>
            <p>
              Welcome to our Privacy Policy page! When you use our web services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully. Remember, you can find controls to manage your information and protect your privacy and security.
            </p>
            <h3>Information We Collect</h3>
            <p>We collect information to provide better services to all of our users – from figuring out basic stuff like which language you speak, to more complex things like which ads you’ll find most useful or the people who matter most to you online.</p>
            <h3>How We Use Information We Collect</h3>
            <p>We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.</p>
            <h3>Information We Share</h3>
            <p>We do not share personal information with companies, organizations and individuals outside of our company unless one of the following circumstances applies:</p>
            <ul>
              <li>With your consent</li>
              <li>For external processing</li>
              <li>For legal reasons</li>
            </ul>
            <div className="modal-actions">
              <button onClick={closePrivacyModal}>Agree</button>
              <button onClick={closePrivacyModal}>Reject</button>
            </div>
          </div>
        </div>
      )}

      {isTermsModalOpen && (
        <div className="modal" onClick={closeModalOnClickOutside}>
          <div className="modal-content">
            <span className="close" onClick={closeTermsModal}>&times;</span>
            <h2>Terms and Conditions</h2>
            <p>
              Welcome to TrendyNest! These terms and conditions outline the rules and regulations for the use of TrendyNest's Website.
            </p>
            <h3>Introduction</h3>
            <p>
              By accessing this website we assume you accept these terms and conditions in full. Do not continue to use TrendyNest's website if you do not accept all of the terms and conditions stated on this page.
            </p>
            <h3>Cookies</h3>
            <p>
              We employ the use of cookies. By using TrendyNest's website you consent to the use of cookies in accordance with TrendyNest’s privacy policy.
            </p>
            <h3>License</h3>
            <p>
              Unless otherwise stated, TrendyNest and/or its licensors own the intellectual property rights for all material on TrendyNest. All intellectual property rights are reserved. You may view and/or print pages from http://www.trendynest.com for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <h3>User Comments</h3>
            <p>
              Parts of this website offer an opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. TrendyNest does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of TrendyNest, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws TrendyNest shall not be responsible or liable for the Comments or for any loss cost, liability, damages or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>
            <div className="modal-actions">
              <button onClick={closeTermsModal}>Agree</button>
              <button onClick={closeTermsModal}>Reject</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
