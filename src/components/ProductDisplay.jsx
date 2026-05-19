import ProductCard from "./ProductCard";

export default function ProductDisplay({products, addToCart, increaseQty, decreaseQty, cart}) {
  return (
    <div className="w-full">
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Fresh Groceries
        </h2>

        <p className="text-gray-500 text-sm">
          {products.length} Products
        </p>
      </div>

      <div  className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}
                       addToCart={addToCart} increaseQty={increaseQty}
                       decreaseQty={decreaseQty}cart={cart}/>
        ))}
      </div>

      {products.length === 0 && (
        <div className="bg-white rounded-2xl shadow-md p-10 text-center text-gray-500">
          No products found.
        </div>
      )}
    </div>
  );
}