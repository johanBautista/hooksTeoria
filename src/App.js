import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const date = new Date().getFullYear();

function App() {
  return (
    <div>
      <Header title="Tienda Virtual" />
      <br />
      <Footer date={date} />
    </div>
  );
}

export default App;
