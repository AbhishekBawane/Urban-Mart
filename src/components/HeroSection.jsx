import {
  Truck,
  Leaf,
  ShoppingBasket
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-3xl p-8 md:p-12 mb-8 overflow-hidden">
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="max-w-xl">
          
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
            Fresh Groceries Delivered Fast
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
            Fresh Food Delivered
            Straight To Your Door
          </h1>

          <p className="text-green-100 mt-5 text-lg leading-relaxed">
            Order farm-fresh fruits,
            vegetables, dairy products,
            and daily essentials with
            quick doorstep delivery.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">
            
            <div className="flex items-center gap-2">
              <Truck size={20} />

              <span className="text-sm">
                Fast Delivery
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Leaf size={20} />

              <span className="text-sm">
                Fresh Products
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ShoppingBasket size={20} />

              <span className="text-sm">
                Daily Essentials
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          
          <div className="w-72 h-72 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            
            <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <ShoppingBasket
                size={100}
                className="text-green-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}