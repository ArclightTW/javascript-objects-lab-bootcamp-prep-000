var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(recipes, object)
  recipes[key] = value
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}