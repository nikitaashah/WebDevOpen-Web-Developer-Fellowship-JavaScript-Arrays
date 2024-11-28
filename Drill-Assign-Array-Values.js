let listOfPuppies = ["shadow", "mocha", "ranger"];
let puppyAges = [0, 1, 2];

// access puppyAges at the right index to find shadow's age
let shadowAge = puppyAges[0];
console.log("Shadow's age: " + shadowAge);

// mocha had a birthday! update her age to 2 in puppyAges
puppyAges[1] = 2;
console.log(puppyAges);
console.log("Mocha's updated age: " + puppyAges[1]);

// There's a new puppy called 'holly' - add her to listOfPuppies
listOfPuppies[3] = "holly";
console.log(listOfPuppies);

// don't forget to add holly's age (0) to the puppyAges array
puppyAges[3] = 0;
console.log(puppyAges);
