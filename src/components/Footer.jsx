import { useId, useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const id = useId();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted: ", email);
    setEmail("");
  }

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">ButterCH</h3>
            <p className="text-gray-400">
              Serving the community with delicious food and drinks since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-white transition"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold mb-4">Follow us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/bo.bo.trang.2025"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/butterchaeng/"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-2">
              Subscribe to our newsletter for updates.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-2 w-full max-w-sm"
            >
              <input
                type="email"
                placeholder="Your email"
                id={id}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-2 py-2 bg-gray-800 text-white rounded sm:rounded-l sm:rounded-r-none focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded sm:rounded-r sm:rounded-l-none text-white w-full sm:w-auto"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Butter CH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
