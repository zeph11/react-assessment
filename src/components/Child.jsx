const Child = ({ value, setValue }) => {
  const handleMinusClick = () => {
    setValue(value - 1);
  };

  const handlePlusClick = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <button type="button" className="btn" onClick={handleMinusClick}>
        -
      </button>
      <button type="button" className="btn" onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default Child;
