import "./FooterStyles.css";

import React from 'react';

import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"fff", marginRight: "2rem" }} />
                    <div>
                        <p>3 Ashford Court, Stockport</p>
                        <p>Manchester</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{ color:"fff", marginRight: "2rem" }} />
                    1-2323-343-23
                    </h4>
                </div>
                <div className="emaol">
                    <h4>
                    <FaMail size={20} style={{ color:"fff", marginRight: "2rem" }} />
                    1-2323-343-23
                    </h4>
                </div>
            </div>
            <div className="right"></div>
        </div>
      
    </div>
  )
}

export default Footer
