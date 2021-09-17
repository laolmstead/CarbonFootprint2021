import React, { useEffect } from 'react';
import './App.css';
import SideBar from './Components/SideBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mpg1: [{Miles_Driven: "", Miles_Per_Gallon: ""}]
    };
  }

  // The function for the button that adds more cars to the form
  addClick(){
    this.setState(prevState => ({
      mpg1: [...prevState.mpg1, { Miles_Driven: "", Miles_Per_Gallon: ""}]
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

  // Change handler
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
      <SideBar/>
      <header className="App-header">
        <h1>Gas Usage</h1>
        <form action="">
        <p>Household's Primary Heating Source:</p>
        <select name="Type_Heating" id="Type_Heating">
          <option value="Natural_Gas">Natural Gas</option>
          <option value="Electricity">Electricity</option>
          <option value="Fuel_Oil">Fuel Oil</option>
          <option value="Propane">Propane</option>
        </select>
        <p>How much does your usage cost per month?</p>
        $<input type="number" id="Fuel_Use" name="Fuel_Use" min="0" placeholder="0"/>

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
