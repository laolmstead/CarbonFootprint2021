import React, { useEffect } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mpg1: [{Miles_Driven: "", Miles_Per_Gallon: "", Will_Drive: "", Will_MPG: ""}]
    };
  }

  // The function for the button that adds more cars to the form
  addClick(){
    this.setState(prevState => ({
      mpg1: [...prevState.mpg1, { Miles_Driven: "", Miles_Per_Gallon: "", Will_Drive: "", Will_MPG: ""}]
    }))
  }

  // The function that creates the HTML for the Vehicles section
  createUI(){
    return this.state.mpg1.map((el, i) => (
      <div key={i+1}>
        <h3>Car {i+1}</h3>
        <h5>Current Emissions</h5>
        <p>What is the average amount of miles driven by this vehicle per week?</p>
        <input placeholder="0" name="Miles_Driven" value={el.Miles_Driven||''} onChange={this.handleChange.bind(this, i)} />
        <p>How many miles does this car get to the gallon?</p>
        <input placeholder="0" name="Miles_Per_Gallon" value={el.Miles_Per_Gallon||''} onChange={this.handleChange.bind(this, i)} />
        <h5>Reducing Future Emissions</h5>
        <p>How many fewer miles will you drive per week?</p>
        <input placeholder="0" name="Will_Drive" value={el.Will_Drive||''} onChange={this.handleChange.bind(this, i)} />
        <p>Replace this vehicle with one that gets this many miles per gallon:</p>
        <input placeholder="0" name="Will_MPG" value={el.Will_MPG||''} onChange={this.handleChange.bind(this, i)} />
        <p></p>
        <input type='button' value='Remove Vehicle' onClick={this.removeClick.bind(this, i)}/>
      </div>
    ))
  }

  // Code for the "Remove" button in Vehicles
  removeClick(i){
    let mpg1 = [...this.state.mpg1];
    mpg1.splice(i, 1);
    this.setState({ mpg1 })
  }

  // Handler for... actually I'm not sure what this is for
  handleChange(i, e) {
    const { name, value } = e.target;
    let mpg1 = [...this.state.mpg1];
    mpg1[i] = {...mpg1[i], [name]: value};
    this.setState({ mpg1 })
  }

  // The remainder of the HTML
  render() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Gas Usage</h1>

        <h2>Current Emissions</h2>
        <form action="">
        <p>Household's Primary Heating Source:</p>
        <select name="Type_Heating" id="Type_Heating">
          <option value="Natural_Gas">Natural Gas</option>
          <option value="Electricity">Electricity</option>
          <option value="Fuel_Oil">Fuel Oil</option>
          <option value="Propane">Propane</option>
        </select>
        <p>How much does your usage cost per month?</p>
        $<input type="number" id="Fuel_Use" name="Fuel_Use" min="0" default="0"/>

        <h2>Reducing Future Emissions</h2>
        <p>By how many degrees will you turn up your AC in the summertime?</p>
        <input type="number" id="Up_Thermo_Summer" name="Up_Thermo_Summer" default="0"/>°F
        <p>By how many degrees will you turn down your AC in the wintertime?</p>
        <input type="number" id="Down_Thermo_Winter" name="Down_Thermo_Winter" default="0"/>°F
        <p>How many lightbulbs will you replace with ENERGY STAR lightbulbs?</p>
        <input type="number" id="Lightbulbs_Replaced" name="Lightbulbs_Replaced" default="0"/> lightbulbs
        <p>Will you set your computer to Power Management mode?</p>
        <select name="Computer_Power_Management" id="Computer_Power_Management">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>How much will you increase your household Green Power usage by?</p>
        <input type="number" id="Increase_Green_Power" min="0" max="100" default="0"/>%
        <p>Will you use cold water to wash your clothes?</p>
        <select name="Cold_Water_Wash_Clothes" id="Cold_Water_Wash_Clothes">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>How many loads of laundry do you wash?</p>
        <input type="number" id="Loads_Laundry" min="0" default="0"/> loads per week
        <p>For the following, select yes or no. If you already have ENERGY STAR products, select yes.</p>
        <p>Will you replace your fridge with an ENERGY STAR fridge?</p>
        <select name="Energy_Star_Fridge" id="Energy_Star_Fridge">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>Will you replace your boiler or furnace with an ENERGY STAR product?</p>
        <select name="Energy_Star_Boiler_Furnace" id="Energy_Star_Boiler_Furnace">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>Will you replace your windows with ENERGY STAR windows?</p>
        <select name="Energy_Star_Windows" id="Energy_Star_Windows">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>

        <h1>Vehicles</h1>

        {this.createUI()}
        <input type='button' value='Add Vehicle' onClick={this.addClick.bind(this)}/>
        <h3>Maintenance</h3>
        <p>Do you perform regular maintenance on your cars?</p>
        <select name="Vehicle_Maintenance" id="Vehicle_Maintenance">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <div id="parentDiv"></div>

        <h2>Reducing Future Emissions</h2>
        <p>Will you maintain your cars in the future?</p>
        <select name="Will_Maintain" id="Will_Maintain">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>

        <h1>Waste</h1>

        <h2>Current Emissions</h2>
        <p>Do you currently recycle aluminum and metal cans?</p>
        <select name="Recycle_Aluminum_Cans" id="Recycle_Aluminum_Cans">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>Do you currently recycle plastic?</p>
        <select name="Recycle_Plastic" id="Recycle_Plastic">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>Do you currently recycle glass?</p>
        <select name="Recycle_Glass" id="Recycle_Glass">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>Do you currently recycle newspaper?</p>
        <select name="Recycle_Newspaper" id="Recycle_Newspaper">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>Do you currently recycle magazines?</p>
        <select name="Recycle_Magazines" id="Recycle_Magazines">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>

        <h2>Reducing Future Emissions</h2>
        <p>Will you recycle aluminum and metal cans?</p>
        <select name="Will_Recycle_Aluminum_Cans" id="Will_Recycle_Aluminum_Cans">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>Will you recycle plastic?</p>
        <select name="Will_Recycle_Plastic" id="Will_Recycle_Plastic">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>Will you recycle glass?</p>
        <select name="Will_Recycle_Glass" id="Will_Recycle_Glass">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>Will you recycle newspaper?</p>
        <select name="Will_Recycle_Newspaper" id="Will_Recycle_Newspaper">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p>Will you recycle magazines?</p>
        <select name="Will_Recycle_Magazines" id="Will_Recycle_Magazines">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <p/>
        <input type="submit"/>
        <p/>
        </form>
        <footer>
          2021 BeaverHacks Fall Hackathon
        </footer>
      </header>
    </div>
  );
}}

export default App;
