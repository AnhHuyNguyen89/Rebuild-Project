import { Link } from "react-router";
import { useState } from "react";
export function Header({ cartCount, toggleCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-65 space-y-2">
            <div className="flex items-center">
              <i className="fas fa-utensils text-3xl text-orange-500 mr-2"></i>
              <Link to="/" className="text-3xl font-bold text-gray-800">
                Buttery Bar
              </Link>
            </div>
            <div className="hidden md:flex space-x-9 text-xl">
              <Link
                to="/MenuPage"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Menu
              </Link>
              <Link
                to="/ABoutUs"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                About
              </Link>
              <Link
                to="/ContactUs"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 transition"
            >
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <nav className="bg-white px-4 py-2">
              {/* Toggle Button */}
              <div className="md:hidden flex justify-between items-center">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-gray-700 focus:outline-none"
                >
                  {/* Hamburger Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {menuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white w-full px-4 py-2 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
          id="mobile-menu"
        >
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/AboutUS"
            className="block py-2 text-gray-700 hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/Menu"
            className="block py-2 text-gray-700 hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/ContactUs"
            className="block py-2 text-gray-700 hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
