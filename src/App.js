import './App.css';
import Login from "./views/Login.js"
import Register from './views/Register';
import Nav from './views/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes path="/" element={<Nav/>}>
            <Route index element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
