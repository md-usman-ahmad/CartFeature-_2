import { CartCard } from "./cartCard";
export function CartPage({ allCartItems }) {
  return (
    <>
    {allCartItems.length === 0 && <div
        class="hero-demo"
        style={{
          border: "2px solid #e5e7eb",
          borderRadius: "8px",
          overflow: "hidden",
          height: "665px",
        }}
      >
        <section class="bg-white py-24 px-4">
          <div class="max-w-3xl mx-auto text-center">
            <div class="mb-12">
              <div class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-6xl text-gray-400">🛒</span>
              </div>
            </div>
            <h1 class="text-4xl font-light text-gray-800 mb-6">
              Your cart is waiting
            </h1>
            <p class="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
              No items added yet. Discover our curated collection of products
              and find something that speaks to you.
            </p>
            {/* <button class="bg-gray-900 text-white px-10 py-3 rounded font-medium hover:bg-gray-800 transition duration-300">
                        Explore Products
                    </button> */}
          </div>
        </section>
      </div> }
      {allCartItems.length > 0 &&  

                <div class="table-demo justify-items-center">
                    <div class="md:w-3/4 ">
                        <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b">
                                        <th class="text-left font-semibold py-3">Product</th>
                                        <th class="text-left font-semibold py-3">Price</th>
                                        <th class="text-left font-semibold py-3 ps-5">Quantity</th>
                                        <th class="text-left font-semibold py-3">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allCartItems.map( (item)=>{
                                       return  <CartCard {...item}></CartCard>
                                    })}
                                </tbody>
                            </table>
                            <div class="mt-6 pt-4 border-t">
                                <div class="flex justify-between items-center">
                                    <span class="text-xl font-bold">Cart Total:</span>
                                    <span class="text-2xl font-bold text-blue-600 cart-total">{allCartItems.map( (item)=>{
                                        return item.quantity * item.price
                                    }).reduce( (acc,currentValue)=>{
                                        return acc + currentValue
                                    })}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
      
    </>
  );
}
