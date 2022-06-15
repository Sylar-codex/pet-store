import React from "react";
import Stefan from "../Pet images/Stefan.jpg";
import Jack from "../Pet images/Jack2.jpg";
import Lucifer from "../Pet images/Lucifer.jpg";

function Deals() {
  return (
    <div>
      <div className="main-deals">
        <div className="lucifer">
          <h1>Deal of the week</h1>
          <div className="empty"></div>
          <p>50% OFF</p>
          <img src={Lucifer} alt="" />
        </div>
        <div className="stefan">
          <h1>Dogs</h1>
          <p>Hi please get me a new home</p>
          <img src={Stefan} alt="" />
        </div>
        <div className="jack">
          <h1>Cats</h1>
          <p>Hi please get me a new home</p>
          <img src={Jack} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Deals;
