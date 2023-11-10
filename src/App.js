import './App.css';
import Login from "./views/Login.js"
import Register from './views/Register';
import Nav from './views/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home.js';
import NewFilm from './views/NewFilm.js';
import CommingSoonFilm from './views/CommingSoonfilm.js';
import PopularFilm from './views/PopularFilm.js';
import InforUser from './views/InforUser.js';
import MovieDetail from './views/MoviewDetail.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes path="/" element={<Nav/>}>
            <Route index element={<Home/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/> 
            <Route path='newfilm' element={<NewFilm/>}/>
            <Route path='commingsoonfilm' element={<CommingSoonFilm/>}/>
            <Route path='phimthinhhanh' element={<PopularFilm/>}/>
            <Route path='inforuser' element={<InforUser/>}/>
            <Route path='movie/:id' element={<MovieDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
