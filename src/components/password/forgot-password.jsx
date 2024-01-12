import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import './forgot-password.scss'

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSendResetCode = async () => {
    try {
      // E-posta adresini kullanarak reset kodu gönderme işlemleri burada gerçekleştirilebilir.
      // Örneğin: AuthService.sendResetCode(email) gibi bir metot çağrılabilir.

      // Başarılı bir şekilde reset kodu gönderildiğinde kullanıcıyı başka bir sayfaya yönlendirme.
      navigate('/reset-password'); 
    } catch (error) {
      console.error('An error occurred while sending reset code:', error);
      // Hata durumunda kullanıcıya bildirim gösterme.
    }
  };

  return (
    <Container>
      <Row className="forgot-container">
        <Col md={{ span: 4, offset: 1 }} xs={12}>
          <form>
              <label className='email-title'>
                Email 
                <input className='email-input' type="email" value={email} onChange={(e) => setEmail(e.target.value) }/>
                </label> 
            <br />
            <br />
            <button variant="primary" type="button" onClick={handleSendResetCode} className='reset-code-button'>
               SEND RESET CODE
            </button>
           </form>
          
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
