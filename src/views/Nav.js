import { Outlet, Link } from "react-router-dom";

const Nav = () =>{
    return(
    <>
      <nav>
        <ul>
          <li>  
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/newfilm">Phim mới</Link>
          </li>
          <li>
            <Link to="/commingsoonfilm">Phim sắp chiếu</Link>
          </li>
          <li>
            <Link to="/phimthinhhanh">Phim thịnh hành</Link>
          </li>
          <li>
            <Link to="/inforuser">Thông tin người dùng</Link>
          </li>
          <li>
            <Link to="/movie/:id">Thông tin phim</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
    )
}

export default Nav;