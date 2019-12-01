function pasanganTerbesar(num) {
    // you can only write your code here!
    arr = [];
    res = "";
    strNum = num.toString();
    for (var i = 0; i < strNum.length - 1; i++){
        res += strNum[i] + strNum[i+1];
        arr.push(res);
        res = "";
    }
    // console.log(arr);

    for (var j = 0; j < arr.length; j++){
        for (var k = 0; k < arr.length; k++){
            if (arr[j] > arr[k]){
                let temp = arr[k];
                arr[k] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99