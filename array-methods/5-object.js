// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

let listKeyVal = obj => {
  let keys = Object.keys(obj);
  keys.forEach(key => console.log(`${key} : ${ obj[key] }`) );
}

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};


function deleteProp(arr){
  delete arr.rollno;
   return arr;
 console.log(deleteProp(student));
 console.log(student);


// 3. Write a function to get the length of an object.

function lengthObj(obj) {
  return Object.keys(obj).length;
}
