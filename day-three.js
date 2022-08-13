'use strict'

//Day 3 exercise
//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Natty'; console.log(typeof firstName)
let lastName = 'Dan'; console.log(typeof lastName)
let country = 'Nigeria'; console.log(typeof country)
let city = 'Delta'; console.log(typeof city)
let age  = 50; console.log(typeof age)
let isMarried = false; console.log(typeof isMarried)
let year = 2022; console.log(typeof year);

//Check if type of '10' is equal to 10
(console.log(typeof('10') == 10));

//Check if parseInt('9.8') is equal to 10
(console.log(parseInt('9.8') == 10));

//Write three JavaScript statement which provide truthy value.
console.log(25 > 20) 
console.log(0 !== true) 
console.log(""!== true)  
console.log(10 == '10') 
console.log(3 !== NaN) 

//Write three JavaScript statement which provide falsy value.
console.log(false == null)
console.log(0 == true) 
console.log("" == true) 
console.log(5 == NaN)

//Figure out the result of the following comparison expression
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

//Find the length of python and jargon and make a falsy comparison statement.
let python = 'python'
let jargon = 'jargon'
console.log(python.length > jargon.length)

//Figure out the result of the following expressions
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!(python.includes('on') && jargon.includes('on')))

//What is the year today?
let dateToday = new Date()
let thisYear = (dateToday.getFullYear())
console.log(thisYear)

//What is the month today as a number
let month = dateToday.getMonth() +  1
console.log(month)

//What is the date today?
console.log(dateToday)

//What is the day today as a number
let day = dateToday.getDate()
console.log(day)

//What is the hours now?
let hours = dateToday.getHours()
console.log(hours)

//What is the minutes now?
let minutes = dateToday.getMinutes()
console.log(minutes)

let seconds = dateToday.getSeconds()
console.log(seconds)


//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(dateToday.getTime())

//Exercise two
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base =  prompt('Enter base', 'base');
let height =  prompt('Enter height', 'height');
let areaOfTriangle = 0.5 * base * height;
console.log(area);

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a =  prompt('Enter a', 'a');
let b =  prompt('Enter b', 'b');
let c = prompt('Enter c', 'c');
let perimeterOfTriangle = a + b + c;
// console.log(perimeterOfTriangle);

//calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length =  prompt('Enter length', 'length');
let width =  prompt('Enter width', 'width');
let areaOfRectangle = length * width;
let perimeterOfRectangle = 2 * (length + width);
console.log(areaOfRectangle);
console.log(perimeterOfRectangle);

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const pi = 3.14
let radius = prompt('Enter radius', 'radius');
let areaOfCircle = pi * radius * radius
let circumeferenceOfCircle  = 2 * pi * radius
console.log(areaOfCircle);
console.log(circumeferenceOfCircle);

//Calculate the slope, x-intercept and y-intercept of y = 2x -2 */

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
const m = (y2 - y1) / (x2 - x1)
console.log(m)

//Compare the slope of above two questions.

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Enter hours', 'hours');
let rate = prompt('Enter rate', 'rate');
let earnings = hours * rate
console.log(`Your weekly earning is ${earnings}`); */

//If the length of your name is greater than 7 say, your name is long else say your name is short.
if(firstName.length > 7) {
    console.log('my name is long')
}else {
    console.log('my name is short')
}
//Compare your first name length and your family name length and you should get this output.

if(firstName.length > lastName.length) {
    console.log(`my first name, ${firstName}  is longer than my family name, ${lastName}`)
}
    
//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
let difference = myAge - yourAge
console.log(`I am ${difference}  years older than you`)

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthyear = prompt('enter your year of birth', 'year')
let drivingCriteria = thisYear - birthyear
let waitTime = 18 - drivingCriteria 
if(drivingCriteria > 18){
    console.log(`You are ${drivingCriteria}. You are old enough to drive`)
}else {
    console.log(`You are ${drivingCriteria}. You will be allowed to drive after ${waitTime} years`)
}

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let userAge = prompt('enter your current age', 'age')
let YearInsecs = 31536000
console.log(`You lived ${userAge * YearInsecs} seconds`)

//Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

