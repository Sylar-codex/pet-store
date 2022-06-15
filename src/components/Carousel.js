import React, { useCallback, useEffect, useState } from "react";
import Crystal1 from "../Pet images/Crystal2.jpg";
import Jimmy from "../Pet images/Jimmy.jpg";
import Brain from "../Pet images/Brain.jpg";
import Angela from "../Pet images/Angela2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Carousel() {
  const [count, setCount] = useState(0);
  const imageSlider = [Crystal1, Jimmy, Brain, Angela];

  const increament = useCallback(() => {
    setCount(count === imageSlider.length - 1 ? 0 : count + 1);
  }, [imageSlider.length, count]);

  const decreament = () => {
    setCount(count === 0 ? imageSlider.length - 1 : count - 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count === imageSlider.length - 1 ? 0 : count + 1);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [count, imageSlider.length]);

  return (
    <div>
      <div className="carousel-main">
        <button
          className="next"
          onClick={() => {
            increament();
          }}
        >
          <FontAwesomeIcon size="3x" icon={faAngleRight} />
        </button>
        <button
          className="prev"
          onClick={() => {
            decreament();
          }}
        >
          <FontAwesomeIcon size="3x" icon={faAngleLeft} />
        </button>
        <div className="welcome-msg">
          <h4>Welcome to our pet store be sure to always get the very best</h4>
        </div>
        <figure>
          {imageSlider.map((image, i) => (
            <div key={i} className={count === i ? "slide active" : "slide"}>
              {count === i && (
                <img className="slide-img" src={image} alt="carousel" />
              )}
            </div>
          ))}
        </figure>
      </div>
    </div>
  );
}
export default Carousel;
