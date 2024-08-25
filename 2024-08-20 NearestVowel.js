
// I consider this the "cheap" way
function nearestVowelEasy(letter){
    const nearestVowels = 'aaaeeeeiiiiioooooouuuuuuuu'
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return nearestVowels[alphabet.indexOf(letter)];
}

// This is a more "calculated" version
function nearestVowelCalculated(letter){
    // Is the letter a vowel itself? If so, return it
    const vowels = ['a','e','i','o','u'];
    if(vowels.indexOf(letter) > -1){
        return letter;
    }

    // Otherwise, let's calculate the distance to the nearest vowel
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let vowelDistances = vowels.map((v) => ({vowel: v, index: alphabet.indexOf(v), distance: Math.abs(alphabet.indexOf(letter) - alphabet.indexOf(v))}));
    // Then sort the results by distance and position of that vowel in the alphabet
    vowelDistances.sort(function(a,b){
        return a.distance - b.distance || a.index - b.index;
    })
    // Our shortest distance with the lowest index is the winner
    return vowelDistances[0].vowel;
}

console.log(nearestVowelEasy("b"));
console.log(nearestVowelCalculated("b"));
console.log(nearestVowelEasy("s"));
console.log(nearestVowelCalculated("s"));
console.log(nearestVowelEasy("c"));
console.log(nearestVowelCalculated("c"));
console.log(nearestVowelEasy("i"));
console.log(nearestVowelCalculated("i"));