import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';



function App() {

  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"BIENVENIDO A BISTREA SHOP"}/>
      <Item />            
    </div>
  );

}

export default App;

