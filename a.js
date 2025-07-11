// CHAPTER NO 20.
let firstNames = ["Lil", "Big"];
let lastNames = ["Zzz", "Boom"];

for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    console.log(firstNames[i] + " " + lastNames[j]);
  }
}
// "Innner loop runs 6 times because the inner loop runs completely each time the outer loop runs once".

let firstName = ["Lil", "Big"];
let lastName = ["Zzz", "Boom"];
for (let i = 0; i < firstName.length; i++) {
  for (let j = 0; j < lastName.length; j++) {
    if (i !== j) {
      console.log(firstName[i] + " " + lastName[j]);
    }
  }
}

// CHAPTER : 21 – Changing case:
// Write a program to convert a user’s input into lowercase and display it.

let word = prompt("Enter Random word")
let random = word.toLowerCase()
console.log("LowerCase:",random);

// Use toUpperCase() to normalize city names before comparison.

let user = prompt("Enter your city:")
let uppercase = user.toUpperCase()
if (uppercase === "KARACHI"){
    console.log("Wellcome to Karachi");
}else{
    console.log("City not found");
}

// Explain the importance of changing case in user input validation.

let string = "JavaScriptRocks";
let a = string.slice(0,5)
console.log(a);

// Get the last character of any user-provided string.

let string1 = "JavaScriptRocks";
let b = string1[14]
console.log("Last character:",b);

// Ask the user to input their full name and display the length of the input.

let userinput = prompt("Enter your word")
let userlength = userinput.length;
console.log("Length:",userlength);

// Chapter 23 – Strings: finding segments
// Use indexOf to find the position of “dog” in "The lazy dog sleeps.".

let sentence = "The lazy dog sleeps.";
let position = sentence.indexOf("dog");
console.log("Position:"+ position);

// Write a script that checks if the word “hello” exists in user input.

let user1 = prompt("Type something:")
let lowercaseinput = user1.toLowerCase()
if (lowercaseinput.includes("hello")){
    console.log("Yes hello exists in user input");
}else{
    console.log("The word 'hello' was not found");
}

// How does indexOf behave if the string isn’t found?
// If the string is not found, indexOf() returns -1.

// Chapter 24 – Strings: finding a character at a location
// Write a script to find the character at position 4 in the word “JavaScript”.

let findword = "JavaScript"
let solution = findword[4]
console.log("Position:4",solution);

// Ask a user for a string and a position; return the character at that position.

let string2 = prompt("Enter a string");
let position1 = prompt("Enter a position number")
let character = string2.charAt(position1)
console.log("Character at position " + position1 + " is: " + character);

// What happens when the index is out of bounds? Test it.
// If the index is out of bounds, charAt() returns an empty string instead of an error.

// Chapter 25 – Strings: replacing characters
// Replace the word “bad” with “good” in the string "This is a bad example.".

let example = "This is a bad example";
let changingstring = example.replace("bad","good")
console.log(changingstring);

// Replace all instances of "JS" with "JavaScript" in a given sentence.

let sentence1 = "I love JS. JS is powerful!";
let replace = sentence1.replaceAll("JS", "JavaScript");
console.log(replace);

// Use replace() to customize a template message like "Hello, NAME".

let template = "Hello,NAME"
let username = prompt("Enter your name");
let changing1 = template.replace("NAME",username)
console.log(changing1);

// Chapter 26 – Rounding numbers
// Demonstrate rounding 2.6 using Math.round, Math.floor, and Math.ceil.

let number = 2.6;
let rounded = Math.round(number);
let floored = Math.floor(number);
let ceiled = Math.ceil(number);
console.log(rounded);
console.log(floored);
console.log(ceiled);

// Ask the user to input a number and round it to the nearest integer.

let input = prompt("Enter a Decimal number");
let round = Math.round(input)
console.log(round);

// Compare Math.floor(-2.9) and Math.ceil(-2.9). Explain the difference.
// Math.floor(-2.9) returns -3 because it rounds down to the next lower integer.
// Math.ceil(-2.9) returns -2 because it rounds up to the next higher integer.

// Chapter 27 – Generating random numbers
// Generate a random number between 1 and 6 (like a dice roll).

let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll);

// Write a coin toss simulator using Math.random().

let toss = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(toss);

// Simulate a random password generator that picks a number between 1000 and 9999.

let password = Math.floor(Math.random() * 9000) + 1000;
console.log(password);

// Chapter 28 – Converting strings to integers and decimals
// Convert the string "45.67" to a float and log it.

let value = "45.67";
let number1 = parseFloat(value);
console.log(number1);

// Parse an integer from the string "123px". What’s the result?

let value1 = "123px";
let number2 = parseInt(value1);
console.log(number2);

// What happens when you try to parse "abc" to an integer?

let value2 = "abc";
let number3 = parseInt(value2);
console.log(number3);

// Chapter 29 – Converting strings to numbers, numbers to strings
// Convert a number to a string and show its type using typeof.

let number4 = 6
let convert1 = number4.toString()
console.log(convert1);
console.log(typeof convert1);

// Convert the string "2025" to a number and add 10.

let string4 = "2025"
let string3 = parseInt(string4)
let result = string3 + 10
console.log(result);

// Explain the difference between parseInt and Number() using examples.

let str1 = "123abc";
console.log("parseInt('123abc'):", parseInt(str1));  
console.log("Number('123abc'):", Number(str1));    

let str2 = "45.67";
console.log("parseInt('45.67'):", parseInt(str2));  
console.log("Number('45.67'):", Number(str2));   

let str3 = "abc123";
console.log("parseInt('abc123'):", parseInt(str3));   
console.log("Number('abc123'):", Number(str3));     

// Chapter 30 – Controlling the length of decimals
// Use .toFixed(2) to display only 2 decimal places of 123.45678.

let number5 = 123.45678;
let fixed = number5.toFixed(2)
console.log(fixed);

// How would you convert "12.999" to a number and round it to 1 decimal?

let str4 = "12.999";
let num1 = parseFloat(str4);          
let rounded1 = num1.toFixed(1); 
console.log(rounded1);

// Ask the user to input a decimal and display it rounded to 3 decimal places.

let decimal = prompt("Enter a decimal number")
let float = parseFloat(decimal)
let result1 = float.toFixed(3)
console.log(result1);

// Chapter 31 – Getting the current date and time
// Write a script to display the current date and time using new Date().

let dateandtime = new Date()
console.log(dateandtime);

// Extract and display only the year from the current date.

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log("Current Year:", currentYear);

// Display a greeting based on current time (AM/PM).

let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 12) {
  console.log("Good Morning!");
} else {
  console.log("Good Evening!");
}

// Chapter 32 – Extracting parts of the date and time
// Display the current day, month, and year separately.

let currentDate1 = new Date();
let day = currentDate1.getDate();         
let month = currentDate1.getMonth() + 1;  
let year = currentDate1.getFullYear(); 
console.log(day);
console.log(month);
console.log(year);

// Extract the hours and minutes from the current time.

let currentTime1 = new Date();
let hours1 = currentTime1.getHours();    
let minutes = currentTime1.getMinutes();
console.log("Hours:", hours1);
console.log("Minutes:", minutes);

// Create a digital clock format like "13:45" using Date object methods.

let now = new Date();
let hours2 = now.getHours();
let minutes1 = now.getMinutes();
if (minutes1 < 10) {
  minutes1 = "0" + minutes1;
}
if (hours2 < 10) {
  hours2 = "0" + hours2;
}
let timeString = hours2 + ":" + minutes1;
console.log("Current Time:", timeString);
