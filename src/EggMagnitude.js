const EggMagnitude = (props) => {
  // props:
  //    key={index}
  //    magnitude={g} // { name: "Dozen", total: 0, eggVal: 12, costToShowUnlock: 13, costToGenerate: 256, totalGenerators: 0, totalClicks:0, totalGeneratorClicks:0 },
  //    totalEggs={this.state.totalEggs}
  //    addMagnitudeFunction={() => this.addXMagnitudes(index)}
  //    addGeneratorFunc={() => this.addXGenerators(index)}

  const myMagnitude = props.magnitude;

  const totalEggs = props.totalEggs;
  const myMagnitudeTotal =
    myMagnitude.name == "Egg" ? totalEggs : myMagnitude.total;

  const isHidden_addMagnitude =
    myMagnitude.totalClicks == 0 && myMagnitude.costToShowUnlock > totalEggs
      ? "hidden"
      : "";

  const isAddMagnitudeDisabled = false; // might need this later

  const isHidden_addGenerator =
    myMagnitude.totalGeneratorClicks == 0 &&
    myMagnitude.costToGenerate > totalEggs
      ? "hidden"
      : "";
  const isAddGeneratorDisabled = myMagnitude.costToGenerate > totalEggs;

  const buttonText_add =
    "Buy a " + String(myMagnitude.name) + " (" + String(myMagnitudeTotal) + ")";
  const buttonText_generate = `Buy a ${myMagnitude.name} Generator (${myMagnitude.totalGenerators}/sec)`;

  return (
    <div className={"magnitude magnitude-" + props.id}>
      <div className={"magnitude-add " + isHidden_addMagnitude}>
        <button
          className="button-magnitude button-magnitude-add"
          onClick={props.addMagnitudeFunction}
          disabled={isAddMagnitudeDisabled}
        >
          {buttonText_add}
        </button>
      </div>
      <div className={"magnitude-generate " + isHidden_addGenerator}>
        <button
          className="button-magnitude button-magnitude-generate"
          onClick={props.addGeneratorFunc}
          disabled={isAddGeneratorDisabled}
        >
          {buttonText_generate}
        </button>
      </div>
    </div>
  );
};

export default EggMagnitude;
