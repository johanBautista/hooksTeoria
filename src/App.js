import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

const date = new Date().getFullYear();

function App() {
  const [productos, cargarProductos] = useState([
    { id: 1, name: 'levis', price: 30 },
    { id: 2, name: 'kenzo', price: 40 },
    { id: 3, name: 'zaara', price: 50 },
    { id: 4, name: 'boss', price: 60 },
  ]);
  /* 
  1.cambiar el return {} por ()
  2.pasar el objeto producto a su componente para poder imprimirlo 
  3. agregar el key para quitar el error del mapeo
  4.destructuring de la prop de producto para poder imprimir sus valores
  5. basic styles-component
  */

  return (
    <div>
      <Header title="Tienda Virtual" />
      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
        />
      ))}
      <br />
      <Footer date={date} />
    </div>
  );
}

export default App;
