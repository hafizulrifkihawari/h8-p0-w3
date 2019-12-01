function targetTerdekat(arr) {
    // you can only write your code here!
    let x = [];
    let o = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "x"){
            x.push(i);
        } else if (arr[i] == "o"){  
            o.push(i);
        }
    }
    // console.log(x);
    // console.log(o);

    res = [];
    if (x.length == 0 || o.length == 0){
        return 0;
    } else {
        for (var i = 0; i < x.length; i++){
            for (var j = 0; j < o.length; j++){
                res.push(Math.abs(x[i]- o[j]))
            }
        }
    }

    // console.log(res);
    // sort array;
    for (var i = 0; i < res.length; i++){
        for (var j = 0; j < res.length; j++){
            if (res[i] < res[j]){
                let temp = res[j];
                res[j] = res[i];
                res[i] = temp;
            }
        }
    }

    return res[0];
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2