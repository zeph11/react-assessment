import classes from "./Album.module.css";

export const Album = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className={classes.container}>
      <h2>Title: {title}</h2>
    </div>
  );
};
