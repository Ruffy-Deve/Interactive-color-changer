//Reverse a string 

funtion reverseString(str) {
    return str.split('').reverse().join('');
}

//count characters 
 function countCharacters(str) {
    return str.length;
 }

 //Capiitalize Words
 function capitalizeWords(sentence) {
    return sentence 
    .split('')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
 }

 //Find Maximum and Minimnun
 function findMax(arr) {
    return Math.max(...arr);
 }
 
 function findMin(arr) {
    return Math.min(...arr);
 }

 //Sum of an Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


//Filter Array
funtion filterArray(arr, conditionFn) {
    return arr.filter(conditionFn)
}
 
//Math Functions


//Factorial
function factorial(n) {
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;

}
//Prime Number Check 
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

//Fibonacci Seqquence 
function fibonacciSequence(n) {
  const sequence = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}

