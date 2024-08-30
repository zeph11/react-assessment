import classes from "./Album.module.css";

export const Album = ({ title, onClick, className }) => {
  return (
    <div onClick={onClick} className={`${classes.container} ${className}`}>
      <h2>Title: {title}</h2>
    </div>
  );
};
