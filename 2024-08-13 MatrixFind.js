function findMatrixAnomaly(matrix){
    const catalog = Object.create(null); // We'll use a dictionary-like structure with the matrix elements as keys
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            let count = 1;
            if(catalog[matrix[i][j]]){ // If this matrix element exists as a key, grab its current count
                count = catalog[matrix[i][j]].count + 1;
            }
            // add this element to the dictionary, updating the index & count if needed
            catalog[matrix[i][j]] = {i:i+1, j:j+1, count: count};

            // If there's more than one key, and we're 3 elements or more into it, we have our answer
            if(Object.keys(catalog).length > 1 && ((matrix[i].length * i)+j+1 >= 3)){
                for(key of Object.keys(catalog)){
                    if(catalog[key].count == 1){ // The key that only has 1 occurence is the anomaly
                        return '['+ catalog[key].i + ', ' + catalog[key].j + '] #' + key + ' is different from the rest';
                    }
                }
            }
        }
    }
}

console.log(findMatrixAnomaly([
    ["A", "A", "A"],
    ["A", "A", "A"],
    ["A", "B", "A"]
  ]));

console.log(findMatrixAnomaly([
    ["c", "c", "c", "c"],
    ["c", "c", "c", "d"]
  ]));

console.log(findMatrixAnomaly([
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["P", "O", "O", "O"],
    ["O", "O", "O", "O"]
  ]));