export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Our restaurant"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2025, ButterCH has been trying to deliver the best
              service with high-quality food and drinks made from locally
              sourced ingredients.
            </p>
            <p className="text-gray-600 mb-4">
              My personal experience have over 5 years of combined experience in
              creating delicious meals that satisfy all taste buds.
            </p>
            <p className="text-gray-600">
              We believe in sustainability and ethical sourcing, which is why we
              partner with local businesses and suppliers who share our values.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-3">
                  <i className="fas fa-leaf text-orange-500"></i>
                </div>
                <span className="text-gray-700">Fresh Ingredients</span>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-3">
                  <i className="fas fa-heart text-orange-500"></i>
                </div>
                <span className="text-gray-700">Made with Love</span>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-3">
                  <i className="fas fa-clock text-orange-500"></i>
                </div>
                <span className="text-gray-700">Quick Service</span>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-full mr-3">
                  <i className="fas fa-award text-orange-500"></i>
                </div>
                <span className="text-gray-700">Local Support</span>
              </div>
            </div>
            <button>click me</button>
          </div>
        </div>
      </div>
    </section>
  );
}
