import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Services", id: "services" },
  { name: "How it works", id: "how-it-works" },
  { name: "Why is different", id: "why-different" },
  { name: "ReviewsSection", id: "reviews" },
  { name: "Pricing", id: "pricing" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="container mx-auto flex items-center justify-between px-6 md:px-0 py-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img src={logo} alt="CASA Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Links (show only lg and up) */}
          <ul className="hidden lg:flex space-x-8">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={`#${link.id}`}
                  className="text-gray-700 hover:text-brand-50 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side buttons (lg and up only) */}
          <div className="hidden lg:flex gap-4">
            <Button bgColor="bg-lightgreen-50" textColor="text-brand-50">
              Login
            </Button>
            <Button>Sign Up</Button>
          </div>

          {/* Mobile Menu Toggle (sm + md) */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu (sm + md only) */}
        {open && (
          <div className="lg:hidden bg-white border-t shadow px-6 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.id}`}
                    className="block text-gray-700 hover:text-brand-50"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-3 mt-6">
              <Button
                bgColor="bg-lightgreen-50"
                textColor="text-brand-50"
                className="w-full"
              >
                Login
              </Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Offset for fixed navbar height */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
