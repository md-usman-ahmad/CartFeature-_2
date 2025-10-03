import { useState,useContext } from "react";
import "./atc.css"
import {CartContext} from "../store/contextApi"

export function ElectronicsCard({ id, imgsrc, title, slogan ,price  }) {

  const {onAddingAnItemToCart, onRemovingAnItemFromCart , allCartItems} = useContext(CartContext);

  const [X,setX] = useState(false);

  return (
    <>
      <div className="mc w-[300px] bg-white dark:bg-slate-950 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="relative">
              <img src={imgsrc} 
                    alt="Product" className="w-full h-48 object-cover" />
          </div>
          <div className="mc2 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{slogan}</p>
              <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">₹{price}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">(4.8)</span>
                  </div>
              </div>
              {X ? (
                <>
                  <div className="flex items-center justify-between">
                    <button
                      className="px-3 py-1 bg-red-600 rounded"
                      onClick={() => {
                        let total = allCartItems.find( (item)=>{
                          if(item.id === id) return true;
                        }).quantity
                        onRemovingAnItemFromCart(id,total);
                        if(total === 1){
                          setX(false);
                        }
                      }}
                    >
                      -
                    </button>
                    <span className="text-lg font-medium text-white">
                      {
                      allCartItems.find((item) => {
                        if (item.id === id) {
                          return item;
                        }
                      }) === undefined ? setX(false) : 
                      allCartItems.find((item) => {
                        if (item.id === id) {
                          return item;
                        }
                      }).quantity
                      }
                    </span>
                    <button
                      className="px-3 py-1 bg-green-600 rounded"
                      onClick={() => {
                        onAddingAnItemToCart(id, imgsrc, title,slogan, price);
                      }}
                    >
                      +
                    </button>
                  </div>
                </>
                ) : (
                  <>
                    <button onClick={()=>{onAddingAnItemToCart(id,imgsrc,title,slogan,price) ; setX(true)}} className="atc w-full bg-yellow-600 hover:bg-amber-950 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                        Add to Cart
                    </button>
                  </>
                )}              
          </div>
      </div>
    </>
  );
}
