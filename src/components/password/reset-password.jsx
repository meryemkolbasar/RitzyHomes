import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container} from 'react-bootstrap';

import './reset-password.scss';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retryPassword, setRetryPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetPassword = async () => {
    try {
      // Şifre sıfırlama işlemleri burada gerçekleştirilebilir.
      // Örneğin: AuthService.resetPassword(resetCode, newPassword) gibi bir metot çağrılabilir.

      // Başarılı bir şekilde şifre sıfırlama gerçekleştiğinde kullanıcıyı başka bir sayfaya yönlendirme.
      setResetSuccess(true);
      setTimeout(() => {
        setResetSuccess(false);
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error('An error occurred while resetting password:', error);
      // Hata durumunda kullanıcıya bildirim gösterme.
    }
  };

  return (
    <Container>
      <Row className="reset-container"> 
        <Col md={{ span: 4, offset: 1 }} xs={12}>
          <form >
      <label className='reset-code-title'>
        Reset Code
      <input className='reset-code-input' type="text" value={resetCode} onChange={(e) => setResetCode(e.target.value)} /> 
      </label>
        <br />
        <br />
      <label className='new-password-title'>New Password
      <input className='new-password-input' type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}   />
      </label>
      <br />
      <br />
      <label className='retry-new-password-title'>Retry New Password
      <input className='retry-new-password-input' type="password" value={retryPassword} onChange={(e) => setRetryPassword(e.target.value)} />
      </label>
      <br />
      <br />
      <br />
      <button type="button" onClick={handleResetPassword} className='reset-password-button'>
        RESET PASSWORD
      </button>
      </form>
  
    </Col>
    </Row>
    </Container>
  );
};

export default ResetPassword;
