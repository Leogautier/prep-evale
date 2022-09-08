import React from 'react';
import Navbar from './components/Navbar';
import PageAcceuil from './components/PageAcceuil';
import ProductPage from './components/ProductPage';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';



function App() {

  // switch color

  const [color, setColor] = useState('navbar-light');

  const DarkMode = () => {
    setColor((value) => (value === 'navbar-light' ? 'navbar-dark bg-dark text-white' : 'navbar-light'))
  }
  const [text, setText] = useState('Light');

  const changText = () => {
    setText((value) => (value === 'Dark' ? 'Light' : 'Dark'))
  }

  // changement de page


  const [currentPage, setCurrentPage] = useState();

  const changScreen = (route) => {
    if (route === 'ProductScreen') {
      setCurrentPage(<ProductPage />)
    }
    if (route === 'homeScreen')
      setCurrentPage(<PageAcceuil />)
  }

  return (
    <>
      <Navbar
        color={color}
        handleDarkMode={DarkMode}
        changText={changText}
        texte={text}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        changScreen={changScreen}
      />
      <div className={color}>
        {currentPage}
        <div>

        </div>
      </div>
    </>
  );
};

export default App;


//

//

// {color}
