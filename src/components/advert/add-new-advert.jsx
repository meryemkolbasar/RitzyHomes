import React, { useState } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import countriesData from "../../helpers/data/countries.json";
import citiesData from "../../helpers/data/cities.json";
import neighbourhoodData from "../../helpers/data/neighbourhood.json";
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

  const handleImageAdd = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Dosya seçildiyse burada işlemleri gerçekleştirin
      console.log("Seçilen dosya:", selectedFile);

      // Örneğin, dosyayı bir URL'e dönüştürüp images state'ine ekleyebilirsiniz
      const fileUrl = URL.createObjectURL(selectedFile);
      setImages([...images, fileUrl]);
    } else {
      console.log("Dosya seçilmedi");
    }
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
            <h5 className="common-info">Common Information</h5>
            <br />
            <label htmlFor="formTitle">Title</label>
            <br />
            <input
              className="title"
              type="text"
              value={commonInfo.title}
              onChange={(e) =>
                setCommonInfo({ ...commonInfo, title: e.target.value })
              }
            />
            <br />
            <br />
            <label>Description</label>
            <br />
            <textarea
              className="description"
              type="text"
              id="desc"
              onChange={(e) => {
                const inputValue = e.target.value;
                const truncatedValue = inputValue
                  .split(" ")
                  .slice(0, 500)
                  .join(" ");

                setCommonInfo({ ...commonInfo, description: truncatedValue });
              }}
            />

            <br />
            <br />
            <Row>
              <Col md={2}>
                <label htmlFor="price">Price</label>
                <br />
                <input
                  className="price"
                  type="text"
                  id="price"
                  value={commonInfo.price}
                  onChange={(e) =>
                    setCommonInfo({ ...commonInfo, price: e.target.value })
                  }
                />
              </Col>

              <Col md={2}>
                <label htmlFor="formAdvertType">Advert Type</label>
                <br />
                <select
                  className="advert-type"
                  id="formAdvertType"
                  value={commonInfo.advertType}
                  onChange={(e) =>
                    setCommonInfo({
                      ...commonInfo,
                      advertType: e.target.value,
                    })
                  }
                >
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
              </Col>

              <Col md={2}>
                <label htmlFor="formCategory">Category</label>
                <br />
                <select
                  className="category"
                  id="category"
                  value={commonInfo.category}
                  onChange={(e) =>
                    setCommonInfo({ ...commonInfo, category: e.target.value })
                  }
                >
                  <option value="Villa">Villa</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Office">Office</option>
                  <option value="Bungalow">Bungalow</option>
                </select>
              </Col>
            </Row>
          </Form>
        </Col>
        <br />
        <br />
        <Col md={12}>
          <Form>
            <br />
            <br />
            <h5>Address Information</h5>
            <br />
            <Row>
              <Col md={2}>
                <label htmlFor="country">Country</label>
                <select
                  className="country"
                  id="country"
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
                </select>
              </Col>

              <Col md={2}>
                <label htmlFor="city">City</label>
                <select
                  className="city"
                  id="city"
                  value={addressInfo.city}
                  onChange={(e) =>
                    setAddressInfo({ ...addressInfo, city: e.target.value })
                  }
                >
                  <option value="">Choose</option>
                  {citiesData[addressInfo.country]?.cities.map(
                    (city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    )
                  )}
                </select>
              </Col>
              <Col md={2}>
                <label htmlFor="neighbourhood">Neighbourhood</label>
                <select
                  className="neighbourhood"
                  id="neighbourhood"
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
                </select>
              </Col>
            </Row>
            <br />
            <label htmlFor="location">Location</label>
            <br />
            <input
              className="location"
              type="text"
              value={addressInfo.location}
              onChange={(e) =>
                setAddressInfo({ ...addressInfo, location: e.target.value })
              }
            />
          </Form>
        </Col>
        <br />
        <br />
        <Col md={12}>
          <Form>
            <br />
            <br />
            <h5>Properties</h5>
            <br />
            <Row>
              <Col md={2}>
                <label htmlFor="floor">Floor</label>
                <input
                  className="floor"
                  type="text"
                  value={properties.floor}
                  onChange={(e) =>
                    setProperties({ ...properties, floor: e.target.value })
                  }
                />
              </Col>
              <Col md={2}>
                <label htmlFor="bedroom">Bedroom</label>
                <input
                  className="bedroom"
                  type="text"
                  value={properties.bedroom}
                  onChange={(e) =>
                    setProperties({ ...properties, bedroom: e.target.value })
                  }
                />
              </Col>
              <Col md={2}>
                <label htmlFor="bathroom">Bathroom</label>
                <input
                  className="bathroom"
                  type="text"
                  value={properties.bathroom}
                  onChange={(e) =>
                    setProperties({ ...properties, bathroom: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row>
              <Col md={2}>
                <label htmlFor="garage">Garage</label>
                <input
                  className="garage"
                  type="text"
                  value={properties.garage}
                  onChange={(e) =>
                    setProperties({ ...properties, garage: e.target.value })
                  }
                />
              </Col>
              <Col md={2}>
                <label htmlFor="yearOfBuilt">Year of Built</label>
                <input
                  className="year-of-built"
                  type="text"
                  value={properties.yearOfBuilt}
                  onChange={(e) =>
                    setProperties({
                      ...properties,
                      yearOfBuilt: e.target.value,
                    })
                  }
                />
              </Col>
              <Col md={2}>
                <label htmlFor="size">Size</label>
                <input
                  className="size"
                  type="text"
                  value={properties.size}
                  onChange={(e) =>
                    setProperties({ ...properties, size: e.target.value })
                  }
                />
              </Col>
            </Row>
          </Form>
        </Col>

        <Col md={12}>
          <div>
            <br />
            <br />
            <h5>Images</h5>
            {images.map((image, index) => (
              <div
                key={index}
                className={`image-container ${
                  selectedImages.includes(index) ? "selected" : ""
                }`}
              >
                <img
                  className="images"
                  src={image}
                  alt={`image-${index}`}
                  onClick={() => handleToggleSelect(index)}

                />
                <div className="image-buttons">
                  <button
                  className="image-button-1"
                    variant="outline-primary"
                    onClick={handleSetAsFeatured}
                  >
                    Set as Featured
                  </button>
                  <button className="image-button-2" variant="outline-danger"  onClick={() => handleImageDelete(index)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <label className="add-img-btn" htmlFor="imageInput">
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={handleImageAdd}
                style={{ display: "none" }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                className="add-img-btn"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              </svg>{" "}
            </label>
          </div>

          <Col md={12} className="create"></Col>
          <br />
          <br />
          <button variant="success" onClick={handleCreateAdvert}>
            Create
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewAdvert;
