'use strict'

import {countries} from './countries.js'; import {webTechs} from './webtechs.js'

  //Exercise Level 1

  //Declare an empty array;

  let empty = [];

  //Declare an array with more than 5 number of elements
  let nat = ['hey', 'yes', 5, 'egg', 50, 'code', 'hi' ];

  //Find the length of your array
  console.log(nat.length) 

  //Get the first item, the middle item and the last item of the array
  console.log(nat[0]) 
  let middleItem = Math.floor((nat.length)/2)
  console.log(nat[middleItem]) 
  let lastItem = nat.length - 1
  console.log(nat[lastItem]) 

  //Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
  const mixedDataTypes = ['123Nat', true, 100, 'merry', 'cherry', 'five'];
  console.log(mixedDataTypes.length)

  //Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

  //Print the array using console.log()
  console.log(itCompanies)

  //Print the number of companies in the array
  console.log(itCompanies.length)

  //Print the first company, middle and last company
  console.log(itCompanies[0]) 
  let middleCom = Math.floor((itCompanies.length)/2)
  console.log(itCompanies[middleCom]) 
  let lastCom = itCompanies.length - 1
  console.log(itCompanies[lastCom]) 

  //Print out each company
  let eachCom = [...itCompanies]
  console.log(...eachCom)
  console.log(itCompanies[0])
  console.log(itCompanies[1])
  console.log(itCompanies[2])
  console.log(itCompanies[3])
  console.log(itCompanies[4])
  console.log(itCompanies[5])
  console.log(itCompanies[6])
  
  //Change each company name to uppercase one by one and print them out
  console.log(itCompanies[0].toUpperCase())
  console.log(itCompanies[1].toUpperCase())
  console.log(itCompanies[2].toUpperCase())
  console.log(itCompanies[3].toUpperCase())
  console.log(itCompanies[4].toUpperCase())
  console.log(itCompanies[5].toUpperCase())
  console.log(itCompanies[6].toUpperCase())

  //Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
  let firstSix = itCompanies.slice(0,6)
  let lastCompany = itCompanies.slice(6,7)
  let joinCom = firstSix.join(', ')
  lastCompany.toString()
  console.log(`${joinCom} and ${lastCompany} are big IT companies.`)
  
  
  //Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
  if (itCompanies.includes(`${lastCompany}`)){
     console.log(`${lastCompany}`)
  }
  else {
       console.log('company not found')
  }
//Filter out companies which have more than one 'o' without the filter method
let filteredCom = []
 for (let com of itCompanies){
    let company = com.match(/o/gi)
    console.log(company)
    if (company == null){
        filteredCom.push(com)
    } else if (company.length == 1 ){
        filteredCom.push(com)
    }
 }
 console.log(filteredCom)

 //Sort the array using sort() method
 console.log(itCompanies.sort())
 
 //Reverse the array using reverse() method
 console.log(itCompanies.reverse())

 //Slice out the first 3 companies from the array
 console.log(itCompanies.sort().slice(0,3))
 
 //Slice out the last 3 companies from the array
 console.log(itCompanies.slice(4,7))
 console.log(itCompanies.slice(itCompanies.length - 3))

 //Slice out the middle IT company or companies from the array
 console.log(itCompanies.slice(3,4))
 const middVal = itCompanies.length % 2
 let index
 index = Math.floor(itCompanies.length/2)
 if(middVal == 1){
  console.log(itCompanies.slice(index, index + 1))
 }else if (middVal == 0){
  console.log(itCompanies.slice(index - 1, index + 1)) 
 }


//Remove the first IT company from the array
console.log(itCompanies.shift())

//Remove the middle IT company or companies from the array
//  console.log(itCompanies.splice(3,2))
 if(middVal == 1){
  console.log(itCompanies.splice(index, 1))
 }else if (middVal == 0){
  console.log(itCompanies.splice(index - 1, 2)) 
 }   

//Remove the last IT company from the array
console.log(itCompanies.pop())

//Remove all IT companies
  console.log(itCompanies.splice())   

  //Exercise two
  //First remove all the punctuations and change the string to array and count the number of words in the array
  let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  let removedPunc = text.replace(/[,.]/gi,"")
  console.log(removedPunc.split(" ").length)

  //In the following shopping cart add, remove, edit items
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

  //add 'Meat' in the beginning of your shopping cart if it has not been already added
  if(shoppingCart.includes('Meat')){
    console.log('Meat already in cart')
  }else {
    shoppingCart.unshift('Meat')
  }
  console.log(shoppingCart)

  //add Sugar at the end of you shopping cart if it has not been already added
  if(shoppingCart.includes('Sugar')){
    console.log('Meat already in cart')
  }else {
    shoppingCart.push('Sugar')
  }
  console.log(shoppingCart)

  //remove 'Honey' if you are allergic to honey
  let allergic = false
  allergic? console.log(shoppingCart.splice(4,1)): console.log('I love honey')
  
  //modify Tea to 'Green Tea'
shoppingCart[3] = 'Greeen Tea'
console.log(shoppingCart)

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.includes('Ethiopia')){
  console.log('ETHIOPIA')
}else {
  countries.push('Ethiopia')
}

//if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes('Sass')){
  console.log('Sass is a CSS prepocess')
}else {
  webTechs.push('Sass')
}
console.log(webTechs)
//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]
console.log(fullStack)

//Exercise 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
const sorted = ages.sort() 
console.log(sorted)
const min = Math.min(...sorted)
const max = Math.max(...sorted)

//Find the median age(one middle item or two middle items divided by two)
if(sorted.length % 2 == 1){
  const roundedAge = Math.floor((sorted.length)/2) 
  console.log(roundedAge)
}else if(sorted.length % 2 == 0){
  const firstMiddleAge = ((sorted.length)/2) - 1
  const secondMiddleAge = firstMiddleAge + 1
  const medianAge = (sorted[firstMiddleAge] + sorted[secondMiddleAge])/2
  console.log(medianAge)
}
//Find the average age(all items divided by number of items)
let sum = 0
for (let n = 0; n < ages.length; n++ ){ 
  sum += ages[n]  
}

const avg = sum/ages.length
console.log(avg)

//Find the range of the ages(max minus min)
const range = Math.max(...sorted) - Math.min(...sorted)
console.log(range)

//Compare the value of (min - average) and (max - average), use abs() method
const minAvg = Math.abs(min - avg)
const maxAvg =  Math.abs(max - avg)

minAvg > maxAvg ? console.log('The minimum average is greater than the maximum average'): console.log('The maximum average is greater than the minimum average')


//Slice the first ten countries from the countries array
console.log(countries.slice(0,10))

//Find the middle country(ies) in the countries array
const midCount = countries.length % 2
 let indexTwo
 indexTwo = Math.floor(countries.length/2)
 if(midCount == 1){
  console.log(countries.slice(indexTwo, indexTwo + 1))
 }else if (midCount == 0){
  console.log(countries.slice(indexTwo - 1, indexTwo + 1)) 
 }

 //Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

 let firstCount = []
 let secondCount = []

if(countries.length % 2 == 1 ){
  firstCount = countries.slice(0, Math.ceil(countries.length/2))
  secondCount = countries.slice(Math.ceil(countries.length/2),)
}else if (countries.length % 2 == 0){
  firstCount = countries.slice(0, (countries.length/2))
  secondCount = countries.slice((countries.length/2),)
}
console.log(`${firstCount}, \n ${secondCount}`) 
