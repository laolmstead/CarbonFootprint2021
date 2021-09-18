// This file drives the calculations from user input to determine a carbon footprint. Source for calculations is the EPA website

const { Code } = require("mongodb")

// Household vehicles
vehicleMilesDriven = req.body.Miles_Driven
MILES_PER_GALLON = req.body.Miles_Per_Gallon // 21.6 // constant defined by the EPA
weekOrYear = 1 // or 2
NON_CO2_VEHICLE_EMISSIONS_RATIO = 1.01
EF_PASSENGER_VEHICLE = 19.6



if (weekOrYear == 1){ //weekly value
    LBS_PER_YEAR = (vehicleMilesDriven * 52) * EF_PASSENGER_VEHICLE * NON_CO2_VEHICLE_EMISSIONS_RATIO;
    hhVehiclesEstimate = (vehicleMilesDriven * 52) / MILES_PER_GALLON * NON_CO2_VEHICLE_EMISSIONS_RATIO + LBS_PER_YEAR;
}
else { // annual value
    LBS_PER_YEAR = vehicleMilesDriven * EF_PASSENGER_VEHICLE * NON_CO2_VEHICLE_EMISSIONS_RATIO;
    hhVehiclesEstimate = vehicleMilesDriven / MILES_PER_GALLON * NON_CO2_VEHICLE_EMISSIONS_RATIO + LBS_PER_YEAR;
}

// Home Energy

// Natural Gas
NATURAL_GAS_USAGE = user input
NATURAL_GAS_UNITS = 1 // 2, or 3
NATURAL_GAS_COST_1000CF = 10.68 // dollars / 1000 cubic feet
EF_NATURAL_GAS = 119.58 // lbs CO2 / 1000 cubic feet of natural gas
EF_NATURAL_GAS_THERM = 11.7 // lbs CO2 / therm natural gas

if (NATURAL_GAS_UNITS == 1){
    ngScore = NATURAL_GAS_USAGE / NATURAL_GAS_COST_1000CF * EF_NATURAL_GAS * 12
}
else if (NATURAL_GAS_UNITS == 2){
    ngScore = NATURAL_GAS_USAGE * EF_NATURAL_GAS * 12
}
else if (NATURAL_GAS_UNITS == 3){
    ngScore = NATURAL_GAS_USAGE * EF_NATURAL_GAS_THERM * 12
}

 
// Electricity
ELECTRICITY_USAGE = user input
ELECTRICITY_UNITS = 1 // 2
COST_PER_KWH = 0.1188 // $ / kwh
e_FACTOR_VALUE = based on zip code... need a table to look that up. Values are in the spreadsheet

if (ELECTRICITY_UNITS == 1){
    elecScore = (ELECTRICITY_USAGE / COST_PER_KWH) * e_FACTOR_VALUE * 12
}
else if (ELECTRICITY_UNITS == 2){
    elecScore = ELECTRICITY_USAGE * e_FACTOR_VALUE * 12
}

percentGreen = user input

//Fuel Oil
FUEL_USAGE = user input
FUEL_UNITS = 1 // 2
FUEL_OIL_COST = 4.02 // $ per gallon
EF_FUEL_OIL_GALLON = 22.61  // lbs CO2 / gallon of fuel oil

if (FUEL_UNITS == 1){
    fuelScore = (FUEL_USAGE / FUEL_OIL_COST) * EF_FUEL_OIL_GALLON * 12
}
else if (FUEL_UNITS == 2){
    fuelScore = FUEL_USAGE * EF_FUEL_OIL_GALLON * 12
}

//Propane
PROPANE_USAGE = user input
PROPANE_UNITS = 1 // 2
PROPANE_COST = 4.02 // $ per gallon
EF_PROPANE = 22.61  // lbs CO2 / gallon of fuel oil

if (PROPANE_UNITS == 1){
    propaneScore = (PROPANE_USAGE / PROPANE_COST) * EF_PROPANE * 12
}
else if (PROPANE_UNITS == 2){
    propaneScore =  PROPANE_USAGE * EF_PROPANE * 12
}

// Waste
AVERAGE_WASTE_EMISSIONS = 692 // lbs CO2e / year / person from waste
METAL_RECYCLING_AVOIDED_EMISSIONS = -89.38
PLASTIC_RECYCLING_AVOIDED_EMISSIONS = -35.56
GLASS_RECYCLING_AVOIDED_EMISSIONS = -25.39
NEWSPAPER_RECYCLING_AVOIDED_EMISSIONS = -113.14
MAG_RECYCLING_AVOIDED_EMISSIONS = -27.46

householdSize = userinput

lbsFromWaste = householdSize * AVERAGE_WASTE_EMISSIONS

recycleMetal = from form
recyclePlastic = from form
recycleGlass = from form
recycleNewspaper = from form
recycleMagazine = from form

if (recycleMetal == 1){
    savedByMetal = householdSize * METAL_RECYCLING_AVOIDED_EMISSIONS
}
if (recyclePlastic == 1){
    savedByPlastic = householdSize * PLASTIC_RECYCLING_AVOIDED_EMISSIONS
}
if (recycleGlass == 1){
    savedByGlass = householdSize * GLASS_RECYCLING_AVOIDED_EMISSIONS
}
if (recycleNewspaper == 1){
    savedByNewspaper = householdSize * NEWSPAPER_RECYCLING_AVOIDED_EMISSIONS
}
if (recycleMag == 1){
    savedByMag = householdSize * MAG_RECYCLING_AVOIDED_EMISSIONS
}

totalEmissions = lbsFromWaste + savedByMetal + savedByPlastic + savedByGlass + savedByNewspaper + savedByMag

