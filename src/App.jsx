import React from 'react'
import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Zapatillas" }  />
    </>
  )
}

export default App
