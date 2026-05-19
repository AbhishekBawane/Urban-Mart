import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import BillPage from './page/BillPage';
import { useEffect, useState } from 'react';
import productData from "./assets/product"

function App() {

   const [cart, setCart] = useState(() =>{
      const saveCart = localStorage.getItem("cart");

      return saveCart ? JSON.parse(saveCart): [];
   });
    
   const [search, setSearch ] = useState("");

   const filterProduct = productData.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())||
                                                         product.category.toLowerCase().includes(search.toLowerCase()))

   const navigate = useNavigate();

  
   useEffect(()=>{
      localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);

    

   

   const addToCart = (product) =>{
    const existingItem =  cart.find((item) => item.id  === product.id);

    if(existingItem){
      setCart(
        cart.map((item)=>{
         return item.id === product.id? {...item, quantity: item.quantity + 1} 
                                   : item
    })
      );
    }else{
       setCart([
          ...cart,{ ...product, quantity:1}
       ])
    }
   }

   const increaseQty = (id) =>{
         setCart(cart.map((item)=>item.id === id ? {
                ...item, quantity: item.quantity+1
         } : item))
   }

   const decreaseQty = (id) =>{
         setCart(cart.map((item) => item.id === id?{
             ...item, quantity: item.quantity - 1
         } : item
      ).filter((item) =>item.quantity > 0));
   };

   const removeItem= (id) =>{
         setCart(cart.filter((item) => item.id !== id))
   }

   const placeOrder = () =>{
       
      alert("Order Place Successfully!");   
      navigate("/")  
      setCart([]);

   }

   const cartCount = cart.reduce((sum, item) =>sum + item.quantity, 0);
  
  
   return (
    <div className="App">
        <Navbar cartCount={cartCount} setSearch = {setSearch} />
        <Routes>
           <Route path="/" element={<Home  products={filterProduct} addToCart={addToCart} 
                                           increaseQty={increaseQty} decreaseQty={decreaseQty} cart={cart}/>}/>
           <Route path="/bill" element ={<BillPage cart={cart} placeOrder={placeOrder} increaseQty={increaseQty} decreaseQty={decreaseQty} removeItem={removeItem} />}/>
        </Routes>
    </div>
  );
}

export default App;
