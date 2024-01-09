import { useState } from "react"
import styles from "./styles/cart.module.css"
import { addToCartG, clearItemG, removeFromCartG } from "../store/cart/cartSlice"
import allProducts from "../Assests/all_product"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Cart = ({product}) => {
  const cartItems = useSelector((state) => state.cart.value)
  console.log(cartItems)
  var addedItems = []; 
  console.log(addedItems)
    const dispatch = useDispatch()
    var deliveryFees = 10;
    var totalPrice = 0;
      allProducts.map((ele) => {
      if(cartItems[ele.id] > 0){
          totalPrice += allProducts[ele.id].new_price * cartItems[ele.id]
      }
    })
  return (
      <div className={styles.cart}>
          <ul className={styles.cartItemsDisplay}>
          <li className={styles.headLi}>
            <span>Image</span>
            <span>Title</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
            <span>Remove</span>
          </li>
          {allProducts.map((ele) => {
            if(cartItems[ele.id] > 0){
              return(
                <li>
                  <span>
                    <img src={ele.image} alt="cart item image"/>
                  </span>
                  <span>{ele.name.split(" ").slice(0,3).join(" ")}</span>
                  <span>
                    <FontAwesomeIcon onClick={() => {dispatch(addToCartG(ele.id))}} icon='fa-solid fa-chevron-up' />
                    <p>{cartItems[ele.id]}</p>
                    <FontAwesomeIcon onClick={() => {dispatch(removeFromCartG(ele.id))}} icon='fa-solid fa-chevron-down' />
                  </span>
                  <span>${ele.new_price}</span>
                  <span>${ele.new_price * cartItems[ele.id]}</span>
                  <span onClick={() => {dispatch(clearItemG(ele.id))}}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark"/>
                  </span>
                </li>
              )
            }
          })}
          </ul>
          <ul className={styles.cartTotal}>
            <li>
              <h4>Total Price</h4>
              <span>${totalPrice}</span>
            </li>
            <li>
              <h4>Delivery Fees</h4>
              <span>${deliveryFees}</span>
            </li>
            <li>
              <h4>Total Fees</h4>
              <span>${totalPrice + deliveryFees}</span>
            </li>
            <button>Pay now</button>
          </ul>
      </div>
    )
}

export default Cart
