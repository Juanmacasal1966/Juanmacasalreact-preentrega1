import React from 'react'
import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount';

const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Zapatillas" }  />
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
    </>
  )
}

export default App
