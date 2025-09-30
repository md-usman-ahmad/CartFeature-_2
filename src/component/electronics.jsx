import { products } from "../constants.js";
import { ElectronicsCard } from "./electronicsCard.jsx";

export function Electronics({ onAddingAnItemToCart,  }) {
  return (
    <>
      <div className="w-full flex flex-wrap justify-center mx-auto gap-3 p-4  ">
        {products.map((item) => {
          return (
            <ElectronicsCard  
              key={item.id}
              {...item}
              onAddingAnItemToCart={onAddingAnItemToCart}
            ></ElectronicsCard>
          );
        })}
      </div>
    </>
  );
}
