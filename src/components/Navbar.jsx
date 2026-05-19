import {ShoppingCart, Search,Menu } from "lucide-react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function Navbar({cartCount, setSearch}) {

  const navigate = useNavigate()

  const [val, setVal] = useState("");

  const handleSearch = (e) =>{
    setVal(e.target.value);
    setSearch(e.target.value)
  }

  return (
    <nav className="w-full bg-green-700 text-white px-6 py-4 flex items-center justify-center sticky top-0 left-0 z-50">
      
         <div className="w-[85%] flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer">
                    <Menu size={24} />
                    <h1 className="text-2xl font-bold" onClick={()=> navigate("/")}> Urban Mart</h1>
                </div>

                <div className="hidden md:flex items-center bg-white rounded-lg px-3 py-2 text-black w-[350px]">
                    <Search size={18} />
                    <input type="text" placeholder="Search groceries..." value={val}
                      className="outline-none ml-2 w-full" onChange={handleSearch}/>
                </div>

                <button className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-lg font-semibold cursor-pointer"
                  onClick={()=>navigate('/bill')}>
                    <ShoppingCart size={20} />
                    <span className="bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</span>
                </button>
         </div>

    </nav>
  );
}