import { useRef, useEffect } from "react";

export function ContactForm() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Contact Us
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-orange-500 text-white p-8">
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <div className="mb-6">
                  <div className="flex items-center mb-4 rounded-2xl">
                    <i className="fas fa-map-marker-alt mr-3"></i>
                    <a href="https://maps.app.goo.gl/pGb4pjf4cet3GHdQ8">
                      <span>200 Churchill Road Prospect 5082 SA</span>
                    </a>
                  </div>
                  <div className="flex items-center mb-4">
                    <i className="fas fa-phone mr-3"></i>
                    <span>
                      <a href="tel:0416831151">041-683-1151</a>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope mr-3"></i>
                    <span>
                      <a href="mailto:dovantrang1@gmail.com">
                        dovantrang1@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Opening Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your name"
                      ref={inputRef}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your email"
                      ref={inputRef}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-medium transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
