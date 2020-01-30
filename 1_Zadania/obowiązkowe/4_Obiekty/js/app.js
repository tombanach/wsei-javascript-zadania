// Zadanie 0A

const city = {
    capital: 'Warsaw',
    population: 38000000,
    president: 'Andrzej',
    primeMinisters: [
        'Marek ZAGÓRSKI',
        'Dariusz PIONTKOWSKI',
        'Krzysztof TCHÓRZEWSKI'
    ]
};

console.log(`capital: ${city.capital}`);
console.log(`population: ${city.population}`);
console.log(`president: ${city.president}`);
console.log(`primeMinisters: ${city.primeMinisters}`);



// Zadanie 0B

const timeMachine = {
    shape: 'triangle',
    model: 'Yabba',
    run: (date, place) => {
        console.log(`Now(${date}) we are in ${place}`);
    }
};
console.log(`shape: ${timeMachine.shape}`);
console.log(`model: ${timeMachine.model}`);
timeMachine.run('2085-06-01', 'the Sun');



// Zadanie 1

const book = {
    title: 'Programming in C#',
    author: 'Adam Mickiewicz',
    numberOfPages: 300
};
console.log(book);



// Zadanie 2

const person = {
    name: 'Jerzy Owsiak',
    age: 13,
    sayHello: () => {
        console.log('Hello');
    }
};
console.log(`name: ${person.name}, age: ${person.age}`);
person.sayHello();



// Zadanie 3

const favouriteRecipe = {
    title: 'burger',
    servings: 2
};

favouriteRecipe.ingredients = [
    'roll',
    'salt',
    'tomatoes',
    'ham',
    'cheese'
];

console.log(`title: ${favouriteRecipe.title}, servings: ${favouriteRecipe.servings}, ingredients: ${favouriteRecipe.ingredients}`);



// Zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);