import * as React from 'react';
import "./Profile.css";
import Grid from '@mui/material/Grid';

export default function Form() {

  return (     
    <body>   
    <div className="Profile">
      <form className="Profile-form" action="">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <h1>Gas Usage</h1>
        
            <p>How much natural gas does your household use per month (dollars)?</p>
                <input
                type='number'
                name='ng_usage'
                placeholder='0'
                />

                <p>How much electricity does your household use per month (dollars)?</p>
                <input
                type='number'
                name='electricity_usage'
                placeholder='0'
                />

                <p>How much fuel oil does your household use per month?</p>
                <input
                type='number'
                name='fuel_oil_usage'
                placeholder='0'
                />

                <p>How much propane does your household use per month?</p>
                <input
                type='number'
                name='pp_usage'
                placeholder='0'
                />

            <h1>Vehicles</h1>

            <h3>Car 1</h3>
            <h5>Current Emissions</h5>
            <p>What is the average amount of miles driven by this vehicle per week?</p>
            <input  type='number' placeholder="0" name="Miles_Driven_1" placeholder="0"/>
            <p>How many miles does this car get to the gallon?</p>
            <input type='number' placeholder="0" name="Miles_Per_Gallon_1" placeholder="0"/>
            <p></p>
            </Grid>
            <Grid item xs={4}>
            <h3>Car 2</h3>
            <h5>Current Emissions</h5>
            <p>What is the average amount of miles driven by this vehicle per week?</p>
            <input  type='number' placeholder="0" name="Miles_Driven_2" placeholder="0"/>
            <p>How many miles does this car get to the gallon?</p>
            <input type='number' placeholder="0" name="Miles_Per_Gallon_2" placeholder="0"/>
            <p></p>
            <h3>Car 3</h3>
            <h5>Current Emissions</h5>
            <p>What is the average amount of miles driven by this vehicle per week?</p>
            <input  type='number' placeholder="0" name="Miles_Driven_3" placeholder="0"/>
            <p>How many miles does this car get to the gallon?</p>
            <input type='number' placeholder="0" name="Miles_Per_Gallon_3" placeholder="0"/>
            <p></p>
            {/*<input type='button' value='Add Vehicle' onClick={this.addClick.bind(this)}/>*/}
            <h3>Maintenance</h3>
            <p>Do you perform regular maintenance on your cars?</p>
            <select name="Vehicle_Maintenance" id="Vehicle_Maintenance">
            <option value="True">Yes</option>
            <option value="False">No</option>
            </select>
            <div id="parentDiv"></div>

            </Grid>
            <Grid item xs={4}>
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
            </Grid>
        </Grid>
            <input type="submit"/>
            <p/>

        </form>
        <footer>
          2021 BeaverHacks Fall Hackathon
        </footer>
        
    </div>
    </body>
  );
  
}