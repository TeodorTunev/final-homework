import React from "react";
import "./Albums.css";
import useDataHook from "./dataHook";

const defaultImage =
  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";

const Albums = () => {
  const { data } = useDataHook();

  return (
    <div>
      <h1>Albums</h1>
      <div className="albums">
        {data.map((item) => {
          return (
            <div className="album" key={item.id}>
              <div className="image-container">
                <img src={item.image || defaultImage} alt="Album cover" />
              </div>
              <div className="album-info">
                <h2>{item.title}</h2>
                <h3>{item.author}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
