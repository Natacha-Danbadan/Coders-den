'use strict'
const string = "bat, cat, fat, dat, gat, tata, mat"
const pattern = /[bcf]at/gi
console.log(string.match(pattern))

const patternTwo = /@\w+\.\w{2,3}(\.\w{2,3})?/g // the one withe the parentheses is what we made optiona hence the grouping
const stringTwo = "abc.com abc@mail @mail.com @mail.co.ke"
console.log(stringTwo.match(patternTwo))

const str = 'I love JavaScript'
const patte = /love/gi
const result = patte.test(str)
console.log(result)

const strTwo = 'I love JavaScript are gaaary juryat'
const patternTwoo = /love/g
const resultwo = strTwo.match(patternTwoo)
const resulthree = strTwo.search(patternTwoo)
console.log(resultwo)
console.log(resulthree)

const txt = 'Python is the most beautiful language that a human begin has ever created. I recommend python for a first programming language'

const matchReplaced = txt.replace(/python/gi, 'JavaScript')
console.log(matchReplaced)

const text = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const match = text.replace(/%/g, '')
console.log(match) 

const method = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const stringss = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = stringss.match(method)
console.log(matches)

const p = /\d+/g  // d is a special character which means digits
const t = 'This regular expression example was made in January 12,  2020.'
const m = t. match(p)
console.log(m)

let a = 'I am not sure if there is a convention how to write the word e-mail. Some people write it email others may write it as Email or E-mail.'
let b = /[Ee]-?mail/g  // ? means optional
let c = a.match(b)
console.log(c)

 a = 'This regular expression example was made in December 6, 2019.'
 b = /\b\w{4}\b/g /// \b[a-zA-Z]{4}\b/g this is for only letters
 c = a.match(b)
 console.log(c)

b = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
c = a.match(b)
console.log(c)


//Day 12
//Calculate the total annual income of the person from the following text. 
let income = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let exp = /\d+/g
let number = income.match(exp)
let totalIncome = 0
for(let num of number ){
    let newNum = Number(num)
    totalIncome += newNum
}
console.log(totalIncome)

//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. 
//Extract these numbers and find the distance between the two furthest particles.

let position = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction."
let numbers  = /-?\d/g
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12
let points = position.match(numbers)
console.log(points)

let sortedpoints = points.sort((a,b) => a - b)
console.log(sortedpoints)

let distance = sortedpoints[sortedpoints.length - 1] - sortedpoints[0]
console.log(distance)

//Write a pattern which identify if a string is a valid JavaScript variable

const is_valid_variable = name => {
    let pattern = /^[a-zA-Z]+_?[a-zA-Z]*$/
    return pattern.test(name)
}
console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))

//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
let paragraph = "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love."

const tenMostFrequentWords = (paragraph,number) => { 
    const pattern = /\w+/g
    const wordsArray = paragraph.match(pattern)
    const uniqueWords = [...new Set(wordsArray)]
    const final = []
    let regex 
    for (const word of uniqueWords) {
        regex = new RegExp(`\\b${word}\\b`, "gi")
        final.push({
            "word":word,
            "count":paragraph.match(regex).length
        })
    }
    return final.sort((a, b) => b.count - a.count).filter((item, idx, arr) => idx < (number ||  arr.length))
    
}  
console.log(tenMostFrequentWords(paragraph, 5))


//Exercises: Level 3
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
//After cleaning, count three most frequent words in the string

const threeMostFrequentWords = (sentence,num) => {
    const cleanText = sentence.replace(/[%@#$&;!?]/g, '')
    const patternThree = /\w+/g
    const wordsArr = cleanText.match(patternThree)
    let cleaned = [...new Set(wordsArr)]
    let output = []
    let reg
        for (const word of cleaned){
            reg = new RegExp(`\\b${word}\\b`, 'gi')
            output.push({
                "word":word,
                "count":cleanText.match(reg).length
            })
        }
    return output.sort((a, b) => b.word.localeCompare(a.word)).sort((a,b) => b.count - a.count).filter((item, idx, arr) => idx < (num || arr.length) )
}
console.log(threeMostFrequentWords(sentence, 3))


//saw this at stac overf
//  function nthMostCommon(string, amount) {
//     var wordsArray = string.split(/\s/);
//     var wordOccurrences = {}
//     for (var i = 0; i < wordsArray.length; i++) {
//         wordOccurrences['_'+wordsArray[i]] = ( wordOccurrences['_'+wordsArray[i]] || 0 ) + 1;
//     }
//     var result = Object.keys(wordOccurrences).reduce(function(acc, currentKey) {
//         /* you may want to include a binary search here */
//         for (var i = 0; i < amount; i++) {
//             if (!acc[i]) {
//                 acc[i] = { word: currentKey.slice(1, currentKey.length), occurences: wordOccurrences[currentKey] };
//                 break;
//             } else if (acc[i].occurences < wordOccurrences[currentKey]) {
//                 acc.splice(i, 0, { word: currentKey.slice(1, currentKey.length), occurences: wordOccurrences[currentKey] });
//                 if (acc.length > amount)
//                     acc.pop();
//                 break;
//             }
//         }
//         return acc;
//     }, []);
//     return result;
// }
// console.log(nthMostCommon(paragraph, 5))

