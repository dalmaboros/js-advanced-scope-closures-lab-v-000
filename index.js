function produceDrivingRange(permittedRange) {
  return function isWithinRange(start, finish) {
    const distance = Math.abs(parseInt(start)-parseInt(finish));
    if(distance > permittedRange) {
      return `${distance-permittedRange} blocks out of range`;
    } else {
      return `within range by ${permittedRange-distance}`;
    }
  };
};

function produceTipCalculator(tipPercentage) {
  return function tipOnFare(fare) {
    return fare*tipPercentage;
  };
};

function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
