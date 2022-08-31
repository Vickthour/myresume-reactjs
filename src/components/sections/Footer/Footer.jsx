import React from "react";

const date = new Date();
const Footer = () => {
  return (
    <footer className="bg-white p-4 absolute bottom-0 left-0 w-full">
      <div className="container px-4">
        <p className="text-sm text-gray-400 text-center">
          Surplus+  © { date.getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
