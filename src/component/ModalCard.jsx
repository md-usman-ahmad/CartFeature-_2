export function ModalCard({id,imgsrc,title,price,noOfTimesClicked, onAddingAnItemToCart, onRemovingAnItemFromCart, updatingTotalCartItemsAmount}) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a className="pointer-events-none"  >
          <img className="rounded-t-lg w-full" src={imgsrc} alt="" />
        </a>
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ₹{price*noOfTimesClicked}
            </h5>
            
            <div className="flex justify-between">
              <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
              Quantity = {noOfTimesClicked}
            </h5>
              <svg onClick={()=>{
                  onAddingAnItemToCart(id,imgsrc,title,price,noOfTimesClicked);
                  updatingTotalCartItemsAmount()
                }}
                className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"></path>
            </svg>
              <svg onClick={()=>{
                  onRemovingAnItemFromCart(id,noOfTimesClicked);
                  updatingTotalCartItemsAmount()
                  }}
                className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9"></path>
            </svg>
            </div>
        </div>
      </div>
    </>
  );
}
