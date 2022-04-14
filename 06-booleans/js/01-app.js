'use strict';

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";



console.log(boolean1);
console.log(boolean2);


console.log(typeof boolean1); // Boolean
console.log(typeof boolean2); // Boolean
console.log(typeof boolean3);

console.log(boolean1 == boolean3); // False


const boolean4 = new Boolean(true); // Constructor
console.log(typeof boolean4); // Object