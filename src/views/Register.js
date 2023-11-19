import "./Register.css"
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const Register = () =>{

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        birthDate: '',
        username: '',
        password: '',
        email: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        try {
          const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Registration successful');
            alert('Registration successful')
            // Thực hiện các hành động sau khi đăng ký thành công
          } else {
            console.error('Registration failed');
          }
        } catch (error) {
          console.error('Error during registration:', error);
        }
      };

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
                                <label htmlFor="fullName">Họ và tên</label>
                                <input type="text" id="fullName" name="fullName" onChange={handleInputChange} required/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="birthDate">Ngày sinh</label>
                                <input type="date" id="birthDate" name="birthDate" onChange={handleInputChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Tên tài khoản</label>
                        <input type="text" id="username" name="username" onChange={handleInputChange} required/>
                    </div>
                    <div className="input-group">
                        <div className="input-row">
                            <div className="input-item">
                                <label htmlFor="password">Mật khẩu</label>
                                <input type="password" id="password" name="password" onChange={handleInputChange} required/>
                            </div>
                            {/* <div className="input-item">
                                <label htmlFor="password">Nhập lại mật khẩu</label>
                                <input type="password" id="check_password" name="check_password" required/>
                            </div> */}
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={handleInputChange} required/>
                    </div>
                    <div className="button-group    ">
                        <button type="button" onClick={handleRegister}>Register</button>
                        <button type="button" onClick={handleLogin}>Login</button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Register;