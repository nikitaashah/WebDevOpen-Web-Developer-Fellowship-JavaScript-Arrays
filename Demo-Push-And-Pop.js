//---------------------------------
//          PUSH
//---------------------------------

let myFavoriteFruits = ["banana", "cherry", "mango"];

myFavoriteFruits.push("pear");
console.log(myFavoriteFruits);

myFavoriteFruits.push("banana");
console.log(myFavoriteFruits);

//---------------------------------
//          POP
//---------------------------------

let myFavoriteFruits1 = ["banana", "cherry", "mango", "pear"];

console.log(myFavoriteFruits1.length); // prints array length, 4
myFavoriteFruits1.pop(); // removes last item from the list
console.log(myFavoriteFruits1);
console.log(myFavoriteFruits1.length); // prints array length, 3

console.log("=================================");

/* 
pop() both removes the last item from the 
array AND returns that item, so it can be used
for example to create a new variable.
*/
let lastFruit = myFavoriteFruits.pop(); 

console.log(lastFruit); // prints variable, which is 'mango'
console.log(myFavoriteFruits); // prints the array
console.log(myFavoriteFruits.length); // 2

console.log("=================================");

// We can use push() to move lastFruit back into the array
myFavoriteFruits.push(lastFruit); // adds lastFruit to the array
console.log(myFavoriteFruits);
