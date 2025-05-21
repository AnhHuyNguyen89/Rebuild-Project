import { Link } from "react-router";
import { useState } from "react";

export function Header({ cartCount, toggleCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <img src="/src/assets/2.svg" width="50px" height="50px" />
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Buttery Bar
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
            <Link to="/MenuPage" className="hover:text-orange-500">
              Menu
            </Link>
            <Link to="/ABoutUs" className="hover:text-orange-500">
              About
            </Link>
            <Link to="/ContactUs" className="hover:text-orange-500">
              Contact
            </Link>
          </div>

          {/* Right: Cart & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-full bg-rose-100 text-rose-300 hover:text-blue-300 transition"
            >
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
            >
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
        </div>

        {/* Mobile Menu (Animated Slide Down) */}
        <div
          className={`md:hidden overflow-hidden text-center transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 px-4 text-base font-medium text-gray-700">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              to="/MenuPage"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Menu
            </Link>
            <Link
              to="/ABoutUs"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              About
            </Link>
            <Link
              to="/ContactUs"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
