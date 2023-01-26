const Child = () => {
  const handleMinusClick = () => {
    /* Implement logic here */
  };

  const handlePlusClick = () => {
    /* Implement logic here */
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
