let driver = {foo: 'bar'}

function updateDriverWithKeyAndValue(obj, key, value) {
  let new_obj = Object.assign({}, obj)
  new_obj[key] = value
  return new_obj
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromDriverByKey(obj, key) {
  let new_obj = Object.assign({}, obj)
  delete new_obj[key]
  return new_obj
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key]
  return obj
}