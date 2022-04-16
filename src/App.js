import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Logout from './Logout';

function App() {
  return (
    <div>
      <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;

