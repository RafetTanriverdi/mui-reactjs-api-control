import './App.css';
import Datatable from './Components/Datatable';
import AddProduct from './Components/AddProduct';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import AddSupplier from './Components/AddSupplier';

function App() {
  return (
    < div>
      <ul style={{ display: 'flex', justifyContent: 'center',gap:" 125px" ,background:"#eee", height:"80px", alignItems:"center", fontSize:"22px", borderBottom:"1px solid #000"}}>
        <li><Link to='/'>Products List</Link></li>
        <li><Link to='/category'>AddCategory</Link></li>
        <li><Link to='/supplier'>AddSupplier</Link></li>
        

      </ul>

      <Routes>

        <Route path="/" element={<Datatable />}></Route>
        <Route path="/category" element={<AddProduct />}></Route>
        <Route path="/supplier" element={<AddSupplier />}></Route>

      </Routes>
    </div>
  );
}

export default App;
