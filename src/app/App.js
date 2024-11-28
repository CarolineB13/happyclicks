import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* Ce composant rendra les routes enfants */}
      <Footer />
    </>
  );
}

export default App;