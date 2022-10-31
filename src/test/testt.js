import React, { useState, useEffect } from 'react';
import { Menu } from '../components/Menu';
import { Dropdown } from 'react-bootstrap';
import user from './../assets/matheus.jpg'
import BarChart from '../components/BarChart';
import { UserData } from './../Data'
import listadeUsuario from './../util/userlist.json'

import {
  HiUser, 
  HiOfficeBuilding,
  HiOutlineMenuAlt3 
} from "react-icons/hi";
import { Link } from 'react-router-dom';
function Dashboard() {

  const [userLists, setUserLists] = useState ([]);

  useEffect(() => {
    
    loadUserlist();
    console.log(userLists)
  })

  async function loadUserlist(){
    await setUserLists(listadeUsuario.userlist);
  }

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Usuario",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#7dce13",
          "#111",
        ],
        borderWidth: 0,
        barPercentage: 0.5,
        barThickness: 10,
        maxBarThickness: 16,
        minBarLength: 2,
        borderRadius: 50,
        data: [60, 40, 30, 60, 80, 50, 30, 50, 80, 70, 30, 30]
      },
    ],
  });
  
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
               <div className='avatar-mini me-2'><img src={user} alt="" /></div> Matheus
              </Dropdown.Toggle>
              <Dropdown.Menu className='shadow-sm border-0'>
                <Link className='dropdown-item font-size-14' to="/login">Sair</Link>
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
                  <div><HiOfficeBuilding className='icon-card'/></div>
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
                  <div><HiUser className='icon-card'/></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-0 mb-4">
          <div className="row">
            <div className="col-6">
              <div className="card border-0">
                <div className="card-body">
                <BarChart chartData={userData} />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card border-0">
                <div className="card-body">
                <BarChart chartData={userData} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div className="card card-table border-0">
            <div className="card-body pb-1">
              <h6><b>Empresas</b></h6>
            </div>
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
                    userLists?.map(userList => (
                      <tr>
                        <th>{userList.avatar}</th>
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
    </main>
  );
}
export default Dashboard;