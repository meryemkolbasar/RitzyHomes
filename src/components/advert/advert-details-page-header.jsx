import React from 'react'
import "./advert-details-page-header.scss";

const AdvertDetailsPageHeader = ({ title, location, listingType, timeAgo, listingID, price }) => {
  return (
    <div className="page-header">
    <h1>{title}</h1>
    <div className="details">

      <span className="location">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-geo-alt" viewBox="0 0 16 16">
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
        {location}
        </span>

      <span className="listing-type">{listingType}</span>

      <span className="time-ago">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-clock" viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
      </svg>
        {timeAgo}
        </span>

      <span className="listing-id">{listingID}</span>
      <span className="price">{price}</span>
    </div>
  </div>
  );
};

export default AdvertDetailsPageHeader;
