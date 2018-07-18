'use strict';
const myArr = [
  {
    name: 'Jem',
    jobTitle: 'Pro programmer'
  },
  {
    name: 'Frodo',
    jobTitle: 'Ring Destroyer'
  },
  {
    name: 'DarthVader',
    jobTitle: 'Rebel defeater'
  },
  {
    name: 'Elon Musk',
    jobTitle: 'CEO'
  }
];

myArr.forEach(function(item) {
  console.log(`${item.name}: ${item.jobTitle}`);
});


