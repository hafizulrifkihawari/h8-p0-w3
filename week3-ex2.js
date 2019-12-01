//input "hello world!"
//output
// "!dlrow olleh"

let str = ["hello world!"]
let res = "";
function balikString(str){
    for(var i = str[0].length - 1; i >= 0; i--){
        res += str[0][i];
    }
    return res;
}

console.log(balikString(str));