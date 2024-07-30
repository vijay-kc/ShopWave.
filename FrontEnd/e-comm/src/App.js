
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters.jsx';
import AdminRouters from './Routers/AdminRouters.jsx';
function App() {
  return (
    <div className="App font-serif">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
        {/* <Route path='/profile/*' element={<AdminRouters/>}></Route> */}

      </Routes>
     
     
    </div>
    
  );
}

export default App;

      {/* <Navigation/> */}
      {/* <HomePage/> */}
      {/* <ProductCard/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}
      {/* <Footer/> */}