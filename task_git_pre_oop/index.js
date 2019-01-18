/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

var habitant = function(species, gender, name, legs, hands, say) {

    this.species = species;
    this.gender = gender;
    this.name = name;
    this.legs = legs;
    this.hands = hands;
    this.say = say;
    this.about = function(){
        return [
            this.species,
            this.gender,
            '<strong>' + this.name + '</strong>',
            this.legs,
            this.hands,
            '<em>' + this.say + '</em>'
        ].join('; ');
    }
}

var man = new habitant('human', 'male', 'Jake', 2, 2, 'Hello Jenny!');
var woman = new habitant('human', 'female', 'Jenny', 2, 2, 'Hello Jake!');
var dog = new habitant('dog', 'male', 'Rex', 4, 0, 'Woof woof!');
var cat = new habitant('cat', 'male', 'Tom', 4, 0, 'Meow frrr frrr!');

var habitants = [man, woman, dog, cat];

print(habitants.map(function (t) { return t.about() }).join('<br>'), 'div');

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


