import React from 'react';
import '../Footer/style.css';
function Footer() {
  return (
    <>
      <footer className='text-center text-lg-start bg-light text-muted'>
        <div className='text-center p-4 d-flex  justify-content-center align-items-center'>
          © 2021 Copyright -{' '}
          <p className='text-reset fw-bold footer'>
            Vittório de Andrade Barella
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
