import "./Register.css"
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";



const Register = () =>{

    const navigate = useNavigate();

    const handleLogin = () => {
      navigate("/login");
    };
   
    return(
        <>
            <h2 className="animate-charcter">Register</h2> 
            <div className="form-login">
                <Form className="login-form">
                    <div className="input-group">
                        <div className="input-row">
                            <div className="input-item">
                                <label for="username">Họ và tên</label>
                                <input type="text" id="username" name="username" required/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="birthdate">Ngày sinh</label>
                                <input type="date" id="birthdate" name="birthdate" required />
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        <label for="username">Tên tài khoản</label>
                        <input type="text" id="username" name="username" required/>
                    </div>
                    <div className="input-group">
                        <div className="input-row">
                            <div className="input-item">
                                <label for="password">Mật khẩu</label>
                                <input type="password" id="password" name="password" required/>
                            </div>
                            <div className="input-item">
                                <label for="password">Nhập lại mật khẩu</label>
                                <input type="password" id="password" name="password" required/>
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        <label for="password">Email</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="button-group    ">
                        <button type="submit">Register</button>
                        <button type="button" onClick={handleLogin}>Login</button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Register;