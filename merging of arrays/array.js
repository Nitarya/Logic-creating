const arr1=['100','8','9']
const arr2=['45','7','190']

//concat

const finalArr=arr1.concat(arr2)
const sortedArr=finalArr.sort(function(a,b) {
    return a-b
})

//spread operator
const result=[...arr1,...arr2]
const sortedArr2=result.sort(function(a,b) {
    return a-b
})

console.log(result)
