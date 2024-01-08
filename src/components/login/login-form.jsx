import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './login-form.scss';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Burada gerçek bir kimlik doğrulama işlemi gerçekleştirilecek.
    // Örneğin, bir API'ye e-posta ve şifreyi gönderip kontrol edilebilir.
    // Eğer giriş başarılı ise, kullanıcıyı yönlendir

    navigate('/home/content');
  };

  return (
    <Row className="login-container">
      <Col md={2} className="mx-auto">
        <form>
          <label className='email-title'>
            Email
            <input className="email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <br />
          <label className='password-title'>
            Password
            <input className="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <br />
          <Link className="forgot-password-link"> Forgot password?</Link>
          <br />
          <br />
          <button className="login-button" type="button" onClick={handleLogin}>
            LOGIN
          </button>
        </form>
        <br />
        <p className="register-now-paragraph">
          If you don't have an account.{" "}
          <Link to="/register" className="register-now-link">Register now!</Link>
        </p>
      </Col>
    </Row>
  );
};

export default LoginForm;
