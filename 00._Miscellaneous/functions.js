//hoisting

console.log(random(45,56));

function random(min,max){
    return Math.floor(Math.random()*(max-min +1)-min)
}

const anonimusFunction = function (min,max){
    return Math.floor(Math.random()*(max-min +1)-min)
}
console.log(anonimusFunction(0,10));


const randomArrowFunction = (min,max) => {
    return Math.floor(Math.random()*(max-min +1)-min)
};

const randomArrowFunctionLambda = (min,max) => Math.floor(Math.random()*(max-min +1)-min);

//Callback function
function genericActionPerformer(genericAction, genericName){
    //do stuff..
    return genericAction(genericName);
}

console.log("Lambda: "+randomArrowFunctionLambda(0,10));
const subtract = (name) => `${name} is subtracting`;

console.log(genericActionPerformer(subtract,"Tobias"));

const walk = (name) => `${name} is walking hard`;

//Nico is walking

console.log(genericActionPerformer(walk,"Nicolas"));

console.log(genericActionPerformer((name)=>`${name} is reading hard`,"Andrea"));
