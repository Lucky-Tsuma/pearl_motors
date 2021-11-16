import { useSelector } from 'react-redux';
import CarOnHomePage from './CarOnHomePage';

const ProductsSection = () => {

    const state = useSelector((state) => state.carsReducer);
    
    return (
        <div className = "products_section">
            {state.cars.map((car) => (
                <CarOnHomePage key = {car.id} car = {car}/>
            ))}
        </div>
        );
    }
    
export default ProductsSection;
