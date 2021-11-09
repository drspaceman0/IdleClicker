const EggGenerator = (props) => {
  return (
    <div className={`egg-generator ${props.isEnabled ? "" : "hidden"}`}>
      <button
        className="value-button"
        onClick={props.myCallBack}
        disabled={props.myEggTotal < props.myCost}
      >
        Better buy {props.myIncrementAmount} egg/sec
      </button>
      <span className="value-label">{props.myTotal}</span>
      <p>Cost {props.myCost} eggs</p>
    </div>
  );
};

export default EggGenerator;
