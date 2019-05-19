const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];

alphabet.forEach(character => {
   if (character !== 'L') {
       noel.push(character);
   }
});