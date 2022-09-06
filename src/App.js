import React from 'react';
import Page from './components/Page';
import Card from "./components/Card";
import Formulaire from './components/Formulaire';
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

  // const HomeScreen = () =>{
  //   setCurrentPage((value) =>(value === 'HomeScreen'))
  // }

  // const ProductScreen = () =>{
  //   setCurrentPage((value) =>(value === 'ProductScreen'))
  //   if(currentPage === 'ProductScreen'){
  //     return<ProductPage/>
  //   }

  //   else{
  //     return 
  //   }

  // }
  const changScreen = (route) => {
    if (route === 'ProductScreen') {
      setCurrentPage(<ProductPage />)
    }
    if (route === 'homeScreen')
      setCurrentPage(<PageAcceuil />)



  }

  //card

  const cardContenents = [

    { id: "1", title: "test", image: "https://picsum.photos/id/237/500", description: "test tet" },
    { id: "2", title: "test", image: "https://picsum.photos/id/236/500", description: "tet tet" },
    { id: "3", title: "test", image: "https://picsum.photos/id/235/500", description: "tes tet" },
    { id: "4", title: "test", image: "https://picsum.photos/id/234/500", description: "tt tet" }

  ]


  const productElements = cardContenents.map((categorie) => (
    <div className='col-12 col-lg-3' key={categorie.id}>
      <Card title={categorie.title} image={categorie.image} description={categorie.description} />
    </div>
  ));


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
