import HeroSection from "../components/HeroSection";
import ProductDisplay from "../components/ProductDisplay";

export default function Home({products, addToCart, increaseQty, decreaseQty, cart}) {
  return (
    <main className="min-h-screen bg-gray-100 px-4 md:px-8 py-6">
      
      <HeroSection />

      <section className="mt-8">
        <ProductDisplay products={products} addToCart={addToCart} 
                          increaseQty ={increaseQty} decreaseQty ={decreaseQty} 
                          cart= {cart}/>
      </section>
    </main>
  );
}