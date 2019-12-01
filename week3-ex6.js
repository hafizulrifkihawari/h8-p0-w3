function angkaPalindrome(num) {
    // you can only write your code here!
    for (var i = 0 ; i < num; i++){
        num++
        var strNum = num.toString();
        var reverseNum = "";
        for (var j = strNum.length-1; j >= 0; j--){
            reverseNum += strNum[j];
        }
        if(reverseNum === strNum){
            return num;
        } 
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001