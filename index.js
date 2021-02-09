function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

console.log(mondayWork())
console.log(mondayWork('skate'))


function outer(greeting, msg="It's a fine day to learn") { // 2
  const innerFunction =  function(name, lang="Python") { // 3
    return `${greeting}, ${name}! ${msg} ${lang}`; // 4
  }
  return innerFunction("student", "JavaScript"); // 5
}

console.log(outer("Hello")


function outer(greeting, msg="It's a fine day to learn") {
  const innerFunction =  function(name, lang="Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  }
  return innerFunction;
}


console.log(outer("Hello")("student", "JavaScript"))

console.log(outer("Hello")("student", "JavaScript"))
console.log(outer("Hello")("student", "JavaScript"))
