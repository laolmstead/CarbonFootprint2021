import * as React from 'react';
import { householdVehicles, naturalGas, electricity, fuel, propane } from "./carbon_calc.js"
import './App.css';
import Grid from '@mui/material/Grid';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", date:"", miles_driven: "", miles_per_gallon: "", week_or_year: "", ng_usage: "0",electricity_usage:"0", fuel_oil_usage:"0", pp_usage:"0"};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

    handleSubmit(evt){
        evt.preventDefault();
        // alert(this.state.miles_driven)

        // alert(householdVehicles(this.state.miles_driven, this.state.miles_per_gallon))
        let databody = {
            "name": "Sam",
            "date": "2021-09-18",
            "vehicleScore": householdVehicles(this.state.miles_driven, this.state.miles_per_gallon),
            "naturalGasScore": naturalGas(this.state.ng_usage),
            "electricityScore": electricity(this.state.electricity_usage),
            "fuelScore": fuel(this.state.fuel_oil_usage),
            "propaneScore": propane(this.state.pp_usage),
            "totalScore": householdVehicles(this.state.miles_driven) + naturalGas(this.state.ng_usage) 
            + electricity(this.state.electricity_usage) + fuel(this.state.fuel_oil_usage) + propane(this.state.pp_usage)
        }

        return fetch('/energy', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data)); 
    }

  render() {
    return (
      <body>
        
        <div className="App">
            <h1>Your Data</h1>
            <form onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
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
                </Grid>
                <Grid item xs={6}>
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
                <p/>
                </Grid>
                </Grid>
                <button>Submit!</button>
            </form>
        </div>
        </body>
    );
  }
}

export default Form;