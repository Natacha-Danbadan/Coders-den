'use strict'


function findLongestWordLength(str) {
    return str.length;
}
function findLongestWordLength(str) {
    let arr = str.split(' ')
    const res = arr.sort((a, b) => b.length - a.length)[0]
    return res
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


//question two
// You are given two arrays and an index. Copy each element of the first array into the second array, in order.Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.
// Waiting:frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// Waiting:frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]

const frankenSplice = (arrone, arrtwo) => {
    let [x, ...y] = arrtwo
    let remaining = [x, ...arrone, ...y]
    return remaining
}
console.log(frankenSplice([1, 2], ["a", "b"]))


// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// Waiting:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
// Waiting:titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
// Waiting:titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.

const titleCase = str => {
    return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ')   
}
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))

// //codewars

function spinWords(string){ 
    return string.split(' ').map((item) => {
        return (item.length >= 5) ? item.split('').reverse().join(''): item}).join(' ')
}
console.log(spinWords( "Hey fellow warriors" ))

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

// myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
// Expected
// { a: 1, b: 2, c: 3, e: 5, d: 4}
// myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
// Expected
// { a: 5, b: 4, c: 3, e: 2, d: 1}

const myFunc = (objOne, objTwo) => {
    let { b, ...u} = objTwo
    
return {...objOne, ...u, d:b}

}
console.log(myFunc({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))

const mapped = (c, d) => {
    return c.length == d.length ? c.reduce((acc, curr, idx) => { 
        acc[curr] = d[idx]
         return acc 
        },{}) : "arrays are not of the same length "

}
console.log(mapped(['a', 'b', 'c'], [1, 2, 3]))

//or
const mapped2 = (c, d) => {
    c.reduce((acc, curr, idx) => {
        return {...acc, [curr]:d[idx] }
    })
}

console.log(mapped2(['a', 'b', 'c'], [1, 2, 3]))