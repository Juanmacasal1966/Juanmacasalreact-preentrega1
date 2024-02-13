import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart'; 
import Footer from './componentes/Footer/Footer'; 
import { CarritoProvider } from './context/CarritoContext'; 
import './globalStyles.css'; 

const App = () => {
  return (
    <Router>
      <CarritoProvider> 
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="SNEAKERS" />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </>
      </CarritoProvider>
    </Router>
  );
};

export default App;

