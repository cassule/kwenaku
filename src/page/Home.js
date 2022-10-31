import React from 'react';
import { Link } from 'react-router-dom';
import img from './../assets/img.png'
import img1 from './../assets/img1.png'
import img2 from './../assets/img2.png'
import phone from './../assets/phone.svg'

import { 
  FaGooglePlay,
  FaApple,
 } from "react-icons/fa";
 import { 
  HiOutlineDevicePhoneMobile,
  HiOutlineMapPin 
} from "react-icons/hi2";

function Home() {
  return (<>
    <div className="home">
    <nav className="navbar navbar-light ">
      <div className="container">
        <a className="navbar-brand">Kwenaku</a>
        <div className="d-flex">
          <Link to='/login'>
          <button className="btn btn-dark" type="submit">Entrar</button>
          </Link>
        </div>
      </div>
    </nav>
      <div className="jumbotron d-flex align-items-center pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center mb-5">
            <div>
              <h1>Ponto eletrônico digital Kwenaku</h1>
              <p>Com o próprio computador e celular o seu funcionário externo ou interno bate ponto de forma rápida, prática e segura sem a necessidade de equipamentos caros!</p>
              <div className="mt-5">
              <button type="button" className="btn btn-light"><FaGooglePlay className='FaGooglePlay'/> Google Player</button>
              <button type="button" className="btn btn-light ms-3"><FaApple className='FaApple'/> Apple Store</button>
            </div>
            </div>
            </div>
            <div className="col-md-6">
              <img src={img} alt="" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron-1 d-flex align-items-center pt-5 pb-5">
        <div className="container">
        <center>
            <h1>Benefícios de usar o Kwenaku</h1>
            <p>Veja como o Kwenaku pode aumentar a produtividade da sua equipe</p>
          </center>
          <div className="row pt-5">
            <div className="col-lg-6 p-5 mb-3">
              <img src={img1} alt="" className='img-fluid rounded' />
            </div>
            <div className="col-lg-6 d-flex align-items-center mb-3">
            <div>
            <h2>Porque o Kwenaku?</h2>
            <p>Tenha as informações de jornada de trabalho salvas diretamente na nuvem, não se preocupe em guardar papel na sua empresa, garantimos a segurança das informações de registro de ponto de sua equipe e o armazenamento. Usamos tecnologia de ponta para criptografar e armazenar seu dados, não se preocupe mais com isso.</p>
            <p>Quer saber se algum funcionário já chegou ou saiu? Veja pelo Kwenaku, em tempo real e de qualquer lugar, não precisa ligar pra ninguém. Prático,né? Pois é, basta preencher o formulário e começar a usar.</p>
            </div>
            </div>
            <div className="col-lg-6 p-5 mb-3 div-none-min-768">
              <img src={img2} alt="" className='img-fluid rounded' />
            </div>
            <div className="col-lg-6 mb-3 d-flex align-items-center">
            <div>
            <h2>Porque o Kwenaku?</h2>
            <p>Tenha as informações de jornada de trabalho salvas diretamente na nuvem, não se preocupe em guardar papel na sua empresa, garantimos a segurança das informações de registro de ponto de sua equipe e o armazenamento. Usamos tecnologia de ponta para criptografar e armazenar seu dados, não se preocupe mais com isso.</p>
            <p>Quer saber se algum funcionário já chegou ou saiu? Veja pelo Kwenaku, em tempo real e de qualquer lugar, não precisa ligar pra ninguém. Prático,né? Pois é, basta preencher o formulário e começar a usar.</p>
            </div>
            </div>
            <div className="col-lg-6 p-5 mb-3 div-none-max-768">
              <img src={img2} alt="" className='img-fluid rounded' />
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron-2 border-top">
        <div className="container">
        <center>
            <h1>Funcionalidades</h1>
            <p>Economize tempo e dinheiro com o Kwenaku</p>
        </center>
        <div className="row justify-content-center  pt-5 pb-5">
            <div className="col-md-3 mb-4">
              <div className="card border">
                <div className="card-body p-4 text-center">
                  <HiOutlineDevicePhoneMobile className='icon-card mb-3'/>
                  <h6><b>App ou Web</b></h6>
                  Registro de ponto no celular, tablet ou computador.
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border">
                <div className="card-body p-4 text-center">
                  <HiOutlineMapPin  className='icon-card mb-3'/>
                  <h6><b>Ausentes/Presentes</b></h6>
                  Saiba quem já está na empresa em tempo real.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div>
            <h1>Baixe o Kwenaku Agora</h1>
            <p className='mb-3'>Faça o registro do ponto e controle sua jornada de trabalho na palma da mão! Aplicativo disponível para funcionários</p>
            <div className="mt-3">
            <button type="button" className="btn btn-light"><FaGooglePlay className='FaGooglePlay'/> Google Player</button>
            <button type="button" className="btn btn-light ms-3"><FaApple className='FaApple'/> Apple Store</button>
            </div>
            </div>
            </div>
            <div className="col-lg-6 div-none-max-768">
              <img src={phone} alt="" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <h6><b>Contacto</b></h6>
            Fale conosco pelo chat, estamos à disposição!
            Se preferir, mande um email para <b>contato@Kwenaku.com</b>
            <div className='mt-4 opacity-25'>Kwenaku 2022 © Todos os direitos reservados</div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  </>); 
}

export default Home;