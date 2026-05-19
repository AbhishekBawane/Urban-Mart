import {
  Receipt,
  Truck,
  BadgePercent
} from "lucide-react";

import Cart from "../components/Cart";

export default function BillPage({
  cart,
  placeOrder,
  increaseQty,
  decreaseQty,
  removeItem
}) {

  // Subtotal
  const subtotal = cart.reduce(
    (sum, item) =>
      sum +
      item.sp * item.quantity,
    0
  );

  // Save On Each Product
  const saveOnEach = (item) =>
    (item.mrp - item.sp) *
    item.quantity;

  // Total Discount
  const discount = cart.reduce(
    (sum, item) =>
      sum + saveOnEach(item),
    0
  );

  // Delivery Charge
  const deliveryCharge =
    subtotal > 300
      ? 0
      : 40;

  // Final Total
  const total =
    subtotal + deliveryCharge;

  return (
    <main className="min-h-screen w-full bg-gray-100 px-4 py-6 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-8">

          <Receipt
            size={34}
            className="text-green-700"
          />

          <div>

            <h1 className="text-3xl font-bold">
              Billing Summary
            </h1>

            <p className="text-gray-500">
              Review your grocery order
            </p>

          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Cart Section */}
          <div className="lg:col-span-2">

            <Cart
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />

          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-24">

            <h2 className="text-2xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="space-y-5">

              {/* Subtotal */}
              <div className="flex justify-between">

                <span className="text-gray-600">
                  Subtotal
                </span>

                <span className="font-medium">
                  ₹{subtotal}
                </span>
              </div>

              {/* Discount */}
              <div className="flex justify-between text-red-500">

                <div className="flex items-center gap-2">

                  <BadgePercent
                    size={18}
                  />

                  <span>
                    Total Discount
                  </span>

                </div>

                <span>
                  -₹{discount}
                </span>
              </div>

              {/* Delivery */}
              <div className="flex justify-between items-center">

                <div className="flex items-center gap-2 text-gray-600">

                  <Truck size={18} />

                  <span>
                    Delivery
                  </span>

                </div>

                <span className="font-medium">

                  {deliveryCharge === 0
                    ? "FREE"
                    : `₹${deliveryCharge}`}

                </span>
              </div>

              <hr />

              {/* Total */}
              <div className="flex justify-between text-2xl font-bold">

                <span>Total</span>

                <span className="text-green-700">
                  ₹{total}
                </span>

              </div>
            </div>

            {/* Place Order */}
            <button
              disabled={
                cart.length === 0
              }
              onClick={placeOrder}
              className={`w-full mt-8 py-3 rounded-xl font-semibold transition ${
                cart.length > 0
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Place Order
            </button>

            {/* Savings Note */}
            {discount > 0 && (

              <p className="text-sm text-green-600 mt-4 text-center">

                🎉 You saved ₹
                {discount} on this order!

              </p>
            )}

            {/* Free Delivery */}
            {deliveryCharge === 0 && (

              <p className="text-sm text-blue-600 mt-2 text-center">

                🚚 Free Delivery Applied

              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}