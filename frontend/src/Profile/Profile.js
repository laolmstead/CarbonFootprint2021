import * as React from 'react';
import "./Profile.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

let drawerWidth = 240;

export default function Form() {

  return (        
    <div className="Profile">
      <header className="Profile-header">
      <CssBaseline />
        <AppBar
              position="fixed"
              sx={{ width: `calc(100%)`, ml: `${drawerWidth}px` }}
            >
              <Toolbar>
                <Typography variant="h6" noWrap component="div">
                  Profile Information
                </Typography>
              </Toolbar>
            </AppBar>
        </header>
        <body>
        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 6 }}
        >
        <h1>Gas Usage</h1>
        <form className="Profile-form" action="">
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
        </Box>
      </body>
    </div>
  );
  
}