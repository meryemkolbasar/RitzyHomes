import React, { useState } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import countriesData from "../../helpers/data/countries.json";
import citiesData from "../../helpers/data/cities.json";
import neighbourhoodData from "../../helpers/data/neighbourhood.json";
import typeProperties from "../../helpers/data/typeproperties.json";
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
  const [selectedImages, setSelectedImages] = useState([]);

  const handleToggleSelect = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages((prevSelected) =>
        prevSelected.filter((i) => i !== index)
      );
    } else {
      setSelectedImages((prevSelected) => [...prevSelected, index]);
    }
  };

  const handleSetAsFeatured = () => {
    if (selectedImages.length > 0) {
      const featuredIndex = selectedImages[0];
      console.log("Set as Featured:", featuredIndex);
    } else {
      console.log("No image selected to set as featured");
    }
  };

  const handleImageDelete = () => {
    if (selectedImages.length > 0) {
      const remainingImages = images.filter(
        (_, index) => !selectedImages.includes(index)
      );
      setImages(remainingImages);
      setSelectedImages([]);
    } else {
      console.log("No image selected to delete");
    }
  };

  const handleImageAdd = () => {
    // Burada resim ekleme fonksiyonu implement edilebilir.
    // Örneğin, kullanıcı bir dosya seçtiğinde bu dosya state'e eklenir.
  };

  const handleCreateAdvert = () => {
    const newAdvert = {
      commonInfo,
      addressInfo,
      properties,
      images,
    };

    console.log("New Advert:", newAdvert);

    setCommonInfo({
      title: "",
      description: "",
      price: "",
      advertType: "",
      category: "",
    });
    setAddressInfo({
      country: "",
      city: "",
      neighbourhood: "",
      location: "",
    });
    setProperties({
      floor: "",
      bedroom: "",
      bathroom: "",
      garage: "",
      yearOfBuilt: "",
      size: "",
    });
    setImages([]);
    setSelectedImages([]);
  };

  return (
    <Container>
      <Row className="add-new-advert-container">
        <Col md={12}>
          <Form>
            <h5>Common Information</h5>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={commonInfo.title}
                onChange={(e) =>
                  setCommonInfo({ ...commonInfo, title: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={commonInfo.description}
                onChange={(e) =>
                  setCommonInfo({ ...commonInfo, description: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={commonInfo.price}
                onChange={(e) =>
                  setCommonInfo({ ...commonInfo, price: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formAdvertType">
              <Form.Label>Advert Type</Form.Label>
              <Form.Control
                as="select"
                value={commonInfo.advertType}
                onChange={(e) =>
                  setCommonInfo({ ...commonInfo, advertType: e.target.value })
                }
              >
                <option value="">Select Advert Type</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={commonInfo.category}
                onChange={(e) =>
                  setCommonInfo({ ...commonInfo, category: e.target.value })
                }
              >
                <option value="">Select Category</option>
                {typeProperties.map((property) => (
                  <option key={property.id} value={property.title}>
                    {property.title}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>

        <Col md={12}>
          <Form>
            <h5>Address Information</h5>
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                value={addressInfo.country}
                onChange={(e) =>
                  setAddressInfo({
                    ...addressInfo,
                    country: e.target.value,
                    city: "",
                  })
                }
              >
                <option value="">Choose</option>
                {countriesData.map((country, index) => (
                  <option key={index} value={country.en_short_name}>
                    {country.en_short_name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                as="select"
                value={addressInfo.city}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, city: e.target.value })
                }
              >
                <option value="">Choose</option>
                {citiesData[addressInfo.country]?.cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="neighbourhood">
              <Form.Label>Neighbourhood</Form.Label>
              <Form.Control
                as="select"
                value={addressInfo.neighbourhood}
                onChange={(e) =>
                  setAddressInfo({
                    ...addressInfo,
                    neighbourhood: e.target.value,
                  })
                }
              >
                <option value="">Choose</option>
                {neighbourhoodData.neighbourhoodTypes.map((neighbourhood) => (
                  <option key={neighbourhood.name} value={neighbourhood.name}>
                    {neighbourhood.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                value={addressInfo.location}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, location: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Col>

        <Col md={12}>
          <Form>
            <h5>Properties</h5>
            <Form.Group controlId="floor">
              <Form.Label>Floor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter floor"
                value={properties.floor}
                onChange={(e) =>
                  setProperties({ ...properties, floor: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="bedroom">
              <Form.Label>Bedroom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter bedroom count"
                value={properties.bedroom}
                onChange={(e) =>
                  setProperties({ ...properties, bedroom: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="bathroom">
              <Form.Label>Bathroom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter bathroom count"
                value={properties.bathroom}
                onChange={(e) =>
                  setProperties({ ...properties, bathroom: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="garage">
              <Form.Label>Garage</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter garage count"
                value={properties.garage}
                onChange={(e) =>
                  setProperties({ ...properties, garage: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="yearOfBuilt">
              <Form.Label>Year of Built</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter year of built"
                value={properties.yearOfBuilt}
                onChange={(e) =>
                  setProperties({ ...properties, yearOfBuilt: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="size">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter size"
                value={properties.size}
                onChange={(e) =>
                  setProperties({ ...properties, size: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Col>

        <Col md={12}>
          <div>
            <h5>Images</h5>
            {images.map((image, index) => (
              <div
                key={index}
                className={`image-container ${
                  selectedImages.includes(index) ? "selected" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`image-${index}`}
                  onClick={() => handleToggleSelect(index)}
                />
                <Button variant="outline-primary" onClick={handleSetAsFeatured}>
                  Set as Featured
                </Button>
                <Button variant="outline-danger" onClick={handleImageDelete}>
                  Delete
                </Button>
              </div>
            ))}
            <Button variant="primary" onClick={handleImageAdd}>
              Add Image
            </Button>
          </div>
        </Col>

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
