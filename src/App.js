import { Component } from "react";
import ReactDOM from "react-dom";

import EggMagnitude from "./EggMagnitude";
// import ActionScentence from "./ActionSentence";
import HeroImage from "./HeroImage";

const DEBUG_MODE = true;
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      totalEggs: 0, 
      magnitudes: [
        {
          name: "Egg",
          total: 0,
          eggVal: 1,
          costToShowUnlock: 0,
          costToGenerate: 100,
          totalGenerators: 0,
          totalClicks: 0,
          totalGeneratorClicks: 0,
        },
        {
          name: "Dozen",
          total: 0,
          eggVal: 12,
          costToShowUnlock: 13,
          costToGenerate: 256,
          totalGenerators: 0,
          totalClicks: 0,
          totalGeneratorClicks: 0,
        },
        {
          name: "Gross",
          total: 0,
          eggVal: 144,
          costToShowUnlock: 1026,
          costToGenerate: 5026,
          totalGenerators: 0,
          totalClicks: 0,
          totalGeneratorClicks: 0,
        },
        {
          name: "Grand",
          total: 0,
          eggVal: 1000,
          costToShowUnlock: 5000,
          costToGenerate: 10000,
          totalGenerators: 0,
          totalClicks: 0,
          totalGeneratorClicks: 0,
        },
        {
          name: "Myriad",
          total: 0,
          eggVal: 10000,
          costToShowUnlock: 24000,
          costToGenerate: 120000,
          totalGenerators: 0,
          totalClicks: 0,
          totalGeneratorClicks: 0,
        },
      ],
    };

    // debug function
    if (DEBUG_MODE) {
      this.enableEverything();
    }
  }

  enableEverything() {
    // debug function
    const newMagnitudes = this.state.magnitudes.slice();
    for (let i = 0; i < newMagnitudes.length; i++) {
      newMagnitudes[i].total = 1;
      newMagnitudes[i].totalClicks = 1;
      newMagnitudes[i].totalGeneratorClicks = 1;
    }
    this.setState({ magnitudes: newMagnitudes });
  }

  // set interval
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // clear interval
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.generateEggs();
    // this.unlockGenerators();
  }

  generateEggs() {
    let generatedEggs = 0;
    let updatedMagnitudes = this.state.magnitudes.slice();
    for (const i in this.state.magnitudes) {
      const g = this.state.magnitudes[i];
      if (g.totalGenerators > 0) {
        updatedMagnitudes[i].total += g.totalGenerators;
        generatedEggs += g.totalGenerators * g.eggVal;
      }
    }
    if (generatedEggs > 0) {
      this.setState({ magnitudes: updatedMagnitudes });
      this.setState({ totalEggs: this.state.totalEggs + generatedEggs });
    }
  }

  addXMagnitudes(index, x = 1) { 
    // x can be positive or negative
    console.log(this)

    let updatedMagnitudes = this.state.magnitudes.slice();
    updatedMagnitudes[index].total += x;
    updatedMagnitudes[index].showLocked = false;
    this.setState({ magnitudes: updatedMagnitudes });
    this.setState({ totalClicks: updatedMagnitudes[index].totalClicks + 1 });
    this.setState({
      totalEggs: this.state.totalEggs + updatedMagnitudes[index].eggVal * x,
    });
  }

  addXGenerators(index, x = 1) {
    let updatedMagnitudes = this.state.magnitudes.slice();
    updatedMagnitudes[index].totalGenerators += x;
    updatedMagnitudes[index].generateLocked = false;
    this.setState({ magnitudes: updatedMagnitudes });
    this.setState({
      totalGeneratorClicks: updatedMagnitudes[index].totalGeneratorClicks + 1,
    });

    // ADD FUNCTION FOR APPPLYING COST TO TOTAL EGGS
  }

  
   
  render() { 
    const myActionSentence =   
    <span>{this.state.magnitudes.map((g, index) => (
       <MagnitudeButton magnitude={g} key={index} id={index} totalEggs={this.state.totalEggs} addMagnitudeFunction={() => this.addXMagnitudes(index)}/> 
      
    ))}  
    <br />
     {this.state.magnitudes.map((g, index) => (
       <GeneratorButton magnitude={g} key={index} id={index} totalEggs={this.state.totalEggs} addGeneratorFunction={() => this.addXGenerators(index)}/> 
  
    ))} 
    </span>


    return (
      <div className="main">
        <HeroImage
          gameState={this.state} 
          actionSentence={myActionSentence}
        /> 
        {/* <section className="egg-actions">
          {this.state.magnitudes.map((g, index) => (
            <EggMagnitude
              key={index}
              id={index}
              magnitude={g}
              totalEggs={this.state.totalEggs}
              addMagnitudeFunction={() => this.addXMagnitudes(index)}
              addGeneratorFunc={() => this.addXGenerators(index)}
            />
          ))}
        </section> */}
      </div>
    );
  }
}

// const ActionSentence = (props) => { 

//   return (
//   <span>{props.magnitudes.map((g, index) => (
//       <MagnitudeButton key={index} id={index} magnitude={g} totalEggs={props.totalEggs} addMagnitudeFunction={() => props.addXMagnitudes(index)}/>
//     ))} </span>

//   );
// }

const MagnitudeButton = (props) => {
  const myMagnitude = props.magnitude;  
  const isHidden_addMagnitude =
    myMagnitude.totalClicks == 0 && myMagnitude.costToShowUnlock > props.totalEggs
      ? "hidden"
      : "";
 
  const isAddMagnitudeDisabled = false;
  return (
    <span className={"magnitude-option " + isHidden_addMagnitude}>
      {myMagnitude.total} <a className="magnitude-link" disabled={isAddMagnitudeDisabled} onClick={props.addMagnitudeFunction}>{myMagnitude.name}, </a>
    </span>
  );
};

const GeneratorButton = (props) => {
  const myMagnitude = props.magnitude;  
  const isHidden_addGenerator =
    myMagnitude.totalGeneratorClicks == 0 && myMagnitude.costToGenerate > props.totalEggs
      ? "hidden"
      : "";
 
  const isAddGeneratorDisabled = false;
  return (
    <span className={"generator-option " + isHidden_addGenerator}>
      {myMagnitude.total} <a className="magnitude-link" disabled={isAddGeneratorDisabled} onClick={props.addGeneratorFunction}>{myMagnitude.name}, </a>
    </span>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
