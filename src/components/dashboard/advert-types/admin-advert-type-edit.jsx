import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import  './admin-advert-type-edit.scss'
const AdminAdvertTypeEdit= () => {
  // State hook kullanarak 'title' adında bir state tanımlanıyor.
  const [title, setTitle] = useState('');

  // Input'taki değer değiştikçe çağrılacak fonksiyon.
  const handleTitleChange = (e) => {
    // State'i güncelleme işlemi, input değeriyle değiştirilir.
    setTitle(e.target.value);
  };

  // Delete butonuna tıklandığında çağrılacak fonksiyon.
  const handleDeleteButtonClick = () => {
    // Silme işlemi için bir fonksiyon çağrılır veya burada gerekli işlemler yapılır.
    console.log('Advert type deleted');

    // İşlem tamamlandığında input alanındaki yazıyı sıfırla.
    setTitle('');
  };

  // Save butonuna tıklandığında çağrılacak fonksiyon.
  const handleSaveButtonClick = () => {
    // API'ye başlık bilgisini gönderme işlemi için bir fonksiyon çağrılır.
    sendTitleToAPI(title);

    // İşlem tamamlandığında input alanındaki yazıyı sıfırla.
    setTitle('');
  };

  // API'ye başlık bilgisini gönderme işlemini gerçekleştiren fonksiyon.
  const sendTitleToAPI = (title) => {
    // Konsola gönderilen mesaj, başlık ve API'ye gönderme işlemini simgeliyor.
    console.log('Advert type saved and sent to the API:', title);
    // Bu kısımda gerçek bir API çağrısı yapılabilir.
  };

  
  return (
     <Container > 
      <Row className="advert-type-edit-container"> 
        <Col md={{ span: 5, offset: 1 }} xs={12}>
      <label className='title'>Title</label>
      <input className='title-input' type="text" value={title} onChange={handleTitleChange} />

      
      <button className='delete-button ' onClick={handleDeleteButtonClick}>Delete</button>
      <button className='save-button ' onClick={handleSaveButtonClick}>Save</button>
        
        </Col>
       </Row>
    </Container>
  );
};


export default AdminAdvertTypeEdit;
