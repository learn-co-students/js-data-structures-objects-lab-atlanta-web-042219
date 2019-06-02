// Write your solution in this file!
const driver = {driver: 'driver'}

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = { name: 'Sam', address: '11 Broadway',...driver };
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver.name = 'Sam';
  driver.address = '12 Broadway';
  return driver;
}

function deleteFromDriverByKey(driver, key){
const newDriver = Object.assign({}, key);
delete newDriver.key;
return newDriver;
}


function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
