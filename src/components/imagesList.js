import React from "react";
import ImageCard from "./ImageCard";
import "./imagesList.css";

const ImagesList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="images-list">{images}</div>;
};
export default ImagesList;
