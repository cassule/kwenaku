import React, { useEffect, useState } from 'react';
import { Menu } from '../components/Menu';
import { Dropdown } from 'react-bootstrap';
import user from './../assets/matheus.jpg'
import { Link } from 'react-router-dom';
import listadeUsuario from './../util/userlist.json'

function Dashboard() {

  const [userlist, setUserlist] = useState ([]);

  useEffect(() => {
    async function loadUserlist(){
      await setUserlist (listadeUsuario.userlist);
    }
    loadUserlist();
  })
  

  return (
    <main className='dashboard d-flex'>
      <Menu />
      <section className='p-4 section-body'>
        <div className="container">
        <nav className="navbar navbar-light  mb-4">
          <div className="container-fluid">
            <a className="navbar-brand"><b>Pagina inicial</b></a>
            <div className="d-flex">
            <Dropdown>
              <Dropdown.Toggle className='d-flex align-items-center btn-avatart-menu' variant="success" id="dropdown-basic">
               <div className='avatar-mini me-2'><img src={user} alt="" /></div> Matheus Francisco
              </Dropdown.Toggle>
              <Dropdown.Menu className='shadow-sm border-0'>
                <Link className='dropdown-item' to="/login">Sair</Link>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </div>
        </nav>
        <div className="container mb-4 p-0">
          <div className="row">
            <div className="col-lg-3">
              <div className="card border-0 ">
                <div className="card-body d-flex justify-content-between">
                  <div>
                  <h5><b>Empresas</b></h5>
                  00
                  </div>
                  <div>f</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            <div className="card border-0">
            <div className="card-body d-flex justify-content-between">
                  <div>
                  <h5><b>Usuarios</b></h5>
                  00
                  </div>
                  <div>f</div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="card card-table border-0">
            <div className="card-body">dw</div>
            <div className='table-h'>
            <table class="table">
              <thead>
                <tr>
                  <th className='ps-4'>Logo</th>
                  <th>Nome da empresa</th>
                  <th>Email</th>
                  <th>Numero</th>
                  <th>Endereço</th>
                  <th>Numero de funcionario</th>
                  <th>Estado</th>
                  <th className='text-right pe-4'>accao</th>
                </tr>
              </thead>
              <tbody>
                
                  {
                    userlist.map(userlist = (
                      <tr>
                        <th>title={userlist.title}</th>
                      </tr>
                    ))
                  }
                
              </tbody>
            </table>
            </div>
            <div className="card-body">dw</div>
          </div>
        </div>
      </section>
      <tr>
                  <th className='ps-4'></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td> 
                    {/*
                    <span class="badge rounded-pill bg-success">Success</span>                   
                    <span class="badge rounded-pill bg-danger">Danger</span>
                    <span class="badge rounded-pill bg-warning text-dark">Warning</span>
                    */}
                  </td>
                  <td className='text-right pe-4'>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='button-dropdaw-tab p-0'>
                      <HiOutlineMenuAlt3/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='font-size-14 border-0 shadow-sm'>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </td>
                </tr>
    </main>
  );
}

export default Dashboard;