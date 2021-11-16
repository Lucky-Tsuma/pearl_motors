import '../App.css';
import { Search } from '@material-ui/icons';
import { ShoppingCart } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {

    const cart = useSelector((state) => state.carsReducer.cart);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = cart.length;

        setCartCount(count);
    }, [cart, cartCount]);

    return (
        <div className="navbar">
            <Link to="/" className ="link">
                <p className = "company_name">Pearl Shine Motors</p>
            </Link>

            <div className="search_area">
                <input type="search" className="search_input" placeholder="Search cars..."  />
                <Search />
            </div>

            <Link to="/Cart" className="link">
                <div className="div_cart_icon">
                    <ShoppingCart />
                    <div className="div_cart_counter">{cartCount}</div>
                </div>
            </Link>
        </div>
    );
}

export default Navbar;