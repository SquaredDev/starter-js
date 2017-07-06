// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y){
    if (x > y) {
      return x
    }
    else if (x < y) {
      return y
    }
    else if (x === y) {
      return x + ' equals ' + y
    }
    else {
      return 'peanut butter sandwich'
    }
}

console.log(max(1, 4));
console.log(max(3, 2));
console.log(max(5, 5));
console.log(max('hungry!'));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
  if (x > y && x > z) {
    return x
  }
  else if (y > x && y > z) {
    return y
  }
  else if (z > x && z > y) {
    return z
  }
  else if (x === y && y === z) {
    return x + ' equals ' + y + ' equals ' + z
  }
  else {
    return 'peanut butter sandwich'
  }
}

console.log(maxOfThree(1, 4, 0));
console.log(maxOfThree(3, 2, 6));
console.log(maxOfThree(7, 2, 6));
console.log(maxOfThree(5, 5, 5));
console.log(maxOfThree('hungry!'));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return 'Yes, ' + char + ' is a vowel.'
    }
    else if (char === 'y') {
      return 'Well, ' + char + ' is sometimes used as a vowel.'
    }
    else {
      return 'Nope, that\'s not a vowel.'
    }
}

console.log(isVowel('e'));
console.log(isVowel('y'));
console.log(isVowel('t'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(x, y) {
  return x + y
}

console.log(sum(3, 5));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(x, y, z) {
  return ((x + y + z) / 3)
}

console.log (avg(1, 2, 3));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(x) {
  return x.length
}
console.log(getLength('The quick fox jumps over the lazy brown dog.'));
console.log(getLength('Woof'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x, y) {
  if (x < y) {
    return true
  }
  else {
    return false
  }
}

console.log(greaterThan (1, 3));
console.log(greaterThan (4, 2));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name) {
  return "Hello, " + name + "!"
}

console.log(greet('Ryan'));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(adjective1, noun1, verb1, adjective2, noun2) {
  return 'The ' + adjective1 + ' ' + noun1 + ' ' + verb1 + ' around the ' + adjective2 + ' ' + noun2 + ', it was ever so cute.'
}

console.log(madlib('tiny', 'elephant', 'flies', 'annoyed', 'beetle'));

//Well was it fun?

console.log('What\'s next?');
