// Iteration #1: Find the maximum
function maxOfTwoNumbers() {
  let number1 = 10;
  let number2 = 1;

  if(number1>number2){
    return `The bigger number is ${number1}`;
  }else if(number1<number2){
    return `The bigger number is ${number2}`;
  }return `Both numbers are the same!`
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

var wordLength = 0;
var longest;

function findLongestWord(words) {
  words.forEach(function(words) {
      if (words.length > wordLength) {
          wordLength = words.length;
          longest = words;
      }
  });
  return longest;
}


var longest = findLongestWord(words);
console.log(longest);





/* Iteration #3: Calculate the sum
 Iteration #3.1: Sum numbers
Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course, we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice the "declarative" way of adding values, using loops.

You can use the following array to test your solution: */

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {
  var sum = 0;
  numbers.forEach(function(array){
    sum += array;
  });
  return sum;
}



/* Bonus - Iteration #3.2: A generic sum() function
The goal: Learn how to refactor your code. 💪

In iteration 3, you created a function that returns the sum of an array of numbers. But what if we wanted to know what was the sum of the length of all of the words in an array? What if we wanted to add boolean values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to tweak it a little bit so that it can be reused no matter what is in the array that is passed as an argument when function sumNumbers() is called.

Here we are applying a concept we call polymorphism, that is, dealing with a function's input independently of the types they are passed as.

Let's implement the function sum() that calculates the sum for an array filled with (almost) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

You can use the following array to test your solution: */

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(){
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      total += arr[i].length;
    } else if (typeof arr[i] === 'boolean') {
      total += arr[i] ? 1 : 0;
    } else if (typeof arr[i] === 'number') {
      total += arr[i];
    }
  }
  return total;
}

console.log(sum(mixedArr));
  



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const avg = sum / numbers.length;
  return avg;
}

console.log(averageNumbers([2, 6, 9, 10, 7, 4, 1, 9]));



// Level 2: Array of strings

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) { 
  const sum = words.map(word => word.length).reduce((acc, val) => acc + val, 0);
  const avg = sum / words.length;
  return avg;
} 
console.log(averageWordLength(['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace']))

// Bonus - Iteration #4.1
/* Create function avg(arr) that receives any mixed array and calculates the average. Consider as a mixed array an array filled with numbers and/or strings and/or booleans.

The non-numerical values should be counted as follows:

Booleans: true counts as 1 and false counts as 0.
Strings: use the string length as the numeric value. */
/* const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
 */

function avg(arr) {
  // Initialize a variable to store the sum of the elements
  let sum = 0;
  // Initialize a variable to store the number of elements
  let count = 0;
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the element is a number
    if (typeof arr[i] === 'number') {
      // Add the element to the sum
      sum += arr[i];
      // Increase the count of elements
      count++;
    }
    // Check if the element is a string
    else if (typeof arr[i] === 'string') {
      // Add the length of the string to the sum
      sum += arr[i].length;
      // Increase the count of elements
      count++;
    }
    // Check if the element is a boolean
    else if (typeof arr[i] === 'boolean') {
      // Add 1 for true or 0 for false
      sum += arr[i] ? 1 : 0;
      // Increase the count of elements
      count++;
    }
  }
  // Return the average
  return count > 0 ? sum / count : 'array is empty or only contains non-numerical values';
}

console.log(avg([6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]));


// Iteration #5: Unique arrays

function uniquifyArray(arr) {
  // Create an empty array to store the unique elements
  const uniqueArr = [];
  // Iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is not already in the unique array
    if (!uniqueArr.includes(arr[i])) {
      // If it's not, add it to the unique array
      uniqueArr.push(arr[i]);
    }
  }
  // Return the unique array
  return uniqueArr;
}
console.log(uniquifyArray(['crab', 'poison', 'contagious', 'simple', 'bring', 'sharp', 'playground', 'poison', 'communion', 'simple', 'bring']));




// Iteration #6: Find elements

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  return arr.includes(word);
}
console.log(doesWordExist(['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'], 'machine')); // true
console.log(doesWordExist(['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'], 'apple')); // false




// Iteration #7: Count repetition
function howManyTimes(word) {
  const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  let count = 0;
  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] === word) {
      count++;
    }
  }
  return count;
}
console.log(howManyTimes('matter'));





// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  let maxProduct = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i < matrix.length - 3) { // check for horizontal product
        let horizontalProduct = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j] * matrix[i+3][j];
        maxProduct = Math.max(maxProduct, horizontalProduct);
      }
      if (j < matrix[i].length - 3) { // check for vertical product
        let verticalProduct = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2] * matrix[i][j+3];
        maxProduct = Math.max(maxProduct, verticalProduct);
      }
      if (i < matrix.length - 3 && j < matrix[i].length - 3) { // check for diagonal product (going from top-left to bottom-right)
        let diagonalProduct = matrix[i][j] * matrix[i+1][j+1] * matrix[i+2][j+2] * matrix[i+3][j+3];
        maxProduct = Math.max(maxProduct, diagonalProduct);
      }
      if (i < matrix.length - 3 && j >= 3) { // check for diagonal product (going from top-right to bottom-left)
        let diagonalProduct = matrix[i][j] * matrix[i+1][j-1] * matrix[i+2][j-2] * matrix[i+3][j-3];
        maxProduct = Math.max(maxProduct, diagonalProduct);
      }
    }
  }
  return maxProduct;
}
console.log(greatestProduct(matrix));





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
