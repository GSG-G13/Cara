import react from 'react';
import './App.css';
import ProductDetails from './componets/productdetails';
import HomeComponets from './componets/homecomponets';

const App = () => {
  return (
    <div>
      {/* Other components and content */}
      <Header />
      <HomeComponets />
      <ProductDetails />
      <Footer />
      {/* Other components and content */}
    </div>
  );
};

export default App;
