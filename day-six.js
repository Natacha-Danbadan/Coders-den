'use strict'
// Exercises: Level 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let n = 0; n <= 10; n++ ){
    console.log(n)
}

let m = 0
while(m <= 10){
    console.log(m)
    m++
}
let o = 0
do {
    console.log(o)
    o++    
}
while(o <= 10)

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let p = 10; p >= 0; p-- ){
    console.log(p)
}

let q = 10
while(q >= 0){
    console.log(q)
    q--
}

let r = 10
do {
    console.log(r)
    r--   
}
while(r >= 0)

//Iterate 0 to n using for loop

//Write a loop that makes the following pattern using console.log():
for(let v=1; v<=7; v++ ){
    console.log("#".repeat(v))
}

//Use loop to print the following pattern:
for(let u=0; u<=10; u++){
    console.log(`${u}*${u} = ${u * u}`)
}
//Using loop print the following pattern
for(let w=0; w<=10; w++){
    console.log(`${w} ${w ** 2} ${w ** 3}`)
}
//Use for loop to iterate from 0 to 100 and print only even numbers
for(let even=0; even<=100; even++ ){
 if (even%2 === 0) console.log(even) 
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for(let odd=0; odd<=100; odd++ ){
    if (odd%2 === 1) console.log(odd) 
   }

//Use for loop to iterate from 0 to 100 and print only prime numbers
let count = 0
let i, j
for(j = 2; j<=100; j++){
    for( i= 1; i<=j; i++) {
        if(j%i == 0)
        count++
    }
    if (count == 2)
    console.log(j)
    count = 0
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let total= 0
for(let a = 0; a<=100; a++){
    total+=a
}
console.log(total)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0
let sumOdd = 0 
for(let num=0; num<=100; num++ ){
    if (num%2 === 0){
    sumEven +=num
   } else if(num%2 === 1){
    sumOdd+=num
   }
}
console.log(sumEven, sumOdd)

//Print sum of evens and sum of odds as array
 
let even = 0
let odd = 0 
for(let num=0; num<=100; num++ ){
    if (num%2 === 0){
    even +=num
   } else if(num%2 === 1){
    odd+=num
   }
}
console.log([even,odd])

//Develop a small script which generate array of 5 random numbers
const arr = Array(5).fill().map(() => Math.trunc(Math.random() * 10) )
console.log(arr)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

//this would work if we werent asked for an array
const unique = new Set(arr)
console.log(unique)

//this is more accurate. using the spread and set method
let set = new Set();
while (set.size <= 4) {
  set.add(Math.trunc(Math.random() * 10) | 0);
}
let randomArray = [...set];
console.log(randomArray)

//Develop a small script which generate a six characters random id:5j2khz
let ranId = (Math.random() + 1).toString(36).substring(6);
console.log("random id", ranId);