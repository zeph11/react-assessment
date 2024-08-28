const Child = (props) => {
  const handleMinusClick = () => {
    props.setValue(props.value - 1);
  };

  const handlePlusClick = () => {
    props.setValue(props.value + 1);
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
