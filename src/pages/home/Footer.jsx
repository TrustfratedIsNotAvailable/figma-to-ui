import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="container mx-auto px-6 md:px-0 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <div className="mb-4">
            <img
              src={logo}
              alt="Casa Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-gray-600 mb-4">
            CASA provides fast, reliable, and transparent factoring services,
            helping business owners turn credit card transactions into instant
            cash flow.
          </p>

          <h4 className="font-medium mb-2">Follow us on</h4>
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-lightgreen-50 flex items-center justify-center hover:bg-green-200"
            >
              <FaFacebookF className="text-brand-50" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-lightgreen-50 flex items-center justify-center hover:bg-green-200"
            >
              <FaTwitter className="text-brand-50" />
            </a>
            
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-lightgreen-50 flex items-center justify-center hover:bg-green-200"
            >
              <FaLinkedinIn className="text-brand-50" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-lightgreen-50 flex items-center justify-center hover:bg-green-200"
            >
              <FaInstagram className="text-brand-50" />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About service</a>
            </li>
            <li>
              <a href="#">Procedure of Service</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Why Caca is Different</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Support center</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="font-semibold mb-4">Get In touch</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {/* Address */}
            <li>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 flex-shrink-0 rounded-full bg-lightgreen-50 flex items-center justify-center">
                  <FaMapMarkerAlt className="w-4 h-4 text-brand-50" />
                </div>
                <p className="font-medium text-gray-800">Address</p>
              </div>
              <p>
                123 Business Street, Suite 500, New York, NY 10001
              </p>
            </li>

            {/* Phone */}
            <li>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 flex-shrink-0 rounded-full bg-lightgreen-50 flex items-center justify-center">
                  <FaPhoneAlt className="w-4 h-4 text-brand-50" />
                </div>
                <p className="font-medium text-gray-800">Phone</p>
              </div>
              <p>1 (800) 123-4567</p>
            </li>

            {/* Email */}
            <li>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 flex-shrink-0 rounded-full bg-lightgreen-50 flex items-center justify-center">
                  <FaEnvelope className="w-4 h-4 text-brand-50" />
                </div>
                <p className="font-medium text-gray-800">Email</p>
              </div>
              <p>support@casa.finance</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className=" border-t border-gray-200 mt-10 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>Copyright © 2025 all rights Reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
