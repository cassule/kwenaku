import React from 'react';
import { Link } from 'react-router-dom';
import { HiLockClosed, HiArrowLeft,HiUser } from "react-icons/hi";


function Login() {
  return (
    <div className="other">
      <main className='d-flex align-items-center'>
        <section className='section-form d-flex align-items-center'>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-xl-7 p-5">
                <h1>Welcome to kwenaku</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. enim nulla quaerat.</p>
                <form action="" className='mt-5'>
                  <div className="input-group mb-1">
                    <input type="text" className="form-control border border-end-0" placeholder="Digite seu email"/>
                    <span className="input-group-text border border-start-0" ><HiUser/></span>
                  </div>
                  {/*<span className='alert-danger'><b>Senha</b> ao <b>email</b> errada !</span>*/}
                  <div className="input-group mb-3 mt-2">
                    <input type="password" className="form-control border border-end-0" placeholder="Digite sua senha"/>
                    <span className="input-group-text border border-start-0" ><HiLockClosed/></span>
                  </div>
                  <Link to='/painel' class="d-grid grid-link gap-2">
                    <button class="btn btn-primary " type="button">Entrar no painel</button>
                  </Link>
                  <div className='text-center mt-5'>
                    <Link className='a-link-rtu' to='/'><HiArrowLeft/></Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className='section-background d-flex align-items-center'>
          <div className="container p-5">
            <h1><b>Make a Dream.</b></h1>
            <div className="ps-5 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />  Delectus eveniet iure ipsam quo rem porro vero atque accusantium labore<br /> eum laborum  doloremque facere, reprehenderit aliquam aspernatur quae deleniti fugiat corporis?
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Login;