//Sample sentence
let sentence = "The quick brown fox jumps over a lazy dog."

//initialize counters
let lengthCounter = 0;
let wordCounter = 0;
let vowelCounter = 0;

//Define Vowels
const vowels = ['a', 'e', 'i', 'o', 'u']


let prevChar = '';

  //The length of the sentence
for (let i = 0; i< sentence.length;i++) {
     let char = sentence[i];
     lengthCounter++;
}      

//The number of word in the sentence 
if ((i === 0 && char !== '') || (char !== '' && prevChar === '')) {
    wordCounter++;
}

//The number of vowel in the sentence
if (vowels.includes(char.toLowercase())) {
    vowelCounter++;
}


prevChar = char;

//output the results

console.log("Sentence:", sentence);
console.log("Length of the sentence:", lengthCounter);
console.log("Number of words:", wordCounter);
console.log("Number of vowels:", vowelCounter);