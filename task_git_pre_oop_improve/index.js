/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Habitant {
    constructor(species, gender, name, legs, hands, say) {
        this.species = species;
        this.gender = gender;
        this.name = name;
        this.legs = legs;
        this.hands = hands;
        this.say = say;
    }

    toString() {
        return '<strong>' + this.name + '</strong> is a ' +
            this.gender + ' ' +
            this.species + ' with ' +
            this.legs + ' legs and ' +
            this.hands + ' hands, saying ' +
            '<em>' + this.say + '</em>';
    }
}

class Human extends Habitant {
    constructor(gender, name, say, profession){
        super("human", gender, name, 2, 2, say);
        this.profession = profession;
    }

    toString() {
        return super.toString() +
            ' and works as ' + this.profession;
    }
}

class Animal extends Habitant {
    constructor(gender, name, say, favorite){
        super("animal", gender, name, 4, 0, say);
        this.favorite = favorite;
    }

    toString() {
        return super.toString() +
            ' and likes ' + this.favorite;
    }
}

let man = new Human('male', 'Jake', 'Hello Jenny!', 'programmer');
let woman = new Human('female', 'Jenny', 'Hello Jake!', 'designer');
let dog = new Animal('male', 'Rex', 'Woof woof!', 'bones');
let cat = new Animal('male', 'Tom', 'Meow frrr frrr!', 'mices');

let habitants = [man, woman, dog, cat];

print(habitants.map(t => t.toString()).join('<br>'), 'div');

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


