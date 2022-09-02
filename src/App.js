import React from 'react';
import Page from './components/Page';
import Card from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {

  const cardContenents = [

    { id: "1", title: "test", image: "https://picsum.photos/id/237/200/300", description: "test tet" },
    { id: "2", title: "test", image: "https://picsum.photos/id/236/200/300", description: "tet tet" },
    { id: "3", title: "test", image: "https://picsum.photos/id/235/200/300", description: "tes tet" },
    { id: "4", title: "test", image: "https://picsum.photos/id/234/200/300", description: "tt tet" }

  ]


  const productElements = cardContenents.map((categorie) =>(
    <div className='col-12 col-lg-3' key={categorie.id}>
      <Card title={categorie.title} image={categorie.image} description={categorie.description} />
    </div>
  ));

  return (
    <>
      <div>
        <Page />
      </div>
      <div className="row container">
      {productElements}
      </div>
    </>
  );
};

export default App;
