import React from "react";
import Button from "./Button";
import { Asterisk } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-xl font-bold mb-6">
        Have Questions? Feel Free to Reach Out!
      </h3>
      <form className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-50"
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email*</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-50"
          />
        </div>
        {/* Business Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Business Name
          </label>
          <input
            type="text"
            placeholder="Company name"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-50"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">Message*</label>
          <textarea
            rows="4"
            placeholder="Write your opinion"
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-50"
          ></textarea>
        </div>
        {/* Button */}
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
