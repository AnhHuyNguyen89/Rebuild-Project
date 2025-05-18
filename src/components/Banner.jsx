import { Link } from "react-router";

export function Banner() {
  return (
    <>
      <section className="hero-bg text-white py-35 md:py-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Savor the Flavor
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium quality meals crafted with love and delivered to your
            doorstep
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-rose-300 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-bold text-lg transition duration-300 pulse">
              <Link
                to="/MenuPage"
                className="text-gray-700 hover:text-orange-200 font-medium"
              >
                View Menu
              </Link>
            </button>
            {/* <button className="bg-white hover:bg-gray-100 text-orange-500 px-8 py-3 rounded-full font-bold text-lg transition duration-300">
              View Menu
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
}
