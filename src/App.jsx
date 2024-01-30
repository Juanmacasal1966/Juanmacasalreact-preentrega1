import React from 'react';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<ItemListContainer greeting="Zapatillas" />} />
          
         
          <Route path="/category/:id" element={<ItemListContainer />} />
          
          
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        
        
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) =>
            console.log('Cantidad agregada ', quantity)
          }
        />
      </>
    </Router>
  );
};

export default App;

