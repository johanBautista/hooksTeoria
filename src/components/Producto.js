import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 20px;
  padding: 10px;
  background: teal;
  border-radius:10px;
  color: white;
  width: 100px;
`;

const Articulo = styled.section`
  margin: 20px;
  padding: 10px;
  background: #00808037;
  color: palevioletred;
  width: 300px;
`;
const Producto = ({ producto, productos }) => {
  const { id, name, price } = producto;

  return (
    <Articulo>
      <h2>{name}</h2>
      <b>
        {price}
        <small>eur</small>
      </b>
      <Button >Comprar</Button>
    </Articulo>
  );
};

export default Producto;
