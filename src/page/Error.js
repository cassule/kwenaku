import React from 'react';
import { Link } from 'react-router-dom';
import {HiArrowLeft} from "react-icons/hi";
import imgError from './../assets/404Error.svg'
function Error() {
  return (
    <div className="other">
      <main className='d-flex align-items-center'>
        <section className='section-form d-flex align-items-center'>
          <div className="container">
            <img src={imgError} alt="" />
          </div>
        </section>
        <section className='section-background d-flex align-items-center'>
          <div className="container p-5">
            <h2><b>400</b></h2>
            <div className="ps-5 mt-2">
              <p>Lorem ipsum dolor sit, amet consectetur<br />  adipisicing elit.</p>
              <Link to='/login' className='mt-5 a-link-return'><HiArrowLeft/> Voltar</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Error;