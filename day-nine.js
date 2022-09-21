'use strict'
const array = ['a', 'b', 'c', 'd', 'e']
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Define a callback function before you use it in forEach, map, filter or reduce.
const callback = function(element){console.log(element)};

//using forEach
countries.forEach(callback)

//using map
const callback2 = function(element){console.log(element)};
numbers.map(callback2)

//using filter
const callback3 = function(element){console.log(element)};
array.filter(callback3)

//using reduce
const callback4 = function(acc, currentValue){return acc + currentValue}
const reduced = numbers.reduce(callback4)
console.log(reduced)

//Use forEach to console.log each country in the countries array.
countries.forEach(country => {console.log(country)})

//Use forEach to console.log each name in the names array.
names.forEach(name => {console.log(name)})

//Use forEach to console.log each number in the numbers array.
numbers.forEach(number => {console.log(number)})

//Use map to create a new array by changing each country to uppercase in the countries array.
countries.map(country => {console.log(country.toUpperCase())})

//Use map to create an array of countries length from countries array.
const countrylength = countries.map((country) => country.length);
console.log(countrylength);

//Use map to create a new array by changing each number to square in the numbers array
const squared = numbers.map((number) => number ** 2);
console.log(squared);

//Use map to change to each name to uppercase in the names array
const name = names.map((name) => name.toLocaleUpperCase());
console.log(name);

//Use map to map the products array to its corresponding prices.
let productPrices = products.map((product) => {
   return `${product.product}:${product.price}`
})

console.log(productPrices)

//Use filter to filter out countries containing land.
const landCountries = countries.filter((land) => land.includes('land') || land.includes('Land') )
console.log(landCountries)

//Use filter to filter out countries having six character.
const sixCharCountries = countries.filter((land) => land.length == 6 )
console.log(sixCharCountries)

//se filter to filter out countries containing six letters and more in the country array.
const newCountries = countries.filter((land) => land.length >= 6 )
console.log(newCountries)

//Use filter to filter out country start with 'E';
const eCountries = countries.filter((land) => land.startsWith('E') )
console.log(eCountries)

//Use filter to filter out only prices with values.
let pricesVal = products.filter((product) => 
  product.price.length !== 0 && typeof product.price === 'number'
)

console.log(pricesVal)

//Declare a function called getStringLists which takes an array as a parameter 
//and then returns an array only with string items.
const dummy = ['HTML', 123, false, 'CSS', 'JavaScript', 0]
const getStringLists = (arr) => {
  const filtered = arr.filter((items)=> typeof items === 'string' )
  return filtered
}

console.log(getStringLists(dummy))

//Use reduce to sum all the numbers in the numbers array.

const sumNumbers = numbers.reduce((acc, currVal) => acc + currVal) 
console.log(sumNumbers)

//Use reduce to concatenate all the countries and to produce this sentence: 
//Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// const concatCountries = countries.reduce((acc, currVal, index, arr) => {
//   console.log((arr.split('')))

//   // return finalResult //comingg bac to this soon
// })


//Explain the difference between some and every


//Use some to check if some names' length greater than seven in names array
const someNames = names.some((name) => name.length > 7)
console.log(someNames)

//Use every to check if all the countries contain the word land
const landCountry = countries.every((country) => country.includes('land'))
console.log(landCountry)

//Explain the difference between find and findIndex.

//Use find to find the first country containing only six letters in the countries array
const sixletterCountry = countries.find((country) => country.length == 6 )
console.log(sixletterCountry)

//Use findIndex to find the position of the first country containing only six letters in the countries array
const sixletterIndex = countries.findIndex((country) => country.length == 6 )
console.log(sixletterIndex)

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norway = countries.findIndex((country) => country ==  'Norway' )
console.log(norway)

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russia = countries.findIndex((country) => country ==  'Russia' )
console.log(russia)

//Exercises: Level 2

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const total = products.filter((product) => typeof product.price == 'number').map((product) => product.price).reduce((acc, currVal) => acc + currVal, 0) 
console.log (total) // im now writing a one liner yippee!

//Find the sum of price of products using only reduce reduce(callback))
const sumPrice = products.reduce((acc, currVal) => { 
 return { product:'Total', price: Number(acc.price) + Number(currVal.price) }
} ).price
console.log (sumPrice) //i dunno why we have to put them in cury braces but then phew!!!

//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const countriesTwo = [ 'Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
const categorizeCountries = (pattern) => countriesTwo.filter((country)=> country.includes(pattern) || country.endsWith(pattern))
console.log(categorizeCountries("land"));
console.log(categorizeCountries("ia"));
console.log(categorizeCountries("en"));

//Create a function which return an array of objects, 
//which is the letter and the number of times the letter is used to start with a name of a country.
 
// const letterCount = (alphabet) => countries.filter((country) => country.startsWith(alphabet) )
// console.log(letterCount('D')) imma figure it out! for now we meuve!!!

//Declare a getFirstTenCountries function and return an array of ten countries. 
//Use different functional programming to work on the countries.js array

const getFirstTenCountries = countriesTwo.filter((country, countryIndex, arr) => countryIndex < arr.length - 1)
console.log(getFirstTenCountries)

//using reduce
const getFirstTenCountriesTwo = countriesTwo.slice([0], [10]).reduce((acc, curr, index, arr) => arr)
console.log(getFirstTenCountriesTwo)


//subgroup sturvs

// question 1
const checkNum = (num) => num > 0 ? "positive" : num < 0 ? "negative" : "zero";
console.log(checkNum(5))

//or
const checkNumTwo = num => Math.sign(num) == 1 ? 'positive': Math.sign(num) == -1 ? 'negative' : 'zero'

//question 2
const checkDivisibility = (num) => {
  if (num % 2 === 0 && num % 3 === 0 && num % 4 === 0 && num % 5 === 0 && num % 10 === 0 ) {
    return ('num is divisible by 2, 3, 4, 5 and 10')
  }
  else if (num % 2 === 0 && num % 3 === 0 && num % 4 === 0) {
    return ('num is divisible by 2, 3 and 4')
  }
  else if (num % 2 === 0 && num % 3 === 0) {
    return ('num is divisible by 2 and 3')
  }
  else if (num % 2 === 0 && num % 10 === 0) {
    return ('num is divisible by 2, 5 and 10')
  }
  else if (num % 2 === 0 ) {
    return ('num is divisible by 2')
  }
  else if (num % 3 === 0 ) {
    return ('num is divisible by 3')
  }
  else if (num % 4 === 0 ) {
    return ('num is divisible by 4')
  }
  else if (num % 5 === 0 ) {
    return ('num is divisible by 5')
  }
  else if (num % 10 === 0 ) {
    return ('num is divisible by 10')
  }
  else {
    return ('num is neither divisible by 2, 3, 4, 5 or 10')
  }

}
console.log(checkDivisibility(6)) 
console.log(checkDivisibility(15)) 
console.log(checkDivisibility(60)) 
console.log(checkDivisibility(53)) 
console.log(checkDivisibility(27)) 
console.log(checkDivisibility(20)) 


//Eddy's approach
const divisibles = num => {
  let divisors = [], dividers = [2, 3, 4, 5, 10];
  for (let i = 0; i < dividers.length; i++) {
      if (Number(num) % dividers[i] == 0) divisors.push(dividers[i])
  }
  if (!divisors.length) {
      return `${num} is not divisible by 2, 3, 4, 5 or 10`
  } else if (divisors.length == 1) {
      return `${num} is divisible by ${divisors[0]}`
  } else {
      return `${num} is divisible by ${divisors.slice(0, divisors.length-1).join(', ')} and ${divisors[divisors.length-1]}`
  }
}


//question 3
const numbersss = [1, 2, 3, 5, 8, 4, 7, 9, 5, 6, 8, 9, 10]
//question 3
 const repeatedNum = (arr)  => {
    const newArr = [...new Set(arr)]
    return (newArr.size !== arr.length)? true : false
  }
  console.log(repeatedNum(numbersss))

  //or using some
   const repeatedN  = (arr) => arr.some((element, index) => {
        return arr.indexOf(element) !== index ? true : false 
      });  
   console.log(repeatedN(numbersss))

   //question 4
   const randomId = () => 'ID'+ Math.random().toString().slice(2, 7)
   console.log(randomId())

   //demooo
   // Build a function that returns an array of integers from n to 1 where n>0.

  //Example : n=5 --> [5,4,3,2,1]
    const nums = []
  const arrayOfIntegers = () => {
    for (let n = 5; n >= 1; n--){
      nums.push(n)
    }
    return nums
  }
  console.log(arrayOfIntegers())

//using recursion 
const arrayOfIntegerTwo = (n) => {
  if(n == 1){
    return [n]
  }
  return ([n, ...arrayOfIntegerTwo(n-1)])
}
console.log(arrayOfIntegerTwo(5))


// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'

const obj = {  'prop-2': 'two',  prop: 'test'}
function myFunction(object) {
  return object["prop-2"]
}
console.log(myFunction(obj))

// Write a function that takes a number (a) as argument If a is a whole number (has no decimal place), return true Otherwise, return false

const integer = (num) => {return (num % 2 === 0) ? true : false }
console.log(integer(2.5))

// / Write a function that takes a Set and a value as arguments
// // Check if the value is present in the Set


const setValues = (set, values ) => { return set.has(values)? true: false}
console.log(setValues(new Set(['1', '5', '3']), '2'))

// DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = function (iterable) {
return [...iterable].reduce((acc, curr, idx, arr) =>
    acc[acc.length -1] != curr ? [...acc, curr] : [...acc]
  );
};

//using for
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
const uniqueInOrderTwo = (iterable) => {
  const unique = []
  for(let n = 0; n < iterable.length; n++){
    if(iterable[n] !== iterable[n + 1]){
      unique.push(iterable[n])
    }
  }
  return unique
}
console.log(uniqueInOrder("AAAABBBCCDAABBB"))

// Create a function that returns the sum of the two lowest positive numbers given an array of
//  minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumTwoSmallest = (arr) => { let [c, d, rem]  = arr.sort((a,b) => a - b) 
  return c + d
}
console.log(sumTwoSmallest([19, 5, 42, 2, 77]))

//or
const sumTwoSmallie = (arr) => arr.sort((a,b) => a - b).reduce((acc, curr, idx, array) => array[0] + array[1])
console.log(sumTwoSmallie([19, 5, 42, 2, 77]))
console.log(sumTwoSmallie([10, 343445353, 3453445, 3453545353453]))

//got this hint somewhere, saving this here for now

// const countri = [
//   {name: 'Ukraine'},
//   {name: 'Bulgaria'},
//   {name: 'Cyprus'},
//   {name: 'Andorra'},
//   {name: 'United Kingdom'},
//   {name: 'Canada'}
// ]


// const getStartingLetters = arr => {
//   const occurences = arr
//     .reduce((acc, {name}) => {
//       const startingLetter = name[0]
//       acc[startingLetter] = ( acc[startingLetter] || 0 ) + 1
//       return acc
//     }, {})
  
//   return Object
//     .keys(occurences)
//     .sort()
//     .map(letter => ({letter, count: occurences[letter]}))
// }


// console.log(getStartingLetters(countri))


//subgroup

// 1. Write a function that takes in a nigerian phone number as an argument and 
//    checks if it has 11 digits only and if it is an MTN number. Assume MTN numbers 
//    start with 0706, 0803, 0810, and 0906.Your function should return 
//    'Valid MTN phone number' OR 'Invalid MTN phone number'

//something needs fixing here though
  const MtnValidator = (number) => {
    const pat = /^0(706|803|810|906|813)\d{7}$/
    return pat.test(number)? 'Valid MTN phone number':'Invalid MTN phone number'
  }
  console.log(MtnValidator('08135969622'))
  console.log(MtnValidator('07061234567'))
  console.log(MtnValidator('08161234567'))
  console.log(MtnValidator('08101234567'))
  console.log(MtnValidator('081012345678'))
  console.log(MtnValidator('19061234567'))

// 2. Google Meet meeting ids usually have 3 random letters, then 4 random letters, 
//    then 3 random letter, separated by dashes, eg abc-defg-hij. Write a function 
//    that checks if a meeting id is a valid Google Meet id. Your function should return 
//    'Valid Meet ID' OR 'Invalid Meet ID'

const meetValidator = (id) => {
  const pattern = /^[a-z]{3}-[a-z]{4}-[a-z]{3}$/
  return pattern.test(id) ? 'Valid Meet ID':'Invalid Meet ID'
}
console.log(meetValidator('abc-defg-hij'))
console.log(meetValidator('ab-defg-hij'))
console.log(meetValidator('abcd-defg-hij'))



// 3. Write a recursive function that takes in an array of numbers 
//    and returns the product of all the numbers
   const arr = [15, 9, 3, 8, 2, 6];
  const productOfNum = ([start, ...end]) => {
    if (start === undefined) {
      return 1;
    };
    return start * productOfNum(end);
  };
  console.log(productOfNum(arr));

//Eddy's method buh i prefer mine though
const arrayProduct = arr => arr.length == 1 ? arr[0] : arr[0] * arrayProduct(arr.slice(1, arr.length))
console.log(arrayProduct([8, 4, 3]))
console.log(arrayProduct([1, 2, 3, 4, 5, 6, 7]))

// 4. An API fetch returns the following array of objects named data. Write a function 
//    that will take in the array and return an array of objects with only name, population, 
//    capital, currency and flag as keys. The value for name should be the official name.
//    The value for capital should be the first item in the capital array. The value for currency 
//    should be the key inside currencies object. The value for flag should be the value of the
//    png key in the flags object. The result should be sorted by population from lowest to highest.

const data =  [
  {
      "name":{
          "common":"United States",
          "official":"United States of America",
      },
      "currencies":{
          "USD":{
              "name":"United States dollar",
              "symbol":"$"
          }
      },
      "capital":["Washington, D.C."],
      "altSpellings":["US","USA","United States of America"],
      "languages":{
          "eng":"English"
      },
      "borders":["CAN","MEX"],
      "area":9372610.0,
      "population":329484123,
      "fifa":"USA",
      "continents":["North America"],
      "flags":{
          "png":"https://flagcdn.com/w320/us.png"
      },
  },

  {
      "name":{
          "common":"United Arab Emirates",
          "official":"United Arab Emirates",
      },
      "currencies":{
          "AED":{
              "name":"United Arab Emirates dirham",
              "symbol":"د.إ"
          }
      },
      "capital":["Abu Dhabi"],
      "altSpellings":["AE","UAE","Emirates"],
      "languages":{
          "ara":"Arabic"
      },
      "borders":["OMN","SAU"],
      "area":83600.0,
      "population":9890400,
      "fifa":"UAE",
      "continents":["Asia"],
      "flags":{
          "png":"https://flagcdn.com/w320/ae.png"
      },
  }
]

// using map cause i want to modify my array to suit the conditions i was given and sort cause i needed to sort the population by ascending order so here we go

const modifiedData = array => array.sort((a, b) => a.population - b.population).map((country)=>{
 return {
  "name":country.name.official,
  "population":country.population,
  "capital":country.capital[0],
  "currency": String (Object.keys(country.currencies)),
  "flag ":country.flags.png
 }

}) 
console.log(modifiedData(data))
