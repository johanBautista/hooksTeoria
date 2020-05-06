import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';

const date = new Date().getFullYear();

function App() {
  const [productos, cargarProductos] = useState([
    { id: 1, name: 'levis', price: 30 },
    { id: 2, name: 'kenzo', price: 40 },
    { id: 3, name: 'zaara', price: 50 },
    { id: 4, name: 'boss', price: 60 },
  ]);
  // console.log(productos);

  return (
    <div>
      <Header title="Tienda Virtual" />
      <h1>Lista de Productos</h1>
      {productos.map((producto) => {
        // cuando se usan las llaves es necesario mencionar a return o da error 
       return <Productos productos={productos} />;
      })}
      <br />
      <Footer date={date} />
    </div>
  );
}

export default App;
