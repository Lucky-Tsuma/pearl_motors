import '../App.css';
import { Delete } from '@material-ui/icons';
import image from '../assets/images/audiTT.jpg';

const Cart = () => {

  return (
    <div className = "cart_section">
      <div className = "item_section">

        <div className = "cart_item">
          <div className = "div_image">
            <img src = {image}  className = "product_image" alt = "An image description"/>
          </div>
          <div className = "item_details">
            <p className = "product_title">Product title</p>
            <p>Price: $18500</p>
            <p>Quantity: <input id = "input_qty"type ="number" /></p> 
            <div className ="total_cost_and_delete">
              <p className ="total_item_cost">Total cost: $1756000</p>
              <Delete />
            </div>
          </div>
        </div>

        <div className = "cart_item">
          <div className = "div_image">
            <img src = {image}  className = "product_image" alt = "An image description"/>
          </div>
          <div className = "item_details">
            <p className = "product_title">Product title</p>
            <p>Price: $18500</p>
            <p>Quantity: <input id = "input_qty"type ="number" /></p> 
            <div className ="total_cost_and_delete">
              <p className ="total_item_cost">Total cost: $1756000</p>
              <Delete />
            </div>
          </div>
        </div>

        <div className = "cart_item">
          <div className = "div_image">
            <img src = {image}  className = "product_image" alt = "An image description"/>
          </div>
          <div className = "item_details">
            <p className = "product_title">Product title</p>
            <p>Price: $18500</p>
            <p>Quantity: <input id = "input_qty"type ="number" /></p> 
            <div className ="total_cost_and_delete">
              <p className ="total_item_cost">Total cost: $1756000</p>
              <Delete />
            </div>
          </div>
        </div>

      </div>

      <div className = "cart_summary">
        <div className = "div_summary">
          <p id = "cart_summary_header">Cart Summary</p>
          <div className = "div_total_price">
            <p>TOTAL: (No of items)</p>
            <p id = "total_price">$35</p>
          </div>
          <div className = "div_discount">
            <p>DISCOUNT:</p>
            <p id = "discount">$35</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Cart;