import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 20px;
  padding: 10px;
  background: teal;
  border-radius: 10px;
  color: white;
  width: 100px;
`;

const Articulo = styled.section`
  margin: 20px;
  padding: 10px;
  background: #00808037;
  color: #093434;
  width: 300px;
`;
const Producto = ({ producto, productos, carrito, agregarProducto }) => {
  const { id, name, price } = producto;

  const seleccionarProducto = (id) => {
    // console.log('hola');

    const producto = productos.filter((producto) => producto.id === id)[0];

    agregarProducto([...carrito, producto]);
  };

  return (
    <Articulo>
      <h2>{name}</h2>
      <b>
        {price}
        <small>eur</small>
      </b>
      <Button onClick={() => seleccionarProducto(id)} type="button">
        Comprar
      </Button>
    </Articulo>
  );
};

export default Producto;
