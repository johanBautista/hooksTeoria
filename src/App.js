import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

const date = new Date().getFullYear();

function App() {
  const [productos, cargarProductos] = useState([
    { id: 1, name: 'levis', price: 30 },
    { id: 2, name: 'kenzo', price: 40 },
    { id: 3, name: 'zaara', price: 50 },
    { id: 4, name: 'boss', price: 60 },
  ]);

  const [carrito, agregarProducto] = useState([]);

  return (
    <div>
      <Header title="Tienda Virtual" />
      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}
      <br />
      <Carrito carrito={carrito} agregarProducto={agregarProducto} />
      <Footer date={date} />
    </div>
  );
}

export default App;
