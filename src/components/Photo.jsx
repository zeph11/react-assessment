import classes from "./Photo.module.css";
// import { react } from "../assets/react.svg";
import { useState } from "react";
import spinner from "../assets/spinner.gif";

export const Photo = ({ title, url }) => {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setloading(false);
  };

  const handleError = () => {
    setError(true);
    setloading(false);
  };
  return (
    <div className={classes.container}>
      {loading && !error && (
        <img
          src={spinner}
          // className={classes.image}
          alt="Loading..."
          width={20}
          height={20}
        />
      )}

      <img
        src={url}
        className={classes.image}
        alt="No image available"
        onLoad={handleLoad}
        onError={handleError}
      />

      <p className={classes.caption}>{title}</p>
    </div>
  );
};
