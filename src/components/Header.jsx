import React, { useState } from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md ${darkMode ? 'bg-[#1e293b]/80' : 'bg-[#f0fff1]/80'} border-b ${darkMode ? 'border-[#1e293b]' : 'border-[#e9ecef]'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Mionitra</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-[#6366f1] transition-colors duration-200 cursor-pointer">Home</a>
          <a href="#skills" className="hover:text-[#6366f1] transition-colors duration-200 cursor-pointer">Skills</a>
          <a href="#projects" className="hover:text-[#6366f1] transition-colors duration-200 cursor-pointer">Projects</a>
          <a href="#contact" className="hover:text-[#6366f1] transition-colors duration-200 cursor-pointer">Contact</a>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode} 
            className={` rounded-full rounded-button whitespace-nowrap cursor-pointer ${darkMode ? 'bg-[#f8fafc] text-[#0f172a] px-2 py-1' : 'bg-[#1e293b] text-[#f0fff1] px-3 py-1.5'}`}
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full !rounded-button whitespace-nowrap cursor-pointer ${darkMode ? 'bg-[#f8fafc] text-[#0f172a]' : 'bg-[#1e293b] text-[#f0fff1]'}`}
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="text-2xl cursor-pointer"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${darkMode ? 'bg-[#1e293b]' : 'bg-[#f0fff1]'} border-b ${darkMode ? 'border-[#1e293b]' : 'border-[#e9ecef]'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#home" className="hover:text-[#6366f1] transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#skills" className="hover:text-[#6366f1] transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-[#6366f1] transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-[#6366f1] transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;