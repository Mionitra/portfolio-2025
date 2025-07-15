import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-10 ${darkMode ? 'bg-[#1e293b]' : 'bg-[#e9ecef]'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          
          <div className="flex items-center gap-4">
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Mionitra. All rights reserved.
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <a 
        href="#home" 
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${darkMode ? 'bg-[#818cf8] text-white' : 'bg-[#6366f1] text-white'} shadow-lg`}
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </footer>
  );
};

export default Footer;