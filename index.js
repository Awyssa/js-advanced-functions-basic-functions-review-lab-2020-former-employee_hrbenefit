function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

// function outer(greeting, msg="It's a fine day to learn") { // 2
//   const innerFunction =  function(name, lang="Python") { // 3
//     return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//   }
//   return innerFunction("student", "JavaScript"); // 5
// }
//
// console.log(outer("Hello")

// function outer(greeting, msg="It's a fine day to learn") {
//   const innerFunction =  function(name, lang="Python") {
//     return `${greeting}, ${name}! ${msg} ${lang}`;
//   }
//   return innerFunction;
// }

// function outer(greeting, msg="It's a fine day to learn") {
//   return function(name, lang="Python") {
//     return `${greeting}, ${name}! ${msg} ${lang};`
//   }
// }
//
// console.log(outer("Hello")("student", "JavaScript"))
//

function wrapAdjective(flair = '*') {
  return function(innerVal = 'special') {
    return `You are ${flair}${innerVal}${flair}!`
  }
}

console.log(wrapAdjective()())

let Calculator = {
  let function add(number) {
    return number + 1
  }
  type: 'casio',
  age: 10,
  color: 'blue'
}

console.log(Calculator)
