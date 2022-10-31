import React from 'react';
import { Link } from 'react-router-dom';
import pcBanner from './../assets/pc.png'
import img from './../assets/img.png'
import img1 from './../assets/img1.png'
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
    <nav className="navbar navbar-light  pt-4">
      <div className="container">
        <a className="navbar-brand">Kwenaku</a>
        <div className="d-flex">
          <Link to='/login'>
          <button className="btn btn-dark" type="submit">Começar agora mesmo</button>
          </Link>
        </div>
      </div>
    </nav>
      <div className="banner d-flex align-items-center pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <h1>Ponto eletrônico digital Kwenaku</h1>
            <p>Com o próprio computador e celular o seu funcionário externo ou interno bate ponto de forma rápida, prática e segura sem a necessidade de equipamentos caros!</p>
            <div className="mt-5">
            <button type="button" className="btn btn-light"><FaGooglePlay className='FaGooglePlay'/> Google Player</button>
            <button type="button" className="btn btn-light ms-3"><FaApple className='FaApple'/> Apple Store</button>
            </div>
            </div>
            <div className="col-md-6">
              <img src={pcBanner} alt="" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>); 
}

export default Home;