import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link , NavLink } from "react-router-dom";

// Sample data for search results
const availableData = [
  { "id": 1, "title": "Taj Mahal", "type": "destination" },
  { "id": 2, "title": "Jaipur, Rajasthan", "type": "destination" },
  { "id": 3, "title": "Goa", "type": "destination" },
  { "id": 4, "title": "Kerala Backwaters", "type": "destination" },
  { "id": 5, "title": "Leh-Ladakh, Jammu & Kashmir", "type": "destination" },
  { "id": 6, "title": "Varanasi, Uttar Pradesh", "type": "destination" },
  { "id": 7, "title": "Ranthambore National Park, Rajasthan", "type": "destination" },
  { "id": 8, "title": "Andaman & Nicobar Islands", "type": "destination" },
  { "id": 9, "title": "Hampi, Karnataka", "type": "destination" },
  { "id": 10, "title": "Mysore, Karnataka", "type": "destination" },
  { "id": 11, "title": "Amritsar, Punjab", "type": "destination" },
  { "id": 12, "title": "Darjeeling, West Bengal", "type": "destination" },
  { "id": 13, "title": "Paris, France", "type": "destination" },
  { "id": 14, "title": "New York City, USA", "type": "destination" },
  { "id": 15, "title": "Tokyo, Japan", "type": "destination" },
  { "id": 16, "title": "Dubai, UAE", "type": "destination" },
  { "id": 17, "title": "Sydney, Australia", "type": "destination" },
  { "id": 18, "title": "Rome, Italy", "type": "destination" },
  { "id": 19, "title": "Cape Town, South Africa", "type": "destination" },
  { "id": 20, "title": "Santorini, Greece", "type": "destination" },
  { "id": 21, "title": "Rio de Janeiro, Brazil", "type": "destination" },
  { "id": 22, "title": "Bali, Indonesia", "type": "destination" },
  { "id": 23, "title": "London, England", "type": "destination" },
  { "id": 24, "title": "Machu Picchu, Peru", "type": "destination" }
]
;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredResults = availableData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchQuery]);

  const handleClick = (e) => {
    setSearchQuery('')
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = (e) => {
    // Delay closing to allow clicking
    setTimeout(() => {
      setIsSearchFocused(false);
    }, 300);
  };
  

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <h1 className="text-white text-2xl font-bold">Travelone</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) =>
              ` ${
                isActive ? "text-yellow-300" : "text-white"
              }  font-semibold text-white  hover:text-yellow-300 `
            }>
              Home
            </NavLink>
            <NavLink to="about" className={({ isActive }) =>
              ` ${
                isActive ? "text-yellow-300" : "text-white"
              }  font-semibold text-white  hover:text-yellow-300 `
            }>
              About Us
            </NavLink>
            <NavLink to="contact" className={({ isActive }) =>
              ` ${
                isActive ? "text-yellow-300" : "text-white"
              }  font-semibold text-white  hover:text-yellow-300 `
            }>
              Contact Us
            </NavLink>
            <NavLink to="help" className={({ isActive }) =>
              ` ${
                isActive ? "text-yellow-300" : "text-white"
              }  font-semibold text-white  hover:text-yellow-300 `
            }>
              Help
            </NavLink>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <div className="border border-yellow-300 rounded-full px-3 py-1 bg-white/20 flex items-center">
              <Search className="text-yellow-300 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-white placeholder-yellow-300 pl-2"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                onClick={handleClick}
              />
            </div>
            {isSearchFocused && searchResults.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white mt-1 rounded-md shadow-lg max-h-60 overflow-auto">
                {searchResults.map((result) => (
                  <li key={result.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to={`/destination/${result.id}`} className="block text-gray-800 w-full">
                      {result.title}
                      <span className="text-gray-500 text-sm ml-2">({result.type})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

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
          <a href="/" className="block hover:text-yellow-300">
            Home
          </a>
          <a href="about" className="block hover:text-yellow-300">
            About Us
          </a>
          <a href="contact" className="block hover:text-yellow-300">
            Contact Us
          </a>
          <a href="help" className="block hover:text-yellow-300">
            Help
          </a>
          <div className="relative">
            <div className="flex items-center border border-yellow-300 rounded-full px-3 py-1 bg-white/20 mt-4">
              <Search className="text-yellow-300 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-white placeholder-yellow-300 pl-2 w-full"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
            </div>
            {isSearchFocused && searchResults.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white mt-1 rounded-md shadow-lg max-h-60 overflow-auto">
                {searchResults.map((result) => (
                  <li key={result.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to={`/destination/${result.id}`} className="block text-gray-800 w-full">
                      {result.title}
                      <span className="text-gray-500 text-sm ml-2">({result.type})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

          </div>
        </div>
      )}
    </nav>
  );
}
