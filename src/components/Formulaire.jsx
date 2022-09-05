import React from 'react';

const Formulaire = () => {


    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        // const form = evt.target;//je récupère le form
        // const formData = new FormData(form);//je converti le form en FormData
        // const jsonData = Object.fromEntries(formData.entries());//je récupère l'ensemble des inputs ayant un name (name et value)
        //version sur une seule ligne :
        const jsonData2 = Object.fromEntries(new FormData(evt.target));
        console.log(jsonData2)
    
      };


    return (
        <div>
            <div className='d-flex justify-content-center'>
                <h1>
                    Contactez nous
                </h1>
            </div>
            <form className='row g-0' onSubmit={handleFormSubmit} >
                <div className='col-sm-6 col-md-8 p-5'>
                    <div className="mb-3">
                        <label className="form-label">Nom/Prénom</label>
                        <input name="prenom" type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input name="email" type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input name='mdp' type="password" className="form-control" />
                    </div>
                    <div className="mb-3 form-check">
                    </div>
                </div>
                <div className='col-6 col-md-4 p-5'>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name='message' className="form-control" rows="9"></textarea>
                        <button type="submit" className="btn btn-secondary mt-3" >Envoyer</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Formulaire;