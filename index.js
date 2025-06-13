// Code your solution in this file!
// 1. Return First Two Drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return Last Two Drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Selecting Drivers Array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Create Fare Multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Fare Doubler
const fareDoubler = createFareMultiplier(2);

// 6. Fare Tripler
const fareTripler = createFareMultiplier(3);

// 7. Select Different Drivers
function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}
