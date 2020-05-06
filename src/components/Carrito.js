import React from 'react';
import styled from 'styled-components';

/**
 1. crear carrito component
 2. styled components
 3. boton comprar
 */

const Compra = styled.section`
  position: fixed;
  width: 400px;
  top: 0;
  right: 0;
  margin: 20px;
  padding: 10px;
  background: teal;
  color: white;
`;
const Carrito = () => {
  return (
    <Compra>
      <h3>Desde carrito</h3>
    </Compra>
  );
};

export default Carrito;
