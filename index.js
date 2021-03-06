// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  // const newDriver = {...driver}
  // newDriver[key] = value
  // return newDriver
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  // let newDriver = {...driver}
  // delete newDriver[key]
  // return newDriver
  const updatedDriver = Object.assign({}, driver);
  delete updatedDriver[key]
  return updatedDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}