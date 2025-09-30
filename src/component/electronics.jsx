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
      {/* <section class="mb-16">
            <h2 class="text-1xl font-bold text-gray-900 dark:text-white mb-8">Product Cards</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section> */}
    </>
  );
}
