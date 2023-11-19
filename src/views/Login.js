import "./Login.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Modal, Button } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleRegister = () => {
    navigate("/register");
  };

  const handleHome = async () => {
    try {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const loginData = {
        username,
        password,
      };

      if (isCaptchaVerified) {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });

        if (response.ok) {
          const userData = await response.json();
          localStorage.setItem("user", JSON.stringify(userData));
          setShowModal(true);
          
        } else {
          // Đăng nhập không thành công, hiển thị thông báo hoặc xử lý khác
          console.error("Login failed");
        }
      } else {
        // Hiển thị thông báo hoặc xử lý khác khi reCAPTCHA chưa được xác minh
        console.error("Please complete reCAPTCHA");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // You can also navigate to another page here if needed
    navigate("/");
  };

  return (
    <>
      <h2 className="animate-charcter1">LOGIN</h2>
      <div className="form-login">
        <Form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleHome();
          }}
        >
          <div className="input-group">
            <label htmlFor="username">Tên tài khoản</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" id="password" name="password" required />
          </div>
          <ReCAPTCHA
            className="capcha"
            sitekey="6LcHTw8pAAAAAMuaJGh85LoqP4tTbNGz2pB2vfY0"
            onChange={handleCaptchaChange}
          />
          <div className="button-group    ">
            <button type="submit" onClick={handleHome}>
              Login
            </button>
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          </div>
        </Form>
      </div>


      {/* Modal for successful login */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your login was successful. Welcome back!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
