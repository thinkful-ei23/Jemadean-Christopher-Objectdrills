// Create an object with five properties: foo, bar, fum, 
// quux, and spam. Give each property a unique value of your
// choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its 
// associated value.

'use strict';
const myObj = { 
  foo: 1,
  bar: 'two',
  fum: 'fi',
  quux: 3,
  spam: function() {
    console.log(`Don't spam me`);
  }
};
for (let key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
}



