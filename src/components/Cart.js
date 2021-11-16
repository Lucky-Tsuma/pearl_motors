import '../App.css';
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import CartItem from './CartItem';


const Cart = () => {

  const cart = useSelector((state) => state.carsReducer.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let discount = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.cost;
    });

    items > 5 ? discount = price * 0.05 : discount = 0;
    price -= discount;

    setTotalItems(items);
    setTotalPrice(price);
    setDiscount(discount);
  }, [cart, totalPrice, totalItems, discount, setTotalPrice, setTotalItems, setDiscount]);

  return (
    <div className = "cart_section">
      <div className = "item_section">

        {cart.map((car) => (
            <CartItem key={car.id} car={car} />
        ))}

      </div>

      <div className = "cart_summary">
        <div className = "div_summary">
          <p id = "cart_summary_header">Cart Summary</p>
          <div className = "div_total_price">
            <p>TOTAL: (No of items: {totalItems})</p>
            <p id = "total_price">${totalPrice}</p>
          </div>
          <div className = "div_discount">
            <p>DISCOUNT:</p>
            <p id = "discount">${discount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Cart;