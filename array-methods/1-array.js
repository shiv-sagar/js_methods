// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods



// Find largest number in numbers

let largestNo = numbers.reduce((acc,no)  => acc < no ? no : acc); 

// Find longest string in strings

let longestStr = strings.reduce((acc,str) => acc.length < str.length ? str : acc,"")

// Find all the even numbers

let even = numbers.filter(no => no %2 == 0);

// Find all the odd numbers

let odd = numbers.filter(no => no % 2 == 1);

// Find all the words that contain 'is' use string method 'includes'

let wordsWithIs = strings.filter(str => str.includes("is"));

// Find all the words that contain 'is' use string method 'indexOf'

let wordsWithIs = strings.filter(word => word.indexOf("is") !== -1);

// Check if all the numbers in numbers array are divisible by three use array method (every)

let divisibel3 = numbers.every(no => no %3 == 0 );

//  Sort Array from smallest to largest
 
let sortedArr = numbers.sort((a, b) => a - b);

// Remove the last word in strings

strings.pop();

// Add a new word in the array

strings.push("new word");

// Remove the first word in the array

strings.shift();

// Place a new word at the start of the array use (upshift)

strings.unshift("new2");

// Make a subset of numbers array [18,9,7,11]

let suset = numbers.slice(3, 7);

// Make a subset of strings array ['a','collection']

let subset = strings.slice(2, 4);

// Replace 12 & 18 with 1221 and 1881

let replace = numbers.map(no => (no ==12)? 1221 : (no == 18) ? 1881 : no );

// Replace words with string in strings array

let replaceWords = strings.map(word => {if(word == "words"){
  return "string"
} else { 
  return word;
}
});

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

let fnameWithJ = customers.filter(customer => customer.firstname.startsWith("J"));

// Create new array with firstname and lastname

let newArr = customer.map(customer => customer.firstname + " " + customer.lastname);

// Sort the array created above alphabetically 
 newArr.sort();

