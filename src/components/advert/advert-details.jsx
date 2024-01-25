import React, { useState } from "react";
import { Col, Row, Container, Image } from "react-bootstrap"; 
import "./advert-details.scss";

const AdvertDetails = () => {
  // State for tour scheduling
  const [tourDate, setTourDate] = useState("");
  const [tourTime, setTourTime] = useState("");
  const [isEditingTourTime, setIsEditingTourTime] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Function to handle tour submission
  const handleTourSubmission = () => {
    // Implement the logic for submitting the tour request
    // You can use tourDate and tourTime state values here
    console.log("Tour Request Submitted:", tourDate, tourTime);
  };


  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const images = [
    "./images/advert-details-images/advert-details-1.jpg",
    "./images/advert-details-images/advert-details-2.jpg",
    "./images/advert-details-images/advert-details-3.jpg",
    "./images/advert-details-images/advert-details-4.jpg",
    "./images/advert-details-images/advert-details-5.jpg",
  ];

  return (
    <Container>
      <Row className="advert-details-container">
        <Col md={8}>
          <div className="advert-photos">
           <Image
              src={images[selectedImage]}
              alt={`villa-${selectedImage + 1}`}
              className={`villa villa-${selectedImage + 1} selected`}
            />

            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`villa-${index + 1}`}
                className={`villa villa-${index + 1} not-selected`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>

          <br />
          <div className="advert-description">
            <h5 className="description-title">Description</h5>
            <p className="description-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <br />
          <div className="advert-details">
            <h5 className="details-title">Details</h5>
            <p className="details-content">
            <div className="size">Size 120m2</div> 
            <div className="bathrooms">Bathrooms 2</div>
            <div className="bedrooms">Bedrooms 4</div>
            <div className="garage">Garage 1</div>
            <div className="year-of-built">Year of built 2022</div>
            <div className="furniture">Furniture Yes</div>
            <div className="maintenance">Maintenance fee $80</div>
            <div className="terrace">Terrace 2</div>
            </p>
          </div>
          <br />
          <div className="advert-location">
            <h5 className="location-title">Location</h5>
            <p className="location-content">
              Country: Turkey City: Istanbul District: Eyupsultan
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96113.05353352548!2d28.7175133185692!3d41.16654221041886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab264ecd61265%3A0x9b084a042b7d4607!2zRXnDvHBzdWx0YW4vxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1str!2sde!4v1705508962899!5m2!1str!2sde"
              className="location-map"
              width="900"
              height="400"
              style={{ border: "0", borderRadius: "20px", marginLeft: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>

        <Col md={4}>
          <div className="tour-schedule">
            <h4 className="schedule-title">Schedule a tour </h4>
            <p className="schedule-desc">Choose your preferred day</p>
            <br />

            <input
              type="date"
              value={tourDate}
              onChange={(e) => setTourDate(e.target.value)}
              className="date-input"
            />
            <br />
            <br />

            <input
              type="time"
              value={tourTime}
              onChange={(e) => setTourTime(e.target.value)}
              className="time-input"
            />
            <br />
            <br />
            <button onClick={handleTourSubmission} className="submit-button">
              Submit a tour request
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdvertDetails;
