function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    let arr = [];
    let res = "";
    for (var i = 0; i < kalimat.length; i++){
        res += kalimat[i];
        if (kalimat[i] === " "){
            arr.push(res)
            res = "";
        }
    }
    arr.push(res);
    return arr.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5