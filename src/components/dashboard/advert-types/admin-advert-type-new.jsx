import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import  './admin-advert-type-new.scss'
const AdminAdvertTypeNew = () => {
  // State hook kullanarak 'title' adında bir state tanımlanıyor.
  const [title, setTitle] = useState('');

  // Input'taki değer değiştikçe çağrılacak fonksiyon.
  const handleTitleChange = (e) => {
    // State'i güncelleme işlemi, input değeriyle değiştirilir.
    setTitle(e.target.value);
  };

  // Create butonuna tıklandığında çağrılacak fonksiyon.
  const handleCreateButtonClick = () => {
    // API'ye başlık bilgisini gönderme işlemi için bir fonksiyon çağrılıyor.
    sendTitleToAPI(title);

     // İşlem tamamlandığında input alanındaki yazıyı sıfırla.
     setTitle('');
  };

  // API'ye başlık bilgisini gönderme işlemini gerçekleştiren fonksiyon.
  const sendTitleToAPI = (title) => {
    // Konsola gönderilen mesaj, başlık ve API'ye gönderme işlemini simgeliyor.
    console.log('New title created and sent to the API:', title);
    // Bu kısımda gerçek bir API çağrısı yapılabilir.
  };

  return (
    <Container > 
      <Row className="advert-type-new-container"> 
        <Col md={{ span: 4, offset: 1 }} xs={12}> 

      <label className='title'>Title</label>
      <input className= 'title-input' type="text" value={title} onChange={handleTitleChange} />

      
      <button className='create-button' onClick={handleCreateButtonClick}>Create</button>
       </Col> 
      </Row> 
   </Container>
  );
};


export default AdminAdvertTypeNew;