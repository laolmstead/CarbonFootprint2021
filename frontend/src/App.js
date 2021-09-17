import './App.css';

function App() {
  function generate(val) {
    for (let i=0; i<val; i++) {
      let header = document.createElement("h2");
      header.value = `Vehicle {$i}`;
      let words1 = document.createElement("p");
      words1.value = "What is the average amount of miles driven by this vehicle per week?";
      let input = document.createElement("input");
      input.type = "number";
      let words2 = document.createElement("p");
      words2.value = "How many miles does this car get to the gallon?";
      let input2 = document.createElement("input");
      input2.type = "number";
      let container = document.getElementById("parentDiv")
      container.appendChild(input);
  }}
  function generate2(val) {
    for (let i=0; i<val; i++) {
      let header = document.createElement("h2");
      header.value = `Vehicle {$i}`;
      let words1 = document.createElement("p");
      words1.value = "How many miles less will you drive this vehicle per week?";
      let input = document.createElement("input");
      input.type = "number";
      let words2 = document.createElement("p");
      words2.value = "Replace this vehicle with one that gets this many miles per gallon:";
      let input2 = document.createElement("input");
      input2.type = "number";
      let container = document.getElementById("parentDiv")
      container.appendChild(input);
  }}
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
        <h2>Current Emissions</h2>
        <p>How many vehicles do you use?</p>
        <input type="number" id="Num_Vehicles" min="0" default="0"/>
        <p>Do you perform regular maintenance on your cars?</p>
        <select name="Vehicle_Maintenance" id="Vehicle_Maintenance">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <div id="parentDiv"></div>
        <script>
          generate(document.getElementById("Num_Vehicles").value);
        </script>
        <h2>Reducing Future Emissions</h2>
        <p>Will you maintain your cars in the future?</p>
        <select name="Will_Maintain" id="Will_Maintain">
          <option value="True">Yes</option>
          <option value="False">No</option>
        </select>
        <script>
          generate2(document.getElementById("Num_Vehicles").value);
        </script>
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
}

export default App;
