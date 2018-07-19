'use strict';

function createCharacter(name) {
  return {
    name: 'name',
    nickname: 'nickname',
    race: 'race',
    origin: 'origin',
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character) {
      return 'Your opponent takes ${this.x} damage and you receive ${this.y} damage'; 
      //Instructions say return, but did they mean print? x & y need to be defined in a method within 
      //each character object, and each character object needs to include the attack and defense properties.
    }
  };
}

// creating and array characters that calls the factory function is throwing me off...all below here is ideas
// for that but not fully formed...stopping for now...

// const characters = createCharacter(name, nickname, race, origin, attack, defense) {
    
// }


// const characters = [
//     {
//         name: 'Gandalf the White',
//         nickname: 'gandalf',
//         race: 'Wizard',
//         origin: 'Middle Earth',
//         attack: 10
//         defense: 6
//         x: function() {
//             return (this.attack > this.defense ? 0 : this.defense - this.attack);
//         },
//         y: function() {
//             return (this.defense > this.attack ? 0 : this.attack - this.defense);
//         }    
//     },
//     {
//         name: 
//         nickname:
//         race: 
//         origin: 
//         attack:
//         defense: 
//         x: function() {
//             return (this.attack > this.defense ? 0 : this.defense - this.attack);
//         },
//         y: function() {
//             return (this.defense > this.attack ? 0 : this.attack - this.defense);
//         }    
//     },
//     {
//         name: 
//         nickname:
//         race: 
//         origin: 
//         attack:
//         defense: 
//         x: function() {
//             return (this.attack > this.defense ? 0 : this.defense - this.attack);
//         },
//         y: function() {
//             return (this.defense > this.attack ? 0 : this.attack - this.defense);
//         }    
//     },
//     {
//         name: 
//         nickname:
//         race: 
//         origin: 
//         attack:
//         defense: 
//         x: function() {
//             return (this.attack > this.defense ? 0 : this.defense - this.attack);
//         },
//         y: function() {
//             return (this.defense > this.attack ? 0 : this.attack - this.defense);
//         }    
//     },
//     {
//         name: 
//         nickname:
//         race: 
//         origin: 
//         attack:
//         defense: 
//         x: function() {
//             return (this.attack > this.defense ? 0 : this.defense - this.attack);
//         },
//         y: function() {
//             return (this.defense > this.attack ? 0 : this.attack - this.defense);
//         }    
//     }
// ]
