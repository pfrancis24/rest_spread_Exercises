// Rest/Spread Operator Exercises:

// Original:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// Original Refactored:

const outOdds = (...nums) => nums.filter((item) => item % 2 === 0);

// findMin:

const findMin = (...nums) => nums.reduce((num, nxt) => (nxt < num ? nxt : num));

// mergeObjects:

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// doubleAndReturnArgs:
const doubleAndReturnArgs = (arr, ...nums) => [
  ...arr,
  ...nums.map((val) => val * 2),
];

/** remove a random element in the items array
  and return a new array without that item. */

function removeRandom(items) {
  let rndm = Math.floor(Math.random() * items.length);
  return [...items.slice(0, rndm), ...items.slice(rndm + 1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

/** Return a new object with all the keys and values
  from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  console.log(newObj);
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}
