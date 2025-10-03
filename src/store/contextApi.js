import { createContext } from "react";

import { Navbar } from "../component/navbar";
import { Home } from "../component/home.jsx";
import { Electronics } from "../component/electronics.jsx";
import { useState } from "react";
import { CartPage } from "../component/cartPage.jsx";


export const CartContext = createContext({
    onAddingAnItemToCart : ()=>{},
    onRemovingAnItemFromCart : ()=>{},
    allCartItems: []
})


export function CartContextProvider(){
    const [CartState, setCartState] = useState({
    allCartItems: [],
    currentDisplay: "Home",
  });
  console.log("CartState = ", CartState);

  let content;

  function handleCurrentDisplay(CurrentDisplayValue) {
    setCartState((prevState) => {
      return {
        ...prevState,
        currentDisplay: CurrentDisplayValue,
      };
    });
  }
  
  // Now for each item, the number of times it has been added to the cart (i.e., its quantity) will be shown, and according to that, the price of each item will also be displayed.
  function handleOnAddingAnItemToCart(id, imgsrc, title, slogan, price) {
    if (CartState.allCartItems.length === 0) {
      setCartState((prevState) => {
        return {
          ...prevState,
          allCartItems: [
            ...prevState.allCartItems,
            {
              id,
              imgsrc,
              title,
              slogan,
              price,
              quantity: 1,
            },
          ],
        };
      });
    } else {
      let arr = CartState.allCartItems.filter((item) => {
        if (item.id === id) return true;
      });
      console.log("arr = ", arr);

      if (arr.length > 0) {
        setCartState((prevState) => {
          return {
            ...prevState,
            allCartItems: prevState.allCartItems.map((item) => {
              if (item.id === id) {
                item.quantity = item.quantity + 1;
              }
              return item;
            }),
          };
        });
      } else {
        setCartState((prevState) => {
          return {
            ...prevState,
            allCartItems: [
              ...prevState.allCartItems,
              {
                id,
                imgsrc,
                title,
                slogan,
                price,
                quantity: 1,
              },
            ],
          };
        });
      }
    }
  }
  function handleOnRemovingAnItemFromCart(id,quantity){
    console.log("id = ",id, " quantity = ",quantity);
    let updatedAllCartItems = [];
    if(quantity > 1){
      updatedAllCartItems = CartState.allCartItems.map( (item)=>{
        if(item.id === id){
          item.quantity = item.quantity - 1
        }
        return item;
      })
    } else{
      updatedAllCartItems = CartState.allCartItems.filter( (item)=>{
        if(item.id !== id) return true;
      })
    }

    setCartState( (prevState)=>{
      return {
        ...prevState,
        allCartItems: updatedAllCartItems
      }
    })
  }

  if (CartState.currentDisplay === "Electronics") {
    content = (
      <Electronics
      ></Electronics>
    );
  } else if (CartState.currentDisplay === "Home") {
    content = <Home></Home>;
  } else if (CartState.currentDisplay === "CartPage") {
    content = (
      <CartPage
        allCartItems={CartState.allCartItems}
      ></CartPage>
    );
  }

  return (
    <>
      <CartContext value={{
        onAddingAnItemToCart : handleOnAddingAnItemToCart,
        onRemovingAnItemFromCart : handleOnRemovingAnItemFromCart,
        allCartItems : CartState.allCartItems
      }}>
        <Navbar
          currentDisplay={handleCurrentDisplay}
          allCartItems={CartState.allCartItems}
        ></Navbar>
        {content}
      </CartContext>
    </>
  );
}