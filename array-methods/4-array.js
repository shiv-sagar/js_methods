var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.



// 1 human year = 7 dog year

// your code goes here

let dogsAgesSum = arr => {
  let sum = 0;
  for (i=0; i < arr.length; i++) {
    if(arr[i].type == "dog") {
      sum += arr[i].age *7;
    }
  }
  return sum;
};


// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
let dogsAgesSum= arr => {
  let sum = 0;
  arr.filter(value => {
    if(value.type === "dog"){
    sum += (7* value.age);
    };
  });
  return sum;   
};

// 2. map - to multiply human year to dog year
let dogsAgesSum = arr => {
  let sum = 0;
  arr.map(value => { 
    if(value.type === "dog") { 
      sum += 7 * value.age ;
    }
  });
  return sum;
}

// 3. reduce - to accumulate total age.
let dogsAgesSum = arr => arr.reduce( (acc, value) => value.type === dogs ? acc + (7 * value.age) : acc, 0);

// Solution 105
