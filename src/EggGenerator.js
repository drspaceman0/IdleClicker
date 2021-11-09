const EggGenerator = (props) => {
  return (
    <div className={`egg-generator ${props.isEnabled ? "" : "hidden"}`}> 
    <button
        className="value-button"
        onClick={props.myCallBack}
        disabled={props.myEggTotal < props.myCost}
      > 
        {`Buy ${props.myIncrementAmount} egg${props.myIncrementAmount > 1 ? "s" : ""} per sec`}  
      </button>
      <span className="value-label">{props.myTotal}</span> 
      <p className="value-cost">Cost {props.myCost} eggs</p> 
      
      
    </div>
  );
};

export default EggGenerator;
