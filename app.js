class Pirate {
  constructor() {

  }
}
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
console.log(kitty1.greet());
;

/* For the **`Pirate`** class:
- Create three properties that are set by the constructor.
- Create three methods.
- Instantiate two arrays of three pirates, name the arrays after your favorite pirate ships: `jollyRoger` and `blackPearl`.
- Loop over each array and print three properties of each pirate. */