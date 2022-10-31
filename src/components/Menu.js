import React from 'react';
import {
  HiViewGrid, 
  HiUser, 
  HiOfficeBuilding
} from "react-icons/hi";
import { NavLink } from 'react-router-dom';
export function Menu() {
  return <div className="menu ">
    <div className="container p-4 pt-5 p-3">
      <h1 className='mt-4'>Kwenaku.</h1>
    </div>
    <div className='d-flex align-items-center h-60vh'>
    <div className="container p-4 pt-5 pb-5 ">
      <div className="menu-sub d-grid">
        <NavLink to="/painel" className='link-menu border-0 btn mb-1 '><HiViewGrid className='icon-menu me-2'/> Painel inicial</NavLink>
        <NavLink to="/usuarios" className='link-menu border-0 btn mb-1'><HiUser className='icon-menu me-2'/> Usuarios</NavLink>
        <NavLink to="/empresa" className='link-menu border-0 btn mb-1'><HiOfficeBuilding className='icon-menu me-2'/> Empresas</NavLink>
      </div>
    </div> 
    </div>
  </div>;
}