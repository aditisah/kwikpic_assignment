

import './App.css';
import NavBar from './components/NavBar';
 import OrderForm from './components/OrderForm';
 
  import Orders from './components/Orders';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { MemoryRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       {/* <Router>
       <NavBar/>
       </Router> */}
      
      
      
       <BrowserRouter>
      <NavBar/>
      <Routes>
      
      <Route path="/" element={<OrderForm />} />
      <Route path="create-order" element={<OrderForm />} />
          <Route path="order-invoice" element={<Orders />} />
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

      // <BrowserRouter>
      // <Routes>
      // <Route path="create-order" element={<OrderForm />} />
      //     <Route path="order-invoice" element={<Orders />} />
      // </Routes>
      // </BrowserRouter>
export default App;
