import React from 'react';
import '../Contato/style.css';
function Contato() {
  return (
    <>
      <div className='container-fluid fadeIn mt-3'>
        <h3>Me diga o que achou, uma crítica, conselho ou algo a melhorar.</h3>
        <form>
          <div className='form-group'>
            <label for='exampleFormControlSelect1'>Nome:</label>
            <input
              className='form-control'
              type='text'
              placeholder='Digite seu nome'
            ></input>
          </div>
          <div className='form-group'>
            <label for='exampleFormControlInput1'>Email:</label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
            />
          </div>
          <div className='form-group'>
            <label for='exampleFormControlTextarea1'>
              Deixe seu comentário:
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
            ></textarea>
          </div>
          <div className='mt-3'>
            <button type='submit' className='postarComentario btn btn-success'>
              Postar
            </button>
            <button type='button' className='limparComentario btn btn-light'>
              Limpar Comentário
            </button>
          </div>
        </form>
        <hr />
        <h4>Mural de Mensagens: </h4>
      </div>
    </>
  );
}

export default Contato;
