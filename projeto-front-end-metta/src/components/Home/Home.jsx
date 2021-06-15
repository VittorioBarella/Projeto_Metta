import React, { Component } from 'react';
import '../Home/style.css';
import Vittorio_2 from '../../assets/img/Vittorio_2.jpg';
class Home extends Component {
  render() {
    return (
      <>
        <section
          id='vit'
          className='d-flex flex-column justify-content-center align-items-center'
        >
          <div className='vit-container' data-aos='fade-in'>
            <h1>Vittório Andrade</h1>
            <p>
              Eu sou um
              <span
                className='typed'
                data-typed-items='Designer, Developer, Freelancer, Photographer'
              ></span>
            </p>
          </div>
        </section>
        <main id='main'>
          <section id='umPoucoSobreMim' className='umPoucoSobreMim'>
            <div className='container'>
              <div className='section-title'>
                <h2>Um pouco sobre mim</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>

              <div className='row'>
                <div className='col-lg-4' data-aos='fade-right'>
                  <img
                    src={Vittorio_2}
                    className='img-fluid'
                    alt='Vittório de Andrade Barella'
                    title='Vittório de Andrade Barella'
                  />
                </div>
                <div
                  className='col-lg-8 pt-4 pt-lg-0 content'
                  data-aos='fade-left'
                >
                  <h3>Front-end Developer.</h3>
                  <p className='fst-italic'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className='row'>
                    <div class='col-lg-6'>
                      <ul>
                        <li>
                          <strong>Aniversário:</strong>
                          <span>26 de Janeiro de 1995</span>
                        </li>
                        <li>
                          <strong>Telefone:</strong> <span>51-992458071</span>
                        </li>
                        <li>
                          <strong>Cidade:</strong>
                          <span>Gravataí, Rio Grande do Sul</span>
                        </li>
                      </ul>
                    </div>
                    <div className='col-lg-6'>
                      <ul>
                        <li>
                          <strong>Idade:</strong> <span>26</span>
                        </li>
                        <li>
                          <strong>Email:</strong>
                          <span>vittorio.br@hotmail.com</span>
                        </li>
                        <li>
                          <strong>Cursando:</strong>
                          <span>
                            Tecnólogo em Análise e Desenvolvimento de Sistemas
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Officiis eligendi itaque labore et dolorum mollitia officiis
                    optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                    accusantium dolor incidunt officia tempore. Et eius omnis.
                    Cupiditate ut dicta maxime officiis quidem quia. Sed et
                    consectetur qui quia repellendus itaque neque. Aliquid amet
                    quidem ut quaerat cupiditate. Ab et eum qui repellendus
                    omnis culpa magni laudantium dolores.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
