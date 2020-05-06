import React from 'react';
import styled from 'styled-components';
import Producto from './Producto';

const Compra = styled.section`
  position: fixed;
  width: 400px;
  top: 0;
  right: 0;
  margin: 20px;
  background: #00808037;
  color: white;
`;

const Titulo = styled.h3`
  padding: 10px;
  background: teal;
  color: white;
`;

const Carrito = ({ carrito, agregarProducto }) => {
  return (
    <Compra>
      <Titulo>Tus Productos</Titulo>
      {carrito.length === 0 ? (
        <Titulo>Selecciona un producto</Titulo>
      ) : (
        carrito.map((producto) => (
          <Producto
            key={producto.id}
            carrito={carrito}
            producto={producto}
            agregarProducto={agregarProducto}
          />
        ))
      )}
    </Compra>
  );
};

export default Carrito;
/** 
 1. crear ternario para selec producto.
 */
