//FUNCTIONS

// 1: Greeter Function
// function greeter(name) {
//     if (typeof name === 'string') {
//         return `Hello, ${name}! Welcome to our esteemed restrurant..`;
//     } else {
//         return 'Please provide a valid name.';
//     }
// }

// const personName = 'Augusta';
// const greeting = greeter(personName);
// console.log(greeting);

//2 Area calculator - Rectangle
// function areaCalculator(length, breadth){
//     let areaOFARectangle = length * breadth
//     return areaOFARectangle
// }

// console.log(areaCalculator(6, 8))

//Area calculator - traingle
// function areaCalculator(breadth, height){
//     let areaOfATriangle = (breadth * height) / 2
//     return areaOfATriangle
// }
// console.log(areaCalculator(6, 2))

//Area calculator - circle
// function areaCalc(radius){
//     let areaOfACircle = Math.PI * Math.pow(radius, 2)
//     return areaOfACircle
// }
// console.log(areaCalc(8))

//3 Checking if a word is a palindrome
// function palindromeChecker (data){
//     const stringData = String(data).toLowerCase()
//     const reversedData = stringData.split(``).reverse().join(``)
//     return stringData === reversedData
// }
// console.log(palindromeChecker(`Do geese see God?`))


// 4 Number Reverser
// function reverseNumber(number) {
//     const stringNumber = String(number);
//     const reversedNumber = Number(stringNumber.split('').reverse().join(''));

//     return reversedNumber;
// }

// const originalNumber = 12345;
// const reversed = reverseNumber(originalNumber);
// console.log(`Original Number: ${originalNumber}`);
// console.log(`Reversed Number: ${reversed}`);

// 5 Simple sorting function

// function customSort(numbers, order = 'asc', compareFunction) {
//     if (!Array.isArray(numbers)) {
//         console.error('Input is not an array.');
//         return [];
//     }

//     const sortedNumbers = numbers.slice();

//     if (typeof compareFunction === 'function') {
//         sortedNumbers.sort(compareFunction);
//     } else {
//         sortedNumbers.sort((a, b) => (order === 'asc') ? a - b : b - a);
//     }

//     return sortedNumbers;
// }

// const numbersToSort = [5, 2, 8, 1, 9, 4];
// const ascendingOrder = customSort(numbersToSort, 'asc');
// const descendingOrder = customSort(numbersToSort, 'desc');

// console.log('Original Array:', numbersToSort);
// console.log('Ascending Order:', ascendingOrder);
// console.log('Descending Order:', descendingOrder);


//IF-ELSE

// 1: Age Eligibity checker
// function checkVotingEligibility() {
//     const userInput = prompt('Please enter your age:');
    
//     const age = parseInt(userInput);

//     if (isNaN(age) || age < 0) {
//         return 'Please enter a valid age.';
//     }
//     if (age >= 18) {
//         return 'You are eligible to vote!';
//     } else {
//         return 'Sorry, you are not eligible to vote yet.';
//     }
// }
// const eligibilityMessage = checkVotingEligibility();
// console.log(eligibilityMessage);

//2: EVEN AND ODD NUMBERS
// function checkEvenOrOdd(number) {
//     if (typeof number !== 'number' || isNaN(number)) {
//         return 'Please enter a valid number.';
//     }
//     if (number % 2 === 0) {
//         return `${number} is an even number.`;
//     } else {
//         return `${number} is an odd number.`;
//     }
// }

// const userInput = prompt('Please enter a number:');
// const inputNumber = parseInt(userInput);

// const resultMessage = checkEvenOrOdd(inputNumber);
// console.log(resultMessage);


// 3: VOWEL AND CONSONANT CLASSIFIER

// function classifyLetter(letter) {
//     if (typeof letter === 'string' && letter.length === 1) {
//         const lowercaseLetter = letter.toLowerCase();
//         if ('aeiou'.includes(lowercaseLetter)) {
//             return `${letter} is a vowel.`;
//         } else {
//             return `${letter} is a consonant.`;
//         }
//     } else {
//         return 'Please enter a single letter.';
//     }
// }
// const userInput = prompt('Please enter a letter:');
// const inputLetter = userInput ? userInput.trim()[0] : '';

// const resultMessage = classifyLetter(inputLetter);
// console.log(resultMessage);

// 4: Largest number finder

// let numbers = [20, 40, 8, 78, 90];
// let largestNumber = Math.max(...numbers);
// console.log(`The largest number is ${largestNumber}`);

// let number = [20, 40, 8, 78, 90];

// for (let num of number) {
//     if (isNaN(num)) {
//         console.log(`Enter a valid Number`);
//         break; 
//     }
// }

// 5: SIMPLE CALCULATOR
// function simpleCalculator(operator, num1, num2) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
//         default:
//             return 'Invalid operator';
//     }
// }

// const operator = prompt('Enter an operator (+, -, *, /):');
// const number1 = parseFloat(prompt('Enter the first number:'));
// const number2 = parseFloat(prompt('Enter the second number:'));

// const result = simpleCalculator(operator, number1, number2);
// console.log(`Result: ${result}`);

 
//SWICH STATEMENT
// 1: DAYS OF THE WEEK
// function printDayOfWeek(dayNumber) {
//     const days = ['Invalid day number', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return days[dayNumber] || days[0];
// }

// const dayNumber = parseInt(prompt('Enter a number (1-7) representing the day of the week:'));
// const dayName = printDayOfWeek(dayNumber);
// console.log(`The day is: ${dayName}`);

// 2: GRADE EVALUATOR
// function evaluateGrade(grade) {
//     if (isNaN(grade) || grade < 0 || grade > 100) {
//         return 'Invalid grade. Please enter a valid numerical grade between 0 and 100.';
//     }

//     if (grade >= 90) {
//         return 'A';
//     } else if (grade >= 80) {
//         return 'B';
//     } else if (grade >= 70) {
//         return 'C';
//     } else if (grade >= 60) {
//         return 'D';
//     } else if (grade >= 50) {
//         return `D`;
//     } else if (grade >= 40)
//         return 'F';
//     }

// const numericalGrade = parseFloat(prompt('Enter the numerical grade:'));
// const letterGrade = evaluateGrade(numericalGrade);
// console.log(`The letter grade is: ${letterGrade}`);

// 3: ROCK PAPER SCISSOR

// function playRPS(playerChoice, computerChoice) {
//     const player = playerChoice.toLowerCase();
    
//     if (!['rock', 'paper', 'scissors'].includes(player)) {
//         return 'Invalid choice. Please choose rock, paper, or scissors.';
//     }

//     if (player === computerChoice) {
//         return 'It\'s a tie!';
//     } else if ((player === 'rock' && computerChoice === 'scissors') ||
//                (player === 'paper' && computerChoice === 'rock') ||
//                (player === 'scissors' && computerChoice === 'paper')) {
//         return `You win! ${player} beats ${computerChoice}.`;
//     } else {
//         return `You lose! ${computerChoice} beats ${player}.`;
//     }
// }

// const playerChoice = prompt('Enter your choice (rock, paper, or scissors):');
// const computerChoices = ['rock', 'paper', 'scissors'];
// const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// const resultMessage = playRPS(playerChoice, computerChoice);
// console.log(resultMessage);

//4: MONTH NAME DISPLAYER
// function displayMonthNameSwitch(monthNumber) {
//     switch (monthNumber) {
//         case 1:
//             return 'January';
//         case 2:
//             return 'February';
//         case 3:
//             return 'March';
//         case 4:
//             return 'April';
//         case 5:
//             return 'May';
//         case 6:
//             return 'June';
//         case 7:
//             return 'July';
//         case 8:
//             return 'August';
//         case 9:
//             return 'September';
//         case 10:
//             return 'October';
//         case 11:
//             return 'November';
//         case 12:
//             return 'December';
//         default:
//             return 'Invalid month number';
//     }
// }

// const monthNumber = parseInt(prompt('Enter a number (1-12) representing the month:'));
// const monthName = displayMonthNameSwitch(monthNumber);
// console.log(`The month is: ${monthName}`);

// 5: SIMPLE MEUN
// function executeMenuChoice(choice) {
//     switch (choice) {
//         case '1':
//             console.log('You selected Rice. Rice will be executed.');
//             break;
//         case '2':
//             console.log('You selected Chicken and Chips. Chicken and Chips will be executed.');
//             break;
//         case '3':
//             console.log('You selected Plantain. Plantain will be executed.');
//             break;
//         case '4':
//             console.log('You selected Beans. Beans will be executed.');
//             break;
//         case '5':
//             console.log('You selected Pizza. Pizza will be executed.');
//             break;
//         default:
//             console.log('Invalid choice. Please select a valid option.');
//     }
// }

// const userChoice = prompt('Select an option (1-5) from the menu:');
// executeMenuChoice(userChoice);


//FOR LOOP
//1: Number summation
// function calculateSumUpToNumber(targetNumber) {
//     let sum = 0;

//     for (let i = 1; i <= targetNumber; i++) {
//         sum += i;
//     }

//     return sum;
// }
// const userInput = parseInt(prompt('Enter a number:'));
// const result = calculateSumUpToNumber(userInput);

// console.log(`The sum of all numbers from 1 to ${userInput} is: ${result}`);

// 2: Countdown timer
// function countdownTimer(startingNumber) {
//     if (startingNumber < 1) {
//         console.log('Please enter a valid starting number greater than or equal to 1.');
//         return;
//     }

//     for (let i = startingNumber; i >= 1; i--) {
//         console.log(i);
//     }
// } 

// const userInput = parseInt(prompt('Enter a starting number for the countdown:'));
// countdownTimer(userInput);

// 3: MULIPLICATION TABLE
// function multiplicationTableGenerator(number) {
//     console.log(`Multiplication Table for ${number}:`);

//     for (let i = 1; i <= 12; i++) {
//         const result = number * i;
//         console.log(`${number} x ${i} = ${result}`);
//     }
// }

// const userInput = parseInt(prompt('Enter a number to generate its multiplication table:'));
// multiplicationTableGenerator(userInput);

//4: ARRAY ELEMENT PRINTER
// function printArrayElements(arr) {
//     console.log('Array Elements:');

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// const elementArray = [1, 'two', true, { key: 'value' }, 5.5];
// console.log(elementArray);

//5:STRING REPEATER
// function repeatString(inputString, repeatCount) {
//     let repeatedString = '';

//     for (let i = 0; i < repeatCount; i++) {
//         repeatedString += inputString;
//     }

//     return repeatedString;
// }

// const userInputString = prompt('Enter a string:');
// const userRepeatCount = parseInt(prompt('Enter the number of times to repeat the string:'));

// const result = repeatString(userInputString, userRepeatCount);
// console.log(`Repeated String: ${result}`);




