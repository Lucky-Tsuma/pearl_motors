import './App.css';
import Navbar from "./components/Navbar";
import CarouselContainer from "./components/CarouselContainer";
import ProductsSection from './components/ProductsSection';
import CartSection from './components/CartSection';

function App() {
  return (
    <div className="App">
        <Navbar />
        <CarouselContainer />
        <ProductsSection />
        <CartSection />
    </div>
  );
}

export default App;
