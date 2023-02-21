const rocks =[
    {name: "Led Zeppelin", age:50},
    {name: "Dwaine Johnson", age:47},
    {name: "Neptune", age: 1_000_000_000}
]


//loop methods: map => returns a new array, 
// filter, find, reduce, sort, forEach



rocksAgedOneYear = rocks.map(rock => {
    return {...rock, age: rock.age+1}});

// works the same
// rocksAgedOneYear = rocks.map(rock => 
//     ({...rock, age: rock.age+1}));

//... operator spread => 

console.log(rocksAgedOneYear);

console.log(rocks);

const Even = rocks.filter(rock => rock.age % 2 === 0)

console.log()