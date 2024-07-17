var string=prompt("please enter string");
var letter=prompt("please enter letter");
let strLen=string.length;
var counter=0;
for(let i=0; i<strLen;i++) {
    if(string[i]===letter) {
        counter++
    }
}
console.log(`in ${string} occurence of ${letter}= ${counter}`)