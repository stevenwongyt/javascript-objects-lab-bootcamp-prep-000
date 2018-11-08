var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var recipesCopy = Object.assign({}, obj)
  recipesCopy[key]=value
  return recipesCopy
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key) {
  var recipesCopy = Object.assign({}, object)
  delete recipesCopy[key]
  return recipesCopy
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete obj[key]
  return object
}
