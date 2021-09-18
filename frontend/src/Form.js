import React, { Component } from "react";
import { householdVehicles, naturalGas, electricity, fuel, propane } from "./carbon_calc.js"

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", miles_driven: "", miles_per_gallon: "", week_or_year: "", ng_usage: "0",electricity_usage:"0", fuel_oil_usage:"0", pp_usage:"0"};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
//   handleSubmit(evt) {
//     evt.preventDefault();
//     alert(householdVehicles(this.state.miles_driven));
//     this.setState({ username: "" });
//   }

    handleSubmit(evt){
        evt.preventDefault();



        let databody = {
            "name": this.state.name,
            "vehicleScore": householdVehicles(this.state.miles_driven),
            "naturalGasScore": naturalGas(this.state.ng_usage),
            "electricityScore": electricity(this.state.electricity_usage),
            "fuelScore": fuel(this.state.fuel_oil_usage),
            "propaneScore": propane(this.state.pp_usage)
        }

        return fetch('http://localhost:5002/stored', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data)); 
    }

  render() {
    return (
        <div>
            <h1>Your Data</h1>
            <form onSubmit={this.handleSubmit}>
                <h5>Household Vehicle</h5>
                <p>What is the average amount of miles driven by this vehicle per week?</p>
                <input
                    type='number'
                    name='miles_driven'
                    placeholder='0'
                    value={this.state.miles_driven}
                    onChange={this.handleChange}
                />
                
                <p>How many miles does this car get to the gallon?</p>
                <input
                type='number'
                name='miles_per_gallon'
                placeholder='0'
                value={this.state.miles_per_gallon}
                onChange={this.handleChange}
                />

                <h5>Home Energy</h5>  
                               
                <p>How much natural gas does your household use per month (dollars)?</p>
                <input
                type='number'
                name='ng_usage'
                placeholder='0'
                value={this.state.ng_usage}
                onChange={this.handleChange}
                />

                <p>How much electricity does your household use per month (dollars)?</p>
                <input
                type='number'
                name='electricity_usage'
                placeholder='0'
                value={this.state.electricity_usage}
                onChange={this.handleChange}
                />

                <p>How much fuel oil does your household use per month (dollars)?</p>
                <input
                type='number'
                name='fuel_oil_usage'
                placeholder='0'
                value={this.state.fuel_oil_usage}
                onChange={this.handleChange}
                />

                <p>How much propane does your household use per month (dollars)?</p>
                <input
                type='number'
                name='pp_usage'
                placeholder='0'
                value={this.state.pp_usage}
                onChange={this.handleChange}
                />

                <button>Submit!</button>
            </form>
        </div>
    );
  }
}

export default Form;
