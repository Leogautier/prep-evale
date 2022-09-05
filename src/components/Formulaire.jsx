import React from 'react';

const Formulaire = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <h1>
                    Contactez nous
                </h1>
            </div>
            <form className='row g-0'> 
                <div className='col-sm-6 col-md-8 p-5'>
                <div class="mb-3">
                    <label  class="form-label">Nom/Prénom</label>
                    <input type="email" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                </div>
                </div>
                <div className='col-6 col-md-4 p-5'>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea class="form-control" rows="9"></textarea>
                        <button type="button" class="btn btn-secondary mt-3">Envoyer</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Formulaire;