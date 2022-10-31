import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { RotateLoader } from "react-spinners";
import Dashboard from './page/Dashboard';
import Error from './page/Error';
import Home from './page/Home';
import Login from './page/Login';
import User from './page/User';
import Empresa from './page/Empresa';
function App() {
  const [loadingInProgress, setLoading] = useState (false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2600)
  }, [])
  return (<>
    {loadingInProgress ? (
      <div className="Loading-page d-flex justify-content-center align-items-center">
       <RotateLoader color={'#7dce13'} loading={loadingInProgress} size={15} />
      </div>
    ) : (
      <Router>
        <Routes>
          <Route path="/*" element={<Error/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/painel" element={<Dashboard/>}/>
          <Route path="/usuarios" element={<User/>}/>
          <Route path="/empresa" element={<Empresa/>}/>
        </Routes>
      </Router>
    )}
</>
  );
}

export default App;
