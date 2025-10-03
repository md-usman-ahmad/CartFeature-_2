import { useState } from "react";
import "./atc.css";

export function Navbar({ currentDisplay, allCartItems }) {
  const [activeLink, setActiveLink] = useState("Home");
  let cartCount = 0;
  console.log( "cartCount = ",cartCount);
  return (
    <>
      <div
        className="header-demo"
        style={{
          backgroundColor: "#f3f4f6",
          fontWeight: 600,
          color: "#374151",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">🛍️ ShopEase</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a
                  onClick={() => {
                    currentDisplay("Home");
                    setActiveLink("Home");
                  }}
                  className={`cursor-pointer font-medium ${activeLink === "Home" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                >
                  Home
                </a>
                <a className="text-gray-700 hover:text-blue-600 font-medium pointer-events-none">Men</a>
                <a className="text-gray-700 hover:text-blue-600 font-medium pointer-events-none">
                  Women
                </a>
                <a
                  onClick={() => {
                    currentDisplay("Electronics");
                    setActiveLink("Electronics")
                  }}
                  className={`cursor-pointer font-medium ${activeLink === "Electronics" ? "text-blue-600" : "text-gray-700 hover:text-blue-600" }`}
                >
                  Electronics
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-blue-600 relative" onClick={() => {
                    currentDisplay("CartPage");
                    setActiveLink("CartPage")
                  }}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
                    ></path>
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {allCartItems.length === 0 && cartCount}
                    {allCartItems.length > 0 &&  allCartItems.map( (item)=>{
                        return item.quantity
                    }).reduce( (accumulator,currentValue)=>{
                        return accumulator + currentValue
                    },0)}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
