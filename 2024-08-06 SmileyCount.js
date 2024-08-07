function countSmileys(arr){
    return arr.filter(a => /^[:;][~-]?[)D]/.test(a)).length;
}

console.log(countSmileys([":)", ";(", ";}", ":-D"]));
console.log(countSmileys([";D", ":-(", ":-)", ";~)"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
console.log(countSmileys([]));