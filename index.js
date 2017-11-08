// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(object, key, value){
  const newDriver = { ...object };

  newDriver[key] = value;

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key] = value;
 
  return object;
}
