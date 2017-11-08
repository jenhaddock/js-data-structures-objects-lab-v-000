// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(object, key, value){
  const newDriver = { ...driver };
 
  newDriver[key] = value;
 
  return newDriver;
}
