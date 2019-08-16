import React from "react";


const SearchItems = props => (
  <div className="style_images">
    {props.gifs.map((gif, index) => {
      return (
        <div key={index} className="image-div">
          <img key={index} src={gif.images.fixed_height.url} alt="" />
        </div>
      );
    })}
  </div>
);
export default SearchItems;
