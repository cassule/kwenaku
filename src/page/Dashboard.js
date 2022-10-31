import React, { useState, useEffect } from 'react';
import { Menu } from '../components/Menu';
import { Dropdown } from 'react-bootstrap';
import user from './../assets/matheus.jpg'
import imgDefault from './../assets/default.jpg'
import BarChart from '../components/BarChart';
import { ChartUser } from '../util/userChart'
import { ChartCompany } from '../util/companyChart'
import listadeEmpresa from './../util/empresList.json'
import { 
  HiUser, 
  HiOfficeBuilding, 
  HiOutlineMenuAlt3,
  HiOutlineSearch 
} from "react-icons/hi";
import { Link } from 'react-router-dom';
function Dashboard() {

  const [empresLists, setempresLists] = useState ([]);

  useEffect(() => {
    
    loadempresList();
    console.log(empresLists)
  })

  async function loadempresList(){
    await setempresLists(listadeEmpresa.empresList);
  }

  const [chartUser, setChartUser] = useState({
    labels: ChartUser.map((data) => data.month),
    datasets: [
      {
        label: "Usuarios",
        data: ChartUser.map((data) => data.userGain),
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
        data: [60, 20, 30, 60, 60, 50, 70, 50, 50, 70, 30, 30]
      },
    ],
  });

  const [chartCompany, setChartCompany] = useState({
    labels: ChartCompany.map((data) => data.month),
    datasets: [
      {
        label: "Empresas",
        data: ChartCompany.map((data) => data.userGain),
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
        data: [10, 5, 25, 20, 50, 30, 50, 70, 30, 70, 35, 20]
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
                <BarChart chartData={chartUser} />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card border-0">
                <div className="card-body">
                <BarChart chartData={chartCompany} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div className="card card-table border-0">
            <div className="card-body pb-2 pt-2 d-flex justify-content-between">
              <h6 className='mt-2'><b>Empresas</b></h6>
              <div className="input-group rounded input-group-sm w-300px border">
                <input type="text" className="form-control border-0" placeholder="Pesquisar empresa" />
                <button type="button" className="btn rounded ">
                  <HiOutlineSearch/>
                </button>
              </div>
            </div>
            <div className='table-h'>
            <table className="table">
              <thead>
                <tr>
                  <th className='ps-4'>Logo</th>
                  <th>Nome da empresa</th>
                  <th>Email</th>
                  <th>Telefone</th>
                  <th>Endereço</th>
                  <th>N de funcionario</th>
                  <th>Estado</th>
                  <th className='text-right pe-4'>accao</th>
                </tr>
              </thead>
              <tbody>
              {
                empresLists?.map(empresList => (
                <tr>
                  <td className='ps-4 p-2'><img src={imgDefault} className='rounded' width={25} /></td>
                  <td>{empresList.nome}</td>
                  <td>{empresList.email}</td>
                  <td>{empresList.telefone}</td>
                  <td>{empresList.endereco}</td>
                  <td>{empresList.numeroDeFeuncion}</td>
                  <td><span className="badge rounded-pill bg-success">Activo</span></td>
                  <td className='text-right p-2 pe-4'>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='button-dropdaw-tab p-0'>
                      <HiOutlineMenuAlt3/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='font-size-14 border-0 shadow-sm'>
                      <Dropdown.Item href="#/action-1">Editar</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Eliminar</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </td>
                  </tr>
                    ))
                }
              </tbody>
            </table>
            </div>
            <div className="card-body pt-2  d-flex justify-content-between">
              <div><b>1 ate 10</b></div>
              <div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </Link>
                  </li>
                  <li className="page-item"><Link className="page-link active" href="#">1</Link></li>
                  <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                  <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                  <li className="page-item">
                    <Link className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Dashboard;