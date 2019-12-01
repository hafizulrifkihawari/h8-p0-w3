function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let diff = [];
    for (var i = 0; i < arr.length - 1; i++){
        diff.push(arr[i+1] - arr[i]);
    }
    // console.log(diff);

    for (var j = 0; j < diff.length - 1; j++){
        if (diff[j+1] !== diff[j]){
            return false;
        }
    }
    return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false