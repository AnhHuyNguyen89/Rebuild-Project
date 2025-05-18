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
          <div>
            <h3 className="text-xl font-bold mb-4">ButterCH</h3>
            <p className="text-gray-400">
              Serving the community with delicious food and drinks since 2020.
            </p>
          </div>
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
                  Contact
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow us </h4>
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
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-2">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none"
                  htmlFor={id}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Butter CH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
