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
  if (item.jobTitle !== "CEO") {
    item.boss = "Elon Musk";
  }
  'boss' in item ? console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}.`) : console.log(`${item.jobTitle} ${item.name}  doesn't report to anybody.`)
});

/*****************************Below code has been refactored into above result.**********************************/

// myArr.forEach(function(item) {
//   'boss' in item ? console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}.`) : console.log(`${item.jobTitle} ${item.name}  doesn't report to anybody.`)
//   }
// );

// console.log(myArr);

// myArr.forEach(function(item) {
//   if ('boss' in item) {
//     console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}.`);
//   } 
//   else {
//     console.log(`${item.jobTitle} ${item.name}  doesn't report to anybody.`)
//   }
//   console.log(`${item.name}: ${item.jobTitle}`);
// });