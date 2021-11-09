import { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      intervalAmount: 1000,
      totalPoints: 0,
      totalHelpers_1: 0,
    };
  }

  componentDidMount() {
    // set interval
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    console.log("tick! helpers add: " + this.state.totalHelpers_1);
    // helper (tier 1)
    if (this.state.totalHelpers_1 > 0) {
      let addend = this.state.totalHelpers_1;
      this.setState({ totalPoints: this.state.totalPoints + addend });
    }
  }

  incrementTotalPoints() {
    console.log(this.state.totalPoints);
    this.setState({ totalPoints: this.state.totalPoints + 1 });
  }

  incrementTotalHelpers_1() {
    this.setState({ totalHelpers_1: this.state.totalHelpers_1 + 1 });
  }

  render() {
    return (
      <div className="main">
      <header>Stu&apos;s Egg Mistake</header>
        <div>
        <span className="value-label">
        Eggs: {this.state.totalPoints}  
        </span>
        <button className="value-button" onClick={() => this.incrementTotalPoints()}>+1 Egg</button></div> 
        <div>
        <span className="value-label">Helpers: {this.state.totalHelpers_1}</span>
          <button className="value-button" onClick={() => this.incrementTotalHelpers_1()}>
            +1 Helpers (Tier 1)
          </button>
        </div>
        <div className="buttons">
         
          
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
