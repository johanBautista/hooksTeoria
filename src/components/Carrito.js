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
      {carrito.map((producto) => (
        <Producto
          key={producto.id}
          carrito={carrito}
          producto={producto}
          agregarProducto={agregarProducto}
        />
      ))}
    </Compra>
  );
};

export default Carrito;
/** 
 1. crear el useState de carrito, agregarProducto
 2. pasar carrito y agregarProducto por props a producto component
 3. destructuring de las nuevas props en Producto component
 4. crear la nueva funcion seleccionarProducto pasando el id y usando 
 filter para hacer la comparacion
 5. pasamos la funcion agregarProducto q me genera un nuevo state y
 una copia del array q contendra los productos seleccionados
 6. con el boton creado implementar un evento onClick q llame a func. seleccionarroducto 
 7. usar un callback para q la funcion espere el uso del cliente
 8. pasar por props carrito y agregar carrito a carrito component
 9. destructuring de props n carrito component
 10.map de carrito e imprimimos el mismo componente q en productos: Producto
11. estilos basicos
 */
