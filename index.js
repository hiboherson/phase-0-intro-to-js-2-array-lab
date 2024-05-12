//let cats =["milo","otis","garfield"]
//cats.length = 0;

  //cats.push("Milo", "Otis", "Garfield");


  // index.js

// index.js

//let cats = ["Milo", "Otis", "Garfield"];

//function destructivelyAppendCat(name) {
  //cats.push(name);
//}

//function destructivelyPrependCat(name) {
 // cats.unshift(name);
//}

//module.exports = {
  //destructivelyAppendCat,
  //destructivelyPrependCat
//};
// index.js

//let cats = ["Milo", "Otis", "Garfield"];

//function destructivelyAppendCat(name) {
  //cats.push(name);
//}

//function destructivelyPrependCat(name) {
  //cats.unshift(name);
//}

//function destructivelyRemoveLastCat() {
  //cats.pop();
//}

//module.exports = {
  //destructivelyAppendCat,
  //destructivelyPrependCat,
  //destructivelyRemoveLastCat
//};

// index.js

//let cats = ["Milo", "Otis", "Garfield"];

//function destructivelyAppendCat(name) {
  //cats.push(name);
//}

//function destructivelyPrependCat(name) {
  //cats.unshift(name);
//}

//function destructivelyRemoveLastCat() {
  //cats.pop();
//}

//function destructivelyRemoveFirstCat() {
  //cats.shift();
//}

//module.exports = {
  //destructivelyAppendCat,
  //destructivelyPrependCat,
  //destructivelyRemoveLastCat,
  //destructivelyRemoveFirstCat
//};
// index.js

//let cats = ["Milo", "Otis", "Garfield"];

//function destructivelyAppendCat(name) {
  //cats.push(name);
//}

//function destructivelyPrependCat(name) {
  //cats.unshift(name);
//}

//function destructivelyRemoveLastCat() {
  //cats.pop();
//}

//function destructivelyRemoveFirstCat() {
  //cats.shift();
//}

//function appendCat(name) {
  // Create a copy of the cats array and append the new cat
  //let catsCopy = cats.slice();
  //catsCopy.push(name);
  //return catsCopy;
//}

//module.exports = {
  //destructivelyAppendCat,
  //destructivelyPrependCat,
  //destructivelyRemoveLastCat,
  //destructivelyRemoveFirstCat,
  //appendCat
//};// index.js

//let cats = ["Milo", "Otis", "Garfield"];

//function destructivelyAppendCat(name) {
  //cats.push(name);
//}

//function destructivelyPrependCat(name) {
  //cats.unshift(name);
//}

//function destructivelyRemoveLastCat() {
  //cats.pop();
//}

//function destructivelyRemoveFirstCat() {
  //cats.shift();
//}

//function appendCat(name) {
  // Create a copy of the cats array and append the new cat
  //let catsCopy = cats.slice();
  //catsCopy.push(name);
  //return catsCopy;
//}

//function prependCat(name) {
  // Create a copy of the cats array and prepend the new cat
  //let catsCopy = cats.slice();
  //catsCopy.unshift(name);
  //return catsCopy;
//}

//module.exports = {
  //destructivelyAppendCat,
  //destructivelyPrependCat,
  //destructivelyRemoveLastCat,
  //destructivelyRemoveFirstCat,
  //appendCat,
  //prependCat
//};
// index.js

//let cats = ["Milo", "Otis", "Garfield"];

//function destructivelyAppendCat(name) {
  //cats.push(name);
//}

//function destructivelyPrependCat(name) {
  //cats.unshift(name);
//}

//function destructivelyRemoveLastCat() {
  //cats.pop();
//}

//function destructivelyRemoveFirstCat() {
  //cats.shift();
//}

//function appendCat(name) {
  // Create a copy of the cats array and append the new cat
  //let catsCopy = cats.slice();
  //catsCopy.push(name);
  //return catsCopy;
//}

//function prependCat(name) {
  // Create a copy of the cats array and prepend the new cat
  //let catsCopy = cats.slice();
  //catsCopy.unshift(name);
  //return catsCopy;
//}

//function removeLastCat() {
  // Create a copy of the cats array and remove the last cat
  //let catsCopy = cats.slice();
  //catsCopy.pop();
  //return catsCopy;
//}

//module.exports = {
  //destructivelyAppendCat,
 //destructivelyPrependCat,
  //destructivelyRemoveLastCat,
  //destructivelyRemoveFirstCat,
  //appendCat,
  //prependCat,
  //removeLastCat
//};
// index.js

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  
  let catsCopy = cats.slice();
  catsCopy.push(name);
  return catsCopy;
}

function prependCat(name) {
  
  let catsCopy = cats.slice();
  catsCopy.unshift(name);
  return catsCopy;
}

function removeLastCat() {
  
  let catsCopy = cats.slice();
  catsCopy.pop();
  return catsCopy;
}

function removeFirstCat() {
  
  let catsCopy = cats.slice();
  catsCopy.shift();
  return catsCopy;
}

module.exports = {
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};





