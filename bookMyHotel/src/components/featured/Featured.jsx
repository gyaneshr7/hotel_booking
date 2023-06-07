import React from 'react';
import "./featured.css";

const Featured = () => {
    return (
        <div className="featured">
        <div className="featuredItem">
          <img
            src="https://static.toiimg.com/photo/79127080/79127080.jpg?v=3"
            alt="" 
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Mumbai</h1>
            <h2>533 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://static.toiimg.com/photo/87320980/87320980.jpg?v=3"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Delhi</h1>
            <h2>532 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/38/1a/98/caption.jpg?w=300&h=300&s=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Indore</h1>
            <h2>132 properties</h2>
          </div>
        </div>
        </div>
    );
}

export default Featured;