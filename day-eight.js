'use strict'
//Create an empty object called dog
const dog = {}

//Print the the dog object on the console
console.log(dog)

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'People'
dog.legs = 4
dog.color = 'brown'
dog.age = 150
dog.bark = function() {
    return 'woof woof'
}

//Get name, legs, color, age and bark value from the dog object
const dogValues = Object.values(dog)
console.log(dogValues)

//Set new properties the dog object: breed, getDogInfo.
dog.breed = 'German Shepherd'
dog.getDogInfo = function() {
    return `I am a ${this.breed} and my name is ${this.name} and i am ${this.color}. I am ${this.age} years old.`
}
console.log(dog.getDogInfo())
//Exercises: Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  //Find the person who has many skills in the users object. // 
  const result = Object.entries(users).sort((a, b) => a[1].skills.length - b[1].skills.length).pop()
  console.log(result)

  //or
  
  // const res = Object.fromEntries([
  //   Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
  // ]);
  // console.log(res);

  //or

//destructuring makes life easier
//this was Ola's idea
  let length = 0
  let mostSkilled
  for(const user in users){
    let { [user]: {skills} } = users
    if (skills.length <= length) continue
    length = skills.length
    mostSkilled = user
  }
console.log(mostSkilled)


  //Count logged in users, count users having greater than equal to 50 points from the following object.
 const loggedInUsers = Object.values(users).filter(user => user.isLoggedIn).length
 console.log(loggedInUsers)

 const equalTo50 = Object.values(users).filter(user => user.points >= 50 ).length
 console.log(equalTo50)

  //Find people who are MERN stack developer from the users object
  //still thinking of a better way to go about this, find this sol online and it doesnt sync yet
  const mern = Object.entries(users).filter(([a, user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name).join(", ")
  console.log(mern)

  //another method suggested by Ola
  let MernDevs = []
  for(const user in users){
    let { [user]: {skills} } = users
    let allSkills  =  new Set([...skills, 'MongoDB', 'Express', 'React', 'Node'])
    if (allSkills.size === skills.length) 
    MernDevs = [...MernDevs, user]  
  }
  console.log(MernDevs)

  
  //Set your name in the users object without modifying the original users object
  users.Natacha = {
    email: 'danbadannatacha@gmail.com',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    age: 50,
    isLoggedIn: false,
    points: 50
  }

  console.log(users.Natacha)

  //Get all keys or properties of users object
  let prop = Object.keys(users)
  console.log(prop)

  //Get all the values of users object
  let values = Object.values(users)
  console.log(values)

  //Use the countries object to print a country name, capital, populations and languages.
  //no data to work with.


  //Exercises: Level 3

  //Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties 
  //and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
  // Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
  const personAccount = {
    firstName: 'Natacha',
    lastName: 'Danbadan',
    incomes:{
      basicIncome: 9000000000,
      remoteJobs: 9000000000,
      extras:9000000000
    },
    expenses: {
      data:100000,
      food:100000,
      upsskill:100000000,
      others:10000000
    },
    totalIncome () {
      let totalIncome = Object.values(this.incomes)
      return totalIncome.reduce((previousIncome, currentIncome)=> previousIncome + currentIncome, 0)
    },
    totalExpense () {
      let totalExp = Object.values(this.expenses)
      return totalExp.reduce((previousExp, currentExp)=> previousExp + currentExp, 0)
    },
    accountInfo () {
      return `this account is owned by Mr. Trending`
    },
    addIncome (remote) {
      return this.incomes[remote] = 1000000
    },
    addExpense (orphanageHome) {
      return this.expenses[orphanageHome] = 3000000
    },
    accountBalance() {
      return this.totalIncome() - this.totalExpense()
    }

  }
  console.log(personAccount.totalIncome())
  console.log(personAccount.totalExpense())
  console.log(personAccount.accountInfo())
  console.log(personAccount.addIncome())
  console.log(personAccount.addExpense())
  console.log(personAccount.accountBalance())

//Create a function called signUp which allows user to add to the collection. 
//If user exists, inform the user that he has already an account.
const usersData = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

const userIdGenerator = () => {
  return `${Math.floor(Math.random() * 0XABCEFD).toString(16).padEnd(6, '0')}`;  
}

const signUp = (newUsername, password) => {
  for(let user of usersData) {
    let date = (new Date()).toLocaleString()
    if (user.username.includes(newUsername)) {
    return `you already have an account`
    } else {
      usersData.push({
        _id: userIdGenerator(),
        username: `${newUsername}`,
        email: `${newUsername}@${newUsername}.com`,
        password: `${password}`,
        createdAt:date,
        isLoggedIn: true,
      });
      return usersData
    }
  }
}

console.log(signUp('Natacha', '456123'))

//Create a function called signIn which allows user to sign in to the application
// const signIn = () => {
// for(let user of usersData){
//   if (user.isLoggedIn == true) {
//     return 'Already logged in'
//   }
//   else { 
//     user.isLoggedIn == true 
//   } 
//   return usersData
// }
// }
// console.log(signIn())


const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//Create a function called rateProduct which rates the product
//Create a function called averageRating which calculate the average rating of a product
//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.