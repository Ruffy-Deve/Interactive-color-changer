    let sum = 0

    //function to check if an element exists in an array
    function contains(arr, val) {
    return arr.indexOf(val) !== -1;
    }

     // Add elements from set1 that are NOT in set2
  for (let i = 0; i < set1.length; i++) {
    if (!contains(set2, set1[i])) {
      sum += set1[i];
    }
  }

  // Add elements from set2 that are NOT in set1
  for (let i = 0; i < set2.length; i++) {
    if (!contains(set1, set2[i])) {
      sum += set2[i];
    }
  }

  return sum;


// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
console.log("Sum of distinct elements:", sumDistinctElements(set1, set2)); // Output: 13


//modifies ps by preference simulation using object

function dotProductProcedure(v1, v2, psObj) {
    let sum = 0
    for(let i = 0; i < v1.length; i++ ) {
        sum += v1[i] * v2[i];
    }
    psObj.value = sum;
}

//function returns the dot product
function dotProductFunction(v1, v2) {
    let sum = 0
    for(let i = 0; i < v1.length; i++ ) {
        sum += v1[i] * v2[i];
    }

    return sum;
}

// Check orthogonality with procedure
function checkOrthogonalProcedure(v1, v2) {
  const psObj = { value: 0 };
  dotProductProcedure(v1, v2, psObj);
  if (psObj.value === 0) {
    console.log("Vectors are orthogonal");
  } else {
    console.log("Vectors are not orthogonal");
  }
}

// Check orthogonality with function
function checkOrthogonalFunction(v1, v2) {
  const ps = dotProductFunction(v1, v2);
  if (ps === 0) {
    console.log("Vectors are orthogonal");
  } else {
    console.log("Vectors are not orthogonal");
  }
}

// Example vectors:
const vector1 = [1, 2, -1];
const vector2 = [2, -1, 0];

checkOrthogonalProcedure(vector1, vector2);  // Output: Vectors are not orthogonal
checkOrthogonalFunction(vector1, vector2);   // Output: Vectors are not orthogonal

// Orthogonal example:
const orthogonalVector1 = [1, 0];
const orthogonalVector2 = [0, 5];

checkOrthogonalProcedure(orthogonalVector1, orthogonalVector2);  // Output: Vectors are orthogonal
checkOrthogonalFunction(orthogonalVector1, orthogonalVector2);   // Output: Vectors are orthogonal