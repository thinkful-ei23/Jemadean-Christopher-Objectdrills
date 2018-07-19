'use strict';

const cypher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decodeWords(words) {
  let firstChar = words.charAt(0);
  let askCypherForNum = cypher[firstChar];
  return askCypherForNum !== undefined ? words[askCypherForNum] :  " ";
}

function decode(sentence) {
  let words = "";
  let wordsArr = sentence.split(" ");
  for (let i = 0; i < wordsArr.length; i++) {
    words += decodeWords(wordsArr[i]);
  }
  return words;
}
console.log(decode("craft block argon meter bells brown croon droop"));


