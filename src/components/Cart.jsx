import {
  Plus,
  Minus,
  Trash2,
  ShoppingCart
} from "lucide-react";

export default function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem
}) {

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">

      <div className="flex items-center gap-2 mb-5">

        <ShoppingCart size={22} />

        <h2 className="text-xl font-bold">
          Cart
        </h2>
      </div>

      {cart.length === 0 ? (

        <div className="text-center py-8 text-gray-500">

          <p>Your cart is empty</p>

        </div>

      ) : (

        <div className="flex flex-col gap-4">

          {cart.map((item) => (

            <div
              key={item.id}
              className="border rounded-2xl p-4 flex items-center justify-between gap-4"
            >

              {/* Left */}
              <div className="flex items-center gap-4 flex-1">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />

                <div>

                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.unit}
                  </p>

                  <p className="text-sm text-gray-400 line-through">

                    ₹{item.mrp}

                  </p>

                  <p className="text-green-700 font-bold mt-1">

                    ₹{item.sp} × {item.quantity}

                  </p>

                  <p className="text-sm text-gray-700 mt-1">

                    Total: ₹
                    {item.sp *
                      item.quantity}

                  </p>

                </div>
              </div>

              <div className="flex items-center gap-2">

                {/* Minus */}
                <button
                  onClick={() =>
                    decreaseQty(item.id)
                  }
                  className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Minus size={16} />
                </button>

                <span className="font-semibold w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQty(item.id)
                  }
                  className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Plus size={16} />
                </button>

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition"
                >
                  <Trash2 size={16} />
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}