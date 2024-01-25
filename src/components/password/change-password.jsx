import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import './change-password.scss';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retryPassword, setRetryPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleChangePassword = async () => {
    try {
      // Şifre değiştirme işlemleri burada gerçekleştirilebilir.
      // Örneğin: AuthService.changePassword(currentPassword, newPassword) gibi bir metot çağrılabilir.

      // Başarılı bir şekilde şifre değiştirme gerçekleştiğinde kullanıcıyı başka bir sayfaya yönlendirme.
      setResetSuccess(true);
      setTimeout(() => {
        setResetSuccess(false);
        navigate('/'); 
        // Değiştirmeniz gereken sayfa yolunu ekleyin
      }, 2000);
    } catch (error) {
      console.error('An error occurred while changing password:', error);
      // Hata durumunda kullanıcıya bildirim gösterme.
    }
  };

  return (
    <Container>
      <Row className="change-container">
        <Col md={{ span: 4, offset: 1 }} xs={12}>
          <form>
            <label className='current-password-title'>
              Current Password
              <input
                className='current-password-input'
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label className='new-password-title'>
              New Password
              <input
                className='new-password-input'
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label className='retry-new-password-title'>
              Retry New Password
              <input
                className='retry-new-password-input'
                type="password"
                value={retryPassword}
                onChange={(e) => setRetryPassword(e.target.value)}
              />
            </label>
            <br />
            <br />
            <br />
            <button type="button" onClick={handleChangePassword} className='change-password-button'>
              UPDATE
            </button>
          </form>
        </Col>
        </Row>
    </Container>
     );
     }
    export default ChangePassword
