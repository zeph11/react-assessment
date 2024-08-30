import classes from "./Photo.module.css";
// import { react } from "../assets/react.svg";
import { useState } from "react";
import spinner from "../assets/spinner.gif";

export const Photo = ({ title, url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0); //counter of number of times retries are made

  const maxRetries = 1; // Number of times to retry to get photos until manually retrying

  //function to handle when photo is loaded
  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  //function to handle error
  const handleError = () => {
    if (retry < maxRetries) {
      setRetry(retry + 1); //Changing the state of retry so that it forces re-render
    } else {
      setLoading(false);
      setError(true);
    }
  };

  //function to handle forceful retry
  const handleRetry = () => {
    setRetry(retry + 1);
    setLoading(true);
    setError(false);
  };
  return (
    <div className={classes.container}>
      {loading && !error && (
        <img
          src={spinner}
          alt="Loading..."
          width={20}
          height={20}
          className={classes.spinner}
        />
      )}

      <img
        src={url}
        className={classes.image}
        alt="No image available"
        onLoad={handleLoad}
        onError={handleError}
        key={retry} // forces re-render on change in retry
      />

      {error && (
        <div>
          <p>
            Failed to load the image.
            <span
              onClick={handleRetry}
              className="text-red-500 underline-offset-4 decoration-slate-100"
            >
              Retry?
            </span>
          </p>
        </div>
      )}

      <p className={classes.caption}>{title}</p>
    </div>
  );
};
