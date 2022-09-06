import React from 'react';
import Page from './components/Page';
import Card from "./components/Card";
import Formulaire from './components/Formulaire';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';



function App() {

  const [color, setColor] = useState('navbar-light');

  const DarkMode = () => {
    setColor((value) => (value === 'navbar-light' ? 'navbar-dark bg-dark text-white' : 'navbar-light'))
  }
   const [text, setText] = useState('Light');

  const changText = () => {
    setText((value) => (value === 'Dark' ? 'Light' : 'Dark'))
  }

  const [currentPage, setCurrentPage] = useState('');

  const HomeScreen = () =>{

    setCurrentPage((value) =>(value === 'HomeScreen'))

  }
  const ProductScreen = () =>{

    setCurrentPage((value) =>(value === 'ProductScreen'))

  }


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
    <body className={color}>
        <div>
          <Navbar color= {color} 
          handleDarkMode= {DarkMode} 
          changText={changText} 
          texte={text} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          HomeScreen={HomeScreen}
          ProductScreen={ProductScreen}
          />
        </div>
        <div>
          <div>
            <Page />
          </div>
          <div className="container-fluid p-5 d-flex">
            {productElements}
          </div>
          <div className='pt-5 bg-dark text-white'>
            <Formulaire />
          </div>
        </div>
        </body>
    </>
  );
};

export default App;


// 

// 

// {color}
