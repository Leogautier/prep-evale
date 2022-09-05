import React from 'react';
import Page from './components/Page';
import Card from "./components/Card";
import Formulaire from './components/Formulaire';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {

  const cardContenents = [

    { id: "1", title: "test", image: "https://picsum.photos/id/237/500", description: "test tet" },
    { id: "2", title: "test", image: "https://picsum.photos/id/236/500", description: "tet tet" },
    { id: "3", title: "test", image: "https://picsum.photos/id/235/500", description: "tes tet" },
    { id: "4", title: "test", image: "https://picsum.photos/id/234/500", description: "tt tet" }

  ]


  const productElements = cardContenents.map((categorie) =>(
    <div className='col-12 col-lg-3' key={categorie.id}>
      <Card title={categorie.title} image={categorie.image} description={categorie.description} />
    </div>
  ));

  function onSubmit(){

    console.log("fh");
  }

  return (
    <>
      <div>
        <Page />
      </div>
      <div className="container-fluid p-5 d-flex">
      {productElements}
      </div>
      <div className='pt-5 bg-dark text-white'>
      <Formulaire/>
      </div>
    </>
  );
};

export default App;
