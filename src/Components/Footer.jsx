import React from "react";
import xIcon from "../assets/x.png";
import linkedinIcon from "../assets/linkedin.png";
import fbIcon from "../assets/fb.png";
import mailIcon from "../assets/mail.png";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-black text-gray-300 px-8 py-12 ">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-2">
                CS — Ticket System
              </h3>
              <p className="text-sm">
                A Ticket System helps organizations manage customer service and IT issues efficiently. Each request becomes a ticket with details, status, and assignment. 
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <ul className="space-y-1 text-sm">
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Contact Saled</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Services</h4>
              <ul className="space-y-1 text-sm">
                <li>Products & Services</li>
                <li>Customer Stories</li>
                <li>Download Apps</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Information</h4>
              <ul className="space-y-1 text-sm">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Join Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Social Links</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <img className="inline" src={xIcon} alt="" /> @CS — Ticket
                  System
                </li>
                <li>
                  <img className="inline" src={linkedinIcon} alt="" /> @CS —
                  Ticket System
                </li>
                <li>
                  <img className="inline" src={fbIcon} alt="" /> @CS — Ticket
                  System
                </li>
                <li>
                  <img className="inline" src={mailIcon} alt="" />{" "}
                  support@cst.com
                </li>
              </ul>
            </div>
          </div>
          <div className="text-left md:text-center text-gray-500 text-sm mt-8">
            © 2025 CS — Ticket System. All rights reserved.
            <br className="block md:hidden" /> All rights reserved.
          </div>
      </footer>
    </div>
  );
};

export default Footer;
