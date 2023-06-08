/* When trying to think of properties and methods, remember that our classes are nouns, their properties are like adjectives, and their methods are like verbs.*/

/* For the **`Cat`** class:
- Give the class at least three properties.
- Give the class at least three methods.
- Create two instances of the class (two cats).
- Log both instances to see their properties.
- Invoke each method from both instances. */
class Cat {
    constructor(name, furColor, scratches) {
        this.name = name;
        this.furColor = furColor;
        this.scratches = scratches;
    }
    interaction() {
        if (this.scratches === true) {
           return ("Mreoooww!")
        }
        if (this.scratches === false) {
            return ("*soft purring*")
        }
    }
    greet() {
        return (`Hello my name is ${this.name} and I'm a ${this.furColor} kitty!`)
    }
}

const kitty1 = new Cat("Meowf", "black", false)
const kitty2 = new Cat("KittyCakes", "tuxedo black", true)
console.log(kitty1);
console.log(kitty1.greet());
console.log(kitty1.interaction());
console.log(kitty2);
console.log(kitty2.greet());
console.log(kitty2.interaction());

/* For the **`Pirate`** class:
- Create three properties that are set by the constructor.
- Create three methods.
- Instantiate two arrays of three pirates, name the arrays after your favorite pirate ships: `jollyRoger` and `blackPearl`.
- Loop over each array and print three properties of each pirate. */

class Pirate {
    constructor(name, knowsHowToSail, lootType) {
        this.name = name;
        this.knowsHowToSail = knowsHowToSail;
        this.lootType = lootType;
    }
    sail() {
        if (this.knowsHowToSail === true) {
            return `Pirate ${this.name} is manning the ship.`
        }
        if (this.knowsHowToSail === false) {
            return `Pirate ${this.name} is a passenger of the ship.`
        }
    }
    steal() {
        return `Pirate ${this.name} has stolen some ${this.lootType}!`
    }
    sell() {
        return `Pirate ${this.name} is selling ${this.lootType}. Are you interested in buying?`
    }
}

// const George = new Pirate('George', false, 'gold');
// const Tim = new Pirate('Tim', true, 'spirits');
// const Jack = new Pirate('Jack', false, 'spices');
// const jollyRoger = [];
// jollyRoger.push(George, Tim, Jack);
// //  console.log(jollyRoger);


// const Mark = new Pirate('Mark', true, 'silver');
// const Peter = new Pirate('Peter', true, 'fruits');
// const Gerald = new Pirate('Gerald', false, 'textiles');
// const blackPearl = [];
// blackPearl.push(Mark, Peter, Gerald);
// // console.log(blackPearl);

// for (let i = 0; i < jollyRoger.length; i++) {
//     console.log(jollyRoger[i]);
// }

// for (let i = 0; i < blackPearl.length; i++) {
//     console.log(blackPearl[i]);
// }

const jollyRoger = [
    new Pirate('George', false, 'gold'),
    new Pirate('Tim', true, 'spirits'),
    new Pirate('Jack', false, 'spices')
];

for (let i = 0; i < jollyRoger.length; i++) {
    console.log(jollyRoger[i]);
}

const blackPearl = [
    new Pirate('Mark', true, 'silver'),
    new Pirate('Peter', true, 'fruits'),
    new Pirate('Gerald', false, 'textiles'),
];

for (let i = 0; i < blackPearl.length; i++) {
    console.log(blackPearl[i]);
}