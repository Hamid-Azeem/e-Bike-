import React from 'react';

const Footer = () => {

  const currentYear=new Date().getFullYear();

  return (
    <footer id='footer' className="py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} MotoShift. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
