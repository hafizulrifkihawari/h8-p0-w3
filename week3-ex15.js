function groupAnimals(animals) {
    // you can only write your code here!
    for (var i = 0; i < animals.length; i++){
        for (var j = 0; j < animals.length; j++){
            if(animals[i] < animals[j]){
                let temp = animals[j];
                animals[j] = animals[i];
                animals[i] = temp;     
                // sorting ascending
            }
        }
    }
    // console.log(animals);
    // manual sorting array

    let res = [];
    let temp = 0;
    for(var i = 0; i < animals.length; i++){
        if (res.length == 0){
            res.push([animals[i]])
        // push first iteration into new array (res)

        } else if (res[temp][0][0] === animals[i][0]){
            res[temp].push(animals[i]);
        /* compare first character of new array (res) with first chr
        parameter array (animals), if true push into the same index */
        } else {
            res.push([animals[i]])
            temp++;
        }
        // if false, push into new index of the new array
    }
    return res;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]