import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <h1 className="text-white text-2xl font-bold">Travelone</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-yellow-300">Home</a>
            <a href="#" className="text-white hover:text-yellow-300">About Us</a>
            <a href="#" className="text-white hover:text-yellow-300">Contact Us</a>
            <a href="#" className="text-white hover:text-yellow-300">Help</a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border border-yellow-300 rounded-full px-3 py-1 bg-white/20">
            <Search className="text-yellow-300 h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-white placeholder-yellow-300 pl-2"
            />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white p-4 space-y-4 shadow-md">
          <a href="#" className="block hover:text-yellow-300">Home</a>
          <a href="#" className="block hover:text-yellow-300">About Us</a>
          <a href="#" className="block hover:text-yellow-300">Contact Us</a>
          <a href="#" className="block hover:text-yellow-300">Help</a>
          <div className="flex items-center border border-yellow-300 rounded-full px-3 py-1 bg-white/20 mt-4">
            <Search className="text-yellow-300 h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-white placeholder-yellow-300 pl-2 w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
