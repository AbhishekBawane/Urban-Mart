import {
  ShoppingCart,
  Package,
  Plus,
  Minus
} from "lucide-react";

export default function ProductCard({product, addToCart, increaseQty, decreaseQty, cart}) {

  const cartItem = cart.find( (item) => item.id === product.id);

  return (
    <div className={`rounded-2xl bg-white shadow-md p-5 transition hover:shadow-xl ${
        !product.inStock
          ? "opacity-60"
          : ""
      }`}>

      <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4">
        <Package size={28} />
      </div>

      <div>
        <img className="w-full h-52 object-cover rounded-xl"
              src={product.img}
              alt={product.name}/>
      </div>

      <h2 className="text-xl font-bold mt-4">{product.name}</h2>

      <p className="text-sm text-gray-500 mt-1">{product.category}</p>

      <p className="text-sm text-gray-500">{product.unit}</p>

      <div className="mt-4 flex items-center gap-3">
        
           <span className="text-gray-400 line-through"> ₹{product.mrp} </span>

           <span className="text-2xl font-bold text-green-700">₹{product.sp} </span>

           {!product.inStock && (
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">Out of Stock</span>
            )}
      </div>

      {!product.inStock ? (

        <button disabled className="mt-5 w-full py-3 rounded-xl font-semibold bg-gray-300 text-gray-500 cursor-not-allowed" >
          Unavailable
        </button>

      ) : cartItem ? (

        <div className="mt-5 flex items-center justify-between bg-green-600 text-white rounded-xl px-4 py-3">
          
          <button onClick={() => decreaseQty(product.id)}
                  className="hover:scale-110 transition">
               <Minus size={20} />
          </button>

          <span className="font-bold text-lg">
            {cartItem.quantity}
          </span>

          <button onClick={() =>increaseQty(product.id) }
                   className="hover:scale-110 transition">
              <Plus size={20} />
          </button>
        </div>

      ) : (

        <button onClick={() => addToCart(product)}
                 className="mt-5 w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition bg-green-600 text-white hover:bg-green-700">
                <ShoppingCart size={18} />
               Add to Cart
        </button>

      )}
    </div>
  );
}