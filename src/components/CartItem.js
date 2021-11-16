import '../App.css';
import { useState } from 'react';
import { Delete } from '@material-ui/icons';
import { adjustQty, removeFromCart } from '../redux/actions/carsActions';
import { useDispatch } from 'react-redux';

const CartItem = ({car}) => {

  const [input, setInput] = useState(car.qty);
  const dispatch = useDispatch();


  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustQty(car.id, parseInt(e.target.value)));
  };

    return (
        <div className = "cart_item">
            <div className = "div_image">
              <img src = {car.image}  className = "product_image" alt = {car.name}/>
            </div>
            <div className = "item_details">
              <p className = "product_title">{car.name}</p>
              <p>Price: ${car.price}</p>
              <p>Quantity: <input id = "input_qty" type ="number" min = "1" name = "qty" value = {input} onChange = {onChangeHandler}/></p> 
              <div className ="total_cost_and_delete">
                <p className ="total_item_cost">Total cost: ${car.cost}</p>
                <Delete className="delete_icon" onClick = {() => dispatch(removeFromCart(car.id))}/>
              </div>
            </div>
            </div>
    );
}

export default CartItem;