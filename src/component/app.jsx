import { Navbar } from "./navbar";
import { Home } from "./home.jsx";
import {Electronics} from "./electronics.jsx"
import { useState } from "react";
import { CartPage } from "./cartPage.jsx";

export function App() {
  const [CartState, setCartState] = useState({
    allCartItems: [],   
    currentDisplay: "Home",
  });
  console.log("CartState = ", CartState);

  let content

// Now for each item, the number of times it has been added to the cart (i.e., its quantity) will be shown, and according to that, the price of each item will also be displayed.
  // function handleOnAddingAnItemToCart(id, imgsrc, title, price,noOfTimesClicked) {
  //   if(CartState.allCartItems.length === 0){
  //       setCartState((prevState) => {
  //         return {
  //           ...prevState,
  //           allCartItems: [
  //             ...prevState.allCartItems,
  //             {
  //               id,
  //               imgsrc,
  //               title,
  //               price,
  //               noOfTimesClicked: noOfTimesClicked+1
  //             },
  //           ],
  //           noOfCartItems: prevState.noOfCartItems+1
  //         };
  //       });
  //   } else{
  //       let check=false;
  //       const arr = CartState.allCartItems.forEach( (item)=>{
  //           if(item.id === id){
  //            check=true
  //           }
  //           return;
  //       })


  //       if(!check){
  //           setCartState((prevState) => {
  //               return {
  //                   ...prevState,
  //                   allCartItems: [
  //                       ...prevState.allCartItems,
  //                       {
  //                           id,
  //                           imgsrc,
  //                           title,
  //                           price,
  //                           noOfTimesClicked: noOfTimesClicked+1
  //                       }
  //                   ],
  //                   noOfCartItems: prevState.noOfCartItems+1
  //               };
  //           });
  //       } else{
  //           setCartState((prevState) => {
  //         return {
  //           ...prevState,
  //           allCartItems: prevState.allCartItems.map( (item)=>{
  //               if(item.id === id) {
  //                   item.noOfTimesClicked = item.noOfTimesClicked + 1
  //               }
  //               return item;
  //           }),
  //           noOfCartItems: prevState.noOfCartItems+1
  //         };
  //       });
  //       }   
  //   }
  // }

  function handleCurrentDisplay(CurrentDisplayValue){
    console.log("CurrentDisplayValue = ",CurrentDisplayValue);
    setCartState( (prevState)=>{
      return {
        ...prevState,
        currentDisplay: CurrentDisplayValue
      }
    })
  }
  function handleOnAddingAnItemToCart(){

  }
  
  if(CartState.currentDisplay === "Electronics"){
    content = <Electronics onAddingAnItemToCart={handleOnAddingAnItemToCart}></Electronics>
  } else if(CartState.currentDisplay === "Home"){
    content = <Home ></Home>
  } else if(CartState.currentDisplay === "CartPage"){
    content = <CartPage allCartItems={CartState.allCartItems}></CartPage>
  }

  return (
    <>
      <Navbar currentDisplay={handleCurrentDisplay}
      ></Navbar>
      {content}
      
    </>
  );
}
