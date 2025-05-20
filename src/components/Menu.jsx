export const foodItems = [
  {
    id: 1,
    name: "Matcha Latte",
    price: 8.99,
    image:
      "https://plus.unsplash.com/premium_photo-1694825173733-eefc661ac670?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Ice Chocolate",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1655314134811-6fc60ed672ad?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 7.49,
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Chicken Wings",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Strawberry Matcha Latte",
    price: 6.99,
    image:
      "https://plus.unsplash.com/premium_photo-1719060020489-aeebdff8915b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Iced Coffee",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Red Velvet",
    price: 3.99,
    image:
      "https://www.rainbownourishments.com/wp-content/uploads/2023/02/vegan-red-velvet-cupcakes-1.jpg",
  },
  {
    id: 8,
    name: "Strawberry Matcha",
    price: 3.99,
    image:
      "https://www.maryswholelife.com/wp-content/uploads/2024/07/Strawberry-Matcha-Tea-05.jpg",
  },
  {
    id: 9,
    name: "Iced Latte",
    price: 3.99,
    image:
      "https://www.pumpkinnspice.com/wp-content/uploads/2022/07/IMG_1386.jpg",
  },
];

function FoodCard({ food, onAddToCart }) {
  return (
    <div className="food-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{food.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-orange-500">
            ${food.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(food)}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors flex items-center"
          >
            <i className="fas fa-plus mr-2"></i> Add
          </button>
        </div>
      </div>
    </div>
  );
}

function CartItem({ item, onRemoveItem, onUpdateQuantity }) {
  return (
    <div className="cart-item flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-md object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-800">{item.name}</h4>
          <p className="text-orange-500 font-semibold">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center border border-gray-300 rounded-md mr-4">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            disabled={item.quantity <= 1}
          >
            <i className="fas fa-minus"></i>
          </button>
          <span className="px-3 py-1 text-black">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <button
          onClick={() => onRemoveItem(item.id)}
          className="text-red-500 hover:text-red-700 p-2"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export function Menu({
  cart,
  addToCart,
  removeFromCart,
  updateQuantity,
  isCartOpen,
  toggleCart,
}) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8" id="menu">
      <h1 className="text-3xl font-bold text-pink-500 mb-8 text-center">
        OUR MENU
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {foodItems.map((food) => (
          <FoodCard key={food.id} food={food} onAddToCart={addToCart} />
        ))}
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            <button
              onClick={toggleCart}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
              <p className="text-lg mb-2">Your cart is empty</p>
              <p className="text-sm">Add some delicious food!</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemoveItem={removeFromCart}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Subtotal:</span>
                  <span className="font-bold">
                    ${calculateTotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Delivery:</span>
                  <span className="font-bold">$2.99</span>
                </div>
                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total:</span>
                  <span>${(calculateTotal() + 2.99).toFixed(2)}</span>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-gray-50 bg-opacity-10 z-40"
          onClick={toggleCart}
        ></div>
      )}
    </div>
  );
}
