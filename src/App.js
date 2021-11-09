import { Component } from "react";
import ReactDOM from "react-dom";

import EggGenerator from "./EggGenerator";

import StuMemeImage_680 from "./img/template-680.png";
import StuMemeImage_401 from "./img/template-401.png";
import StuMemeImage_328 from "./img/template-328.png"; 


const NUM_ENABLE_EGG_GENERATOR = 12;
const NUM_ENABLE_CARTON_GENERATOR = 144;
const NUM_ENABLE_GROSS_GENERATOR = 2076;




class App extends Component {
  constructor() {
    super();
    this.state = {
      eggs: 1223,
      click_amount: 1,
      click_upgrade_1: false,
      click_upgrade_2: false,
      click_upgrade_3: false,
      enable_egg_generator: false,
      egg_generators: 0,
      enable_carton_generator: false,
      carton_generators: 0,
      enable_gross_generator: false,
      gross_generators: 0,
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
    // helper (tier 1)
    if (this.state.egg_generators > 0) {
      let addend = this.state.egg_generators;
      this.setState({ eggs: this.state.eggs + addend });
    }

    if (
      !this.state.enable_egg_generator &&
      this.state.eggs >= NUM_ENABLE_EGG_GENERATOR
    ) {
      this.setState({ enable_egg_generator: true });
    }

    if (
      !this.state.enable_carton_generator &&
      this.state.eggs >= NUM_ENABLE_CARTON_GENERATOR
    ) {
      this.setState({ enable_carton_generator: true });
    }

    if (
      !this.state.enable_gross_generator &&
      this.state.eggs >= NUM_ENABLE_GROSS_GENERATOR
    ) {
      this.setState({ enable_gross_generator: true });
    }
  }

  incrementEggs() {
    this.setState({ eggs: this.state.eggs + this.state.click_amount });
  }

  incrementEggGenerators() {
    if (this.state.eggs >= NUM_ENABLE_EGG_GENERATOR) {
      this.setState({
        egg_generators: this.state.egg_generators + 1,
        eggs: this.state.eggs - NUM_ENABLE_EGG_GENERATOR,
      });
    }
  }
  incrementCartonGenerators() {
    if (this.state.eggs >= NUM_ENABLE_CARTON_GENERATOR) {
      this.setState({
        carton_generators: this.state.carton_generators + 1,
        eggs: this.state.eggs - NUM_ENABLE_CARTON_GENERATOR,
      });
    }
  }

  incrementGrossGenerators() {
    if (this.state.eggs >= NUM_ENABLE_GROSS_GENERATOR) {
      this.setState({
        gross_generators: this.state.carton_generators + 1,
        eggs: this.state.eggs - NUM_ENABLE_GROSS_GENERATOR,
      });
    }
  }

  render() {
    return ( 
      <div className="main">
        <section className="hero"> 
        <figure className="txtover">
          <picture>
              <source srcSet={StuMemeImage_680} media="(min-width: 401px)" /> 
              <source srcSet={StuMemeImage_401} media="(min-width: 328px)" />  
              <img 
                src={StuMemeImage_328} alt="Stu thats x eggs! Meme image"
              /> 
            </picture>
            <figcaption className="caption-1">Sure you got enough eggs?</figcaption> 
            <figcaption className="caption-2">Yeah I got a gross</figcaption> 
            <figcaption className="caption-3">A gross?</figcaption> 
            <figcaption className="caption-4">Thats 144 eggs!</figcaption> 
            <figcaption className="caption-5">Oops.</figcaption> 
            </figure>
        </section> 
        <hr />
        <section className="egg-actions">
        <div>
          <button className="value-button" onClick={() => this.incrementEggs()}>
            Buy Egg
          </button>
          <span className="value-label">{this.state.eggs}</span>
        </div>

        <EggGenerator
          isEnabled={this.state.enable_egg_generator}
          myCost={NUM_ENABLE_EGG_GENERATOR}
          myTotal={this.state.egg_generators}
          myIncrementAmount={1}
          myCallBack={() => this.incrementEggGenerators()}
          myEggTotal={this.state.eggs}
        />

        <hr />
        <EggGenerator
          isEnabled={this.state.enable_carton_generator}
          myCost={NUM_ENABLE_CARTON_GENERATOR}
          myTotal={this.state.carton_generators}
          myIncrementAmount={12}
          myCallBack={() => this.incrementCartonGenerators()}
          myEggTotal={this.state.eggs}
        />
        <hr />
        <EggGenerator
          isEnabled={this.state.enable_gross_generator}
          myCost={NUM_ENABLE_GROSS_GENERATOR}
          myTotal={this.state.gross_generators}
          myIncrementAmount={144}
          myCallBack={() => this.incrementGrossGenerators()}
          myEggTotal={this.state.eggs}
        /> 
      </section>
      </div> 
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
