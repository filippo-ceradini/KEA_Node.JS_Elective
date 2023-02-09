// Const Rule 1: Have to assign a value when declaring.  
// const me;

const me = {
    /* key: value 
    === key-value pairs
    */
   name: "Hans"
};
const hobbies = ["Football", "Swimming"];
hobbies.push("Cooking");
me.hobbies = hobbies;


// Const Rule 2: Cannot reassign to constant
// me = {};
me.name = "Johannes";



console.log(me);


const hobbyOne = "Football skill level: '6'";
const hobbyTwo = 'Swimming skill level: "3"';
const hobbyThree = `Cooking skill level: "'${2 + 2}"'`;
console.log(hobbyThree);
