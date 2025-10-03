import { createContext } from "react";

import { Navbar } from "../component/navbar";
import { Home } from "../component/home.jsx";
import { Electronics } from "../component/electronics.jsx";
import { useState, useReducer } from "react";
import { CartPage } from "../component/cartPage.jsx";

export const CartContext = createContext({
  onAddingAnItemToCart: () => {},
  onRemovingAnItemFromCart: () => {},
  allCartItems: [],
});

export function CartContextProvider() {
  // const [CartState, setCartState] = useState({
  //     allCartItems: [],
  //     currentDisplay: "Home",
  // });

  function reducerfn(CartState, action) {
    if(action.type === "handleCurrentDisplay"){
      return {
        ...CartState,
        currentDisplay: action.payload.CurrentDisplayValue,
      };
    } else if (action.type === "handleOnAddingAnItemToCart") {
      if (CartState.allCartItems.length === 0) {
          return {
            ...CartState,
            allCartItems: [
              ...CartState.allCartItems,
              {
                id : action.payload.id,
                imgsrc : action.payload.imgsrc,
                title : action.payload.title,
                slogan : action.payload.slogan,
                price : action.payload.price,
                quantity: 1,
              },
            ],
          };
      } else {
        let arr = CartState.allCartItems.filter((item) => {
          if (item.id === action.payload.id) return true;
        });
        console.log("arr = ", arr);

        if (arr.length > 0) {
            return {
              ...CartState,
              allCartItems: CartState.allCartItems.map((item) => {
                if (item.id === action.payload.id) {
                  item.quantity = item.quantity + 1;
                }
                return item;
              }),
            };
        } else {
            return {
              ...CartState,
              allCartItems: [
                ...CartState.allCartItems,
                {
                  id : action.payload.id,
                  imgsrc : action.payload.imgsrc,
                  title : action.payload.title,
                  slogan : action.payload.slogan,
                  price : action.payload.price,
                  quantity: 1,
                },
              ],
            };
        }
      }
    } else if (action.type === "handleOnRemovingAnItemFromCart"){
      let updatedAllCartItems = [];
      if (action.payload.quantity > 1) {
        updatedAllCartItems = CartState.allCartItems.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity = item.quantity - 1;
          }
          return item;
        });
      } else {
        updatedAllCartItems = CartState.allCartItems.filter((item) => {
          if (item.id !== action.payload.id) return true;
        });
      }

        return {
          ...CartState,
          allCartItems: updatedAllCartItems,
        };
    }
  }

  const [CartState, dispatch] = useReducer(reducerfn, {
    allCartItems: [],
    currentDisplay: "Home",
  });
  console.log("CartState = ", CartState);

  let content;

  function handleCurrentDisplay(CurrentDisplayValue) {
    dispatch({
      type: "handleCurrentDisplay",
      payload : {
        CurrentDisplayValue
      }
    })
  }

  // Now for each item, the number of times it has been added to the cart (i.e., its quantity) will be shown, and according to that, the price of each item will also be displayed.
  function handleOnAddingAnItemToCart(id, imgsrc, title, slogan, price) {
    dispatch({
      type: "handleOnAddingAnItemToCart",
      payload: {
        id,
        imgsrc,
        title,
        slogan,
        price,
      },
    });
  }
  function handleOnRemovingAnItemFromCart(id, quantity) {
    console.log("id = ", id, " quantity = ", quantity);
    dispatch({
      type: "handleOnRemovingAnItemFromCart",
      payload : {
        id,
        quantity
      }
    })
    
  }

  if (CartState.currentDisplay === "Electronics") {
    content = <Electronics></Electronics>;
  } else if (CartState.currentDisplay === "Home") {
    content = <Home></Home>;
  } else if (CartState.currentDisplay === "CartPage") {
    content = <CartPage allCartItems={CartState.allCartItems}></CartPage>;
  }

  return (
    <>
      <CartContext
        value={{
          onAddingAnItemToCart: handleOnAddingAnItemToCart,
          onRemovingAnItemFromCart: handleOnRemovingAnItemFromCart,
          allCartItems: CartState.allCartItems,
        }}
      >
        <Navbar
          currentDisplay={handleCurrentDisplay}
          allCartItems={CartState.allCartItems}
        ></Navbar>
        {content}
      </CartContext>
    </>
  );
}
