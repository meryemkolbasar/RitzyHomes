import React, { useState } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import "./add-new-advert.scss";

const AddNewAdvert = () => {
  const [commonInfo, setCommonInfo] = useState({
    title: "",
    description: "",
    price: "",
    advertType: "",
    category: "",
  });

  const [addressInfo, setAddressInfo] = useState({
    country: "",
    city: "",
    neighbourhood: "",
    location: "",
  });

  const [properties, setProperties] = useState({
    floor: "",
    bedroom: "",
    bathroom: "",
    garage: "",
    yearOfBuilt: "",
    size: "",
  });

  const [images, setImages] = useState([]);

  const handleImageAdd = () => {
    // Burada resim ekleme fonksiyonu implement edilebilir.
    // Örneğin, kullanıcı bir dosya seçtiğinde bu dosya state'e eklenir.
  };

  const handleSetAsFeatured = (index) => {
    // Burada resimler arasında öne çıkanı belirleme fonksiyonu implement edilebilir.
    // index parametresi, hangi resmin öne çıkacağını belirtir.
  };

  const handleImageDelete = (index) => {
    // Burada resim silme fonksiyonu implement edilebilir.
    // index parametresi, hangi resmin silineceğini belirtir.
  };

  const handleCreateAdvert = () => {
    // Burada yeni ilan oluşturma fonksiyonu implement edilebilir.
    // State'lerde bulunan bilgileri kullanarak ilan oluşturulabilir.
  };

  return (
    <Container>
      <Row className="add-new-advert-container">
        {/* Common Information */}
        <Col md={6}>
          <Form>
            <h5>Common Information</h5>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                //placeholder="Enter title"
                value={commonInfo.title}
                onChange={(e) => setCommonInfo({ ...commonInfo, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
               // placeholder="Enter description"
                value={commonInfo.description}
                onChange={(e) => setCommonInfo({ ...commonInfo, description: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
               // placeholder="Enter price"
                value={commonInfo.price}
                onChange={(e) => setCommonInfo({ ...commonInfo, price: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formAdvertType">
              <Form.Label>Advert Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="For Sale"
                value={commonInfo.advertType}
                onChange={(e) => setCommonInfo({ ...commonInfo, advertType: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Villa"
                value={commonInfo.category}
                onChange={(e) => setCommonInfo({ ...commonInfo, category: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Col>

        {/* Address Information */}
        <Col md={6}>
          <Form>
            <h5>Address Information</h5>
            {/* Address information form fields */}
          </Form>
        </Col>

        {/* Properties */}
        <Col md={6}>
          <Form>
            <h5>Properties</h5>
            {/* Properties form fields */}
          </Form>
        </Col>

        {/* Images */}
        <Col md={6}>
          <div>
            <h5>Images</h5>
            {images.map((image, index) => (
              <div key={index} className="image-container">
                <img src={image} alt={`image-${index}`} />
                <Button
                  variant="outline-primary"
                  onClick={() => handleSetAsFeatured(index)}
                >
                  Set as Featured
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => handleImageDelete(index)}
                >
                  Delete
                </Button>
              </div>
            ))}
            <Button variant="primary" onClick={handleImageAdd}>
              Add Image
            </Button>
          </div>
        </Col>

        {/* Create Button */}
        <Col md={12} className="text-center">
          <Button variant="success" onClick={handleCreateAdvert}>
            Create 
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewAdvert;
