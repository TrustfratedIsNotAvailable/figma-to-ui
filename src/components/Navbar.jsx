// components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Services",
    "How it works",
    "Why is different",
    "Reviews",
    "Pricing",
    "Contact",
  ];

  return (
    <nav className="px-6 md:px-8 py-4 shadow-md bg-white relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">MyLogo</div>

        {/* Center Nav Links */}
        <ul className="flex gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link} className="cursor-pointer hover:text-gray-900">
              {link}
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <Button bgColor="bg-lightgreen-50" textColor="text-brand-50">
            Login
          </Button>
          <Button>Sign Up</Button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between">
        {/* Hamburger */}
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MyLogo</div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white shadow-lg mt-2 rounded-lg p-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link} className="cursor-pointer hover:text-gray-900">
                {link}
              </li>
            ))}
          </ul>

          <hr className="mt-4 text-gray-200" />
          
          {/* Buttons inside hamburger */}
          <p className="cursor-pointer my-4 text-gray-700 hover:text-gray-900">
            Login
          </p>
          <p className="cursor-pointer text-blue-600 hover:underline">
            Sign Up
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
