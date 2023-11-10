import "./Login.css"
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Login = () =>{

    const navigate = useNavigate();
    
    const redirectToRegister = () => {
        navigate('/register');
    };
    return(
        <>
            <h2 className="animate-charcter1">LOGIN</h2> 
            <div className="form-login">
               
                <Form className="login-form">
                <div className="input-group">
                    <label for="username">Tên tài khoản</label>
                    <input type="text" id="username" name="username" required/>
                </div>
                <div className="input-group">
                    <label for="password">Mật khẩu</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <div className="button-group    ">
                    <button type="submit">Login</button>
                    <button type="button" onClick={redirectToRegister}>Register</button>
                </div>
                </Form>
            </div>
        </>
    )
}

export default Login;