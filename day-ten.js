'use strict'
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const uniquelang = new Set(languages)
  console.log(uniquelang)

  const count = []

  for(const each of uniquelang){ //get each of the four unique languages
    console.log(each)
    const filtered = languages.filter((lang) => lang === each)
    console.log(filtered)
    count.push({language : each, count: filtered.length })
  }
  console.log(count)

  //Exercises:Level 1
  const a = [4, 5, 8, 9]
  const b = [3, 4, 5, 7]
  const countries = ['Finland', 'Sweden', 'Norway', 'japan']
  const countriesTwo = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]

  //create an empty set
  const newSet = new Set()
  console.log(newSet.size)

  //Create a set containing 0 to 10 using loop

  for (let i = 0; i <= 10; i++){
      newSet.add(i)
  }
  console.log(newSet)

  //Remove an element from a set
  newSet.delete(1)
  console.log(newSet)
  
  //Clear a set
  newSet.clear()
  console.log(newSet)

  //Create a set of 5 string elements from array
  const newCountry = countries.filter((country)=>country.length == 5)
  console.log(new Set (newCountry))

  //Create a map of countries and number of characters of a country
  const mapped = new Map(countriesTwo)
  console.log(mapped)

  //Exercises:Level 2
  //Find a union b
  let c = [...a, ...b]
  let C = new Set(c)
  console.log(C)


  //Find a intersection b
  let B = new Set(b)
  let d = a.filter((each)=> B.has(each))
  console.log(d)

   //Find a with b. did it as difference
   B = new Set(b)
   d = a.filter((each)=> !B.has(each))
   console.log(d)

   //Exercises:Level 3
   //How many languages are there in the countries object file.
   
   //*** Use the countries data to find the 10 most spoken languages:


//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//Given a 2D (nested) li (array, vector,...) of size m*n, your tas is to find the sum of the minimum values in each row.
// for example.

const arrgg = [[1,2,3,4,5], [5,6,7,8,9], [20,21,34,56,100]] 
let small = 0

for(const num of arrgg){ 
  small += num.sort((a, b)=> a - b)[0]
}
console.log(small)

//using reduce
small = arrgg.reduce((acc, curr) => Math.min(...curr) + acc, 0) //spreading cause math.min wor on numbers not arrays
console.log(small)

// Write a function that taKes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
const bits = int => int.toString(2).match(/1/g).length //using 2 cause we were told to convert to binary
console.log(bits(1234))

//implement the function which accepts an array containing the names of people that like an item. it must return the displayed text as shown below

//[] no one likes this
//['peter'] peter likes this
//['James', 'Peter'] James and Peter like this

const likes = array => {
  if(array.length === 0) {
    return 'no one likes this'
  }
  else if (array.length === 1 ){
    return array[0] + ' likes this'
  }
  else if(array.length >= 2 && array.length <= 3 ){
    return array.slice(0,-1).join(', ') + ' and ' + array.slice(-1) + ' like this'
  }
  else if(array.length > 3 ){
    return array.slice(0,2).join(', ') + ' and ' + (array.length - 2) + ' others like this'
  }
}

console.log(likes(['Nat', 'dunno', 'winnnnn', 'phewww']))