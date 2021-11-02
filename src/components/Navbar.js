import '../App.css';
import { Search } from '@material-ui/icons';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {

    return (
        <div className="navbar">
            <p className = "company_name">Pearl Motors</p>

            <div className="search_area">
                <input type="search" className="search_input" placeholder="Search cars..."  />
                <Search />
            </div>

            <ShoppingCart />
        </div>
    );
}

export default Navbar;