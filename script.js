'use strict'
//Day 1

//comments can make code readable
//Welcome to 30DaysOfJavaScript
/*comments can make code readable,
 easy to reuse and informative*/

 //declare variables and assign string, boolean, undefined and null data types
 let newvar = "Natty codes"
 let code = true
 let me
 let nothing = null

 //use the JavaScript typeof operator to check different data types.
console.log(typeof newvar)
console.log(typeof code) 
console.log(typeof me) 
console.log(typeof nothing) 

//Declare four variables without assigning values
let firstName 
let lastName 
let age 
let hobby

//Declare four variables with assigned values
firstName = 'Natty'
lastName = 'Dan'
age  = 50
hobby  = 'coding'

//first name, last name, marital status, country and age in multiple lines
firstName = 'Natty'
lastName = 'Dan'
let maritalStatus = 'single'
let country = 'Nigeria'
age  = 50

//first name, last name, marital status, country and age in a single line
firstName = 'Natty'; lastName = 'Dan'; maritalStatus = 'single'; country = 'Nigeria'; age  = 50;


//myAge and yourAge and assign them initial values and log to the browser console
let myAge = 25  
let yourAge =30

console.log(`I am ${myAge} years old.`)
console.log(`You are ${yourAge} years old.`)


//Day 2
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

//Print the string on the browser console using console.log()
console.log(challenge)

//Print the length of the string on the browser console using console.log()
console.log(challenge.length)

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3,7))    

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3,21))

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))

//Split the string into an array using split() method
console.log(challenge.split())

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let media = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(media.split(','))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'))

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))   

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J')) 

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

//Use lastIndexOf to find the position of the first occurrence of the word because in the following sentence
console.log(sentence.lastIndexOf('because'))

//Use search to find the position of the first occurrence of the word because in the following sentence
console.log(sentence.search('because'))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30 Days Of JavaScript'))

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('30 Days Of JavaScript'))

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let JavaScript = '30 Days of'
console.log(JavaScript.concat("JavaScript")) // 30DaysOfJavaScript

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))

//Using console.log() print out the following statement:
console.log('There is no exercise better for the heart than reaching down and lifting people up.')

//Using console.log() print out the following quote by Mother Teresa:
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let numberString = '10'
console.log(numberString === 10)
console.log(Number(numberString))

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let numString = '9.8'
console.log(parseFloat(numString)  === 10 )
console.log(parseFloat(numString)  === 10 )
console.log(Math.round(numString))

//check if 'on' is found in both python and jargon
let python = 'python'
let jargon = 'jargon'
console.log(python.includes('on'))     
console.log(jargon.includes('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.
jargon = 'I hope this course is not full of jargon'
console.log(jargon.includes('jargon'))

//Generate a random number between 0 and 100 inclusively.
let randomGenerator = Math.trunc((Math.random() * 101 ))  
console.log(randomGenerator)

//Generate a random number between 50 and 100 inclusively.
randomGenerator = 50 + Math.trunc((Math.random() * 51 ))  
console.log(randomGenerator)

//Generate a random number between 0 and 255 inclusively.
randomGenerator = (Math.random() * 256 )  
console.log(randomGenerator)

//Access the 'JavaScript' string characters using a random number.
JavaScript = 'JavaScript'
randomGenerator = Math.ceil((Math.random() * 9))
console.log(randomGenerator)
console.log(JavaScript[randomGenerator])

//Use console.log() and escape characters to print the following pattern.

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substring(30,55))

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.match(/love/gi).length)

//Clean the following text and find the most frequent word (hint, use replace and regular expressions)
const sentenceTwo = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentenceTwo.replace(/[&@%#$;']/g,'')) 

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let incomeSentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary = Number(incomeSentence.substring(9, 13))
let annualBonus = Number(incomeSentence.substring(42, 48))
let online = Number(incomeSentence.substring(66, 72))
let total = salary + annualBonus + online
console.log(total)

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// const cleanedSentence = sentence.replace(/[@#%&;!$]/g, "");
// let onlySentenceWords = sentence.replace(/[@#%&;!$?.,]/g, "");

// console.log(onlySentenceWords.split(' '))

// console.log(onlySentenceWords);
// let sentenceWords = onlySentenceWords.split(' ');
// let uniqueSentenceWords = [];
// let uniqueSentenceWordsFrequencies = [];
// for (let i = 0; i < sentenceWords.length; i++) {
//     if (!uniqueSentenceWords.includes(sentenceWords[i])) {
//         uniqueSentenceWords.push(sentenceWords[i]);
//     }
// }
// console.log(uniqueSentenceWords);
// for (let i = 0; i < uniqueSentenceWords.length; i++) {
    
//     uniqueSentenceWordsFrequencies.push(onlySentenceWords.match(wordSearch).length);
// }
// let wordSearch = new RegExp(`\\b${uniqueSentenceWords[5]}\\b`, 'gi');
// console.log(wordSearch) 

// console.log(uniqueSentenceWordsFrequencies);
// let maxFrequency = Math.max(...uniqueSentenceWordsFrequencies);
// console.log(Math.max(...uniqueSentenceWordsFrequencies));
// let maxFrequencyIndex = uniqueSentenceWordsFrequencies.indexOf(maxFrequency);
// console.log(uniqueSentenceWordsFrequencies.indexOf(maxFrequency));
// let mostRepeatedWord = uniqueSentenceWords[maxFrequencyIndex];
// console.log(mostRepeatedWord);


// const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// let [monthlySalary, annualBonus, monthlyCourse] = income.match(/\d+/g);
// [monthlySalary, annualBonus, monthlyCourse] = [parseInt(monthlySalary), parseInt(annualBonus), parseInt(monthlyCourse)];
// console.log([monthlySalary, annualBonus, monthlyCourse]);
// const annualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourse * 12);
// console.log(annualIncome);