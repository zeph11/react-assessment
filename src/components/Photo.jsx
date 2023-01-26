import classes from "./Photo.module.css";

export const Photo = ({ title, url }) => {
  return (
    <div className={classes.container}>
      <img src={url} className={classes.image} alt="Vite logo" />
      <p className={classes.caption}>{title}</p>
    </div>
  );
};
