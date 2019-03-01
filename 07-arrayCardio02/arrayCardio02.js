// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

const date = new Date
const currentYear = date.getFullYear()

// Predicate Functions
const configureAge = ({name, year}) => ({name, year, age: currentYear - year})
// const configureAge = person => Object.assign({}, person, {age: currentYear - person.year})
const olderThan19 = person => person.age > 19

// Placeholder for people w/ ages added
const newPeople = [...people].map(configureAge)

// Example of USING a predicate function w/ filter
const peopleUnder19 = people
  .map(configureAge)
  .filter(ea => !olderThan19(ea))

// console.log(peopleUnder19) // [ { name: 'Lux', year: 2015, age: 4 } ]

// Example of Array.Prototype.every()
// console.log(people.every(person => Number(person.year))) // true


// Solution 01
const solution01 = [...people]
  .map(configureAge)
  .some(olderThan19) // true

// Solution 02
const solution02 = [...people]
  .map(configureAge)
  .every(olderThan19) // false



// Array.prototype.find()

// Here is an example of using Array.Prototype.find()
// const myFavComment = comments
  // .find(comment => comment.text === 'Love this!')

// console.log(myFavComment) // { text: 'Love this!', id: 523423 }

// byID :: Int -> (Person -> Bool)
const byID = id => comment => comment.id === id

// console.log(comments.find(byID(823423))) // { text: 'Super good', id: 823423 }

const solution03 = [...comments]
  .find(comment => comment.id === 823423)

// console.log(solution03) // { text: 'Super good', id: 823423 }

// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const indexOfOurComment = comments.findIndex(byID(823423))

const newComments =
  comments
    // Everything BEFORE the index
    .slice(0, indexOfOurComment)
    // Everything AFTER the index
    .concat(comments.slice(indexOfOurComment + 1))

console.log(newComments)