import React from 'react';
import styled from 'styled-components';

const Articulo = styled.section`
  margin: 20px;
  padding: 10px;
  background: papayawhip;
  color: palevioletred;
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
    </Articulo>
  );
};

export default Producto;
