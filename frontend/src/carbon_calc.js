// This file drives the calculations from user input to determine a carbon footprint. Source for calculations is the EPA website

// const { Code } = require("mongodb")

function calculateFootprint(){
    // return total score
    let totalEmissions = 100//hhVehiclesEstimate + ngScore + fuelScore + elecScore + propaneScore + totalAfterRecylcing
}
// Household vehicles
export function householdVehicles(vehicleMilesDriven){

    var MILES_PER_GALLON = 21.6; // constant defined by the EPA
    var weekOrYear = 1 // or 2
    var NON_CO2_VEHICLE_EMISSIONS_RATIO = 1.01
    var EF_PASSENGER_VEHICLE = 19.6

    let vehicleScore = (vehicleMilesDriven * 52 / MILES_PER_GALLON) * EF_PASSENGER_VEHICLE * NON_CO2_VEHICLE_EMISSIONS_RATIO;
    return vehicleScore    
}


// Natural Gas
export function naturalGas(NATURAL_GAS_USAGE){
    const NATURAL_GAS_UNITS = 1 // 2, or 3
    const NATURAL_GAS_COST_1000CF = 10.68 // dollars / 1000 cubic feet
    const EF_NATURAL_GAS = 119.58 // lbs CO2 / 1000 cubic feet of natural gas
    const EF_NATURAL_GAS_THERM = 11.7 // lbs CO2 / therm natural gas

    var ngScore = NATURAL_GAS_USAGE / NATURAL_GAS_COST_1000CF * EF_NATURAL_GAS * 12
}
 
// Electricity
export function electricity(ELECTRICITY_USAGE){    
    const ELECTRICITY_UNITS = 1 // 2
    const COST_PER_KWH = 0.1188 // $ / kwh
    const e_FACTOR_VALUE = 1// based on zip code... need a table to look that up. Values are in the spreadsheet
    let elecScore = (ELECTRICITY_USAGE / COST_PER_KWH) * e_FACTOR_VALUE * 12
}

//Fuel Oil
export function fuel(FUEL_USAGE){
    const FUEL_UNITS = 1 // 2
    const FUEL_OIL_COST = 4.02 // $ per gallon
    const EF_FUEL_OIL_GALLON = 22.61  // lbs CO2 / gallon of fuel oil

    let fuelScore = (FUEL_USAGE / FUEL_OIL_COST) * EF_FUEL_OIL_GALLON * 12
}

//Propane
export function propane(PROPANE_USAGE){
    const PROPANE_UNITS = 1 // 2
    const PROPANE_COST = 2.47 // $ per gallon
    const EF_PROPANE = 12.43  // lbs CO2 / gallon of fuel oil
 
    let propaneScore = (PROPANE_USAGE / PROPANE_COST) * EF_PROPANE * 12
}

// Waste
export function waste(recycleMetal, recyclePlastic, recycleGlass, recycleNewspaper, recycleMagazine){
    const AVERAGE_WASTE_EMISSIONS = 692 // lbs CO2e / year / person from waste
    const METAL_RECYCLING_AVOIDED_EMISSIONS = -89.38
    const PLASTIC_RECYCLING_AVOIDED_EMISSIONS = -35.56
    const GLASS_RECYCLING_AVOIDED_EMISSIONS = -25.39
    const NEWSPAPER_RECYCLING_AVOIDED_EMISSIONS = -113.14
    const MAG_RECYCLING_AVOIDED_EMISSIONS = -27.46

    const householdSize = 2

    let lbsFromWaste = householdSize * AVERAGE_WASTE_EMISSIONS


    if (recycleMetal == 1){
        let savedByMetal = householdSize * METAL_RECYCLING_AVOIDED_EMISSIONS
    }
    if (recyclePlastic == 1){
        let savedByPlastic = householdSize * PLASTIC_RECYCLING_AVOIDED_EMISSIONS
    }
    if (recycleGlass == 1){
        let savedByGlass = householdSize * GLASS_RECYCLING_AVOIDED_EMISSIONS
    }
    if (recycleNewspaper == 1){
        let savedByNewspaper = householdSize * NEWSPAPER_RECYCLING_AVOIDED_EMISSIONS
    }
    if (recycleMagazine == 1){
        let savedByMag = householdSize * MAG_RECYCLING_AVOIDED_EMISSIONS
    }
    // let totalAfterRecylcing = lbsFromWaste + savedByMetal + savedByPlastic + savedByGlass + savedByNewspaper + savedByMag
    // return totalAfterRecylcing
}

// totalAfterRecylcing = lbsFromWaste + savedByMetal + savedByPlastic + savedByGlass + savedByNewspaper + savedByMag


