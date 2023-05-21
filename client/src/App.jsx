import react from 'react'
import './App.css'
import Header from './componets/header';
import Footer from './componets/footer';
import ProductDetails from './componets/productdetails';
import Hero from './componets/hero';
import Advcat from './componets/advcat';
import Products from './componets/products';
import RepairServices from './componets/repairservices';
import NewArrivals from './componets/newarrivals';
import StaticAdv from './componets/staticadv';
import NewseLetter from './componets/newseletter';


const App = () => {
  return (
    <div>
      {/* Other components and content */}
      <Header />
      <Hero />
      <Advcat />
      <Products />
      <RepairServices />
      <NewArrivals />
      <StaticAdv />
      <NewseLetter />
      <ProductDetails />
      <Footer />
      {/* Other components and content */}
    </div>
  );
};

export default App;


