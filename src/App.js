import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {

  const addtoCart = (count) => {
    console.log(`Se agregan al carrito ${count} productos`);

  };
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"BIENVENIDO A BISTREA SHOP"} />
      <ItemCount stock={10} initial={0} addtoCart={addtoCart} />
    </div>
  );

}

export default App;

