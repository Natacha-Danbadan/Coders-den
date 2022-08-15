'use strict'
//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let userage = Number(prompt('Enter your age', 'age'))
let drivingCriteria = () => {
    if(userage >= 18){
        alert('You are old enough to drive')
    }else if(userage < 18){
        let wait = 18 - userage
        alert(`you need to wait ${wait} years more for you to drive`)
    }
}
drivingCriteria()

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = Number(prompt('Enter your age', 'age'))
let myAge = Number(prompt('Enter my age', 'age'))

let ageCalc = () => {
    if(yourAge > myAge){
        alert('You are older than me')
    }else if(yourAge < myAge){
        alert(`I'm older than you`)
    }else{
        alert(`we are age mates`)
    }
}
ageCalc()
//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 20
let b = 18

//using if else
let greaterfunc = (a,b) => {
    if( a > b ){
        return `${a} is greater than ${b}`
    }else if(b > a) {
        return `${a} is less than ${b}`
    }
}
console.log(greaterfunc(20, 18)) 

//using tenary
let greaterfuncTwo = (a,b) => {
    a > b
    ? console.log(`${a} is greater than ${b}`)
    :  console.log(`${a} is less than ${b})`)
    
}
console.log(greaterfuncTwo(20, 18)) 

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let checkNumfunc = (x) => {
    if( x % 2 === 0 ){
        return `the number is even`
    }else{
        return `the number is odd`
    }   
}
console.log(checkNumfunc(3))

//Exercise two 
//Write a code which can give grades to students according to theirs scores:
let scoreGrade = (y) => {
     if (y >= 80 && y <= 100) {
        return `your grade is A`
     }else if ( y >= 70 && y < 90) {
        return `your grade is B`
     }else if (y >= 60 && y < 70) {
        return `your grade is C` 
    }else if (y >= 50 && y < 60) {
        return `your grade is D`
    }else if(y >= 0 && y < 50){
        return `your grade is f`
    }else {
        return `your grade was not recorded`
    }
 }
 console.log(scoreGrade(59))
 //Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

 let month  = prompt('Enter a season', 'season') 
 monthEdited = month.toLowerCase()
 switch(monthEdited){
    case 'december': 
    case 'january': 
    case 'february': 
        console.log(`It's winter`);
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log(`It's spring`);
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log(`It's summer`);
        break;
    case 'september':
    case 'october':
    case 'november':
        console.log(`It's autumn`);
        break;
    default:
        console.log(`not a month`)
}

//Check if a day is weekend day or a working day. Your script will take day as an input.

let daySpecial = (X) => {
    let day = X.toLowerCase();
    const final = X.slice(0,1).toUpperCase() + X.slice(1, X.length).toLowerCase();
    switch(true) {
        case day === 'saturday':
        case day === 'sunday':
            return `${final} is a weekend.`;
            break;
        case day === 'monday':
        case day === 'tuesday':
        case day === 'wednesday':
        case day === 'thursday':
        case day === 'friday':
            return `${final} is a working day.`;
            break;
        default:
            return `${final} is not a valid day of the week.`;
    }
}
console.log(daySpecial('SaturdaY'));