// <EggMagnitude
//               key={index}
//               id={index}
//               magnitude={g}
//               totalEggs={this.state.totalEggs}
//               addMagnitudeFunction={() => this.addXMagnitudes(index)}
//               addGeneratorFunc={() => this.addXGenerators(index)}
//             />

import { render } from "react-dom";

const MagnitudeButton = (props) => {
  return (
    <span>
      {props.total}{" "}
      <a className="magnitude-link" onClick={props.addMagnitudeFunction}>
        {props.name}
      </a>
      ,
    </span>
  );
};

const ActionScentence = (props) => {
  const magnitudes = props.gameState.magnitudes;

  return (
    <div>
      {magnitudes.map((g, index) => (
        <MagnitudeButton
          total={g.total}
          name={g.name}
          key={index}
          id={index}
          addMagnitudeFunction={props.addMagnitudeFunction}
        />
      ))}
    </div>
  );
};
export default ActionScentence;
