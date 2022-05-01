import React from "react";

const Footer = () => {
  return (
      <div className='foot-container'>
        <div className='footer-columns'>
          <ul>
            <li className='footer-heads'>BROWSE</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Staff Picks</li>
            <li>Kids</li>
          </ul>
          <ul>
            <li className='footer-heads'>HELP</li>
            <li>Account & Billing</li>
            <li>Supported Devices</li>
            <li>Accessibility</li>
          </ul>
          <ul>
            <li className='footer-heads'>ABOUT US</li>
            <li>Contact</li>
            <li>Meet the staff</li>
          </ul>
        </div>
        <hr />
        <div className='footer-row'>
          <p>
            &copy;{new Date().getFullYear()} DUMMY INPUT | All rights reserved
          </p>
        </div>
      </div>
  );
};

export default Footer;
