const { getFinalMeasurements } = require('./lib');

console.log(JSON.stringify(getFinalMeasurements(JSON.parse(process.argv[2]))));
