/** Q1
	 * Write a program to read the radius of a circle and calculate 
	 * its area using the formula:
     
let r =parseFloat(prompt("Enter Radius of Circle"))

if (r > 0) 
{
  let area = (22.0 / 7) * r * r
  console.log("Area of Circle with Radius " + r.toFixed(4) + " is " + area.toFixed(4))
} 
else {
      console.log("Invalid")
}
*/

/** Q2 Write a Java program to calculate Simple Interest using the formula:
    SI = (P × N × R) / 100
 	Where:
	P = Principal amount
	N = Number of years
	R = Rate of interest

let P = prompt("Enter Principle Amount")
let R = prompt("Enter Rate Of Interest")
let Y = prompt("Enter Number tof Years")

SI = (P * Y * R) / 100
console.log("The Simple Interest Amount is "+SI.toFixed(2))

*/

/** Q3
	 * This program calculates Compound Interest using the formula:
 		F = P × (1 + i)ⁿ 

let P = prompt("Enter Principal Amount:")
let R = prompt("Enter Annual Interest Rate (%):")
let N = prompt("Enter Number of Years:")

let i = R / 100

let CI = P * (1 + i) ** N

console.log("Compound Interest Is " + CI.toFixed(2))

*/

/** Q4
	 * This program converts temperature from Fahrenheit to Celsius using the formula:
		C = (5/9) × (F - 32)

let F = parseFloat(prompt(" Enter the Fahrenheit : "))
C = (5 / 9.0) * (F - 32) 
console.log(F.toFixed(6) + " deg F is " + C.toFixed(6) + " deg C")

*/

/** Q5
	 *  This program calculates the Volume and Surface Area of a sphere 
	 *  using the following formulas:
			Volume (V) = (4/3) × π × r³
			Area (A) = 4 × π × r² 

let r = prompt( " Enter the radius of the sphere : ")

if (r > 0) {
  let volume = (4 / 3) * Math.PI * r * r * r
  let area = 4 * Math.PI * r * r

  console.log("Volume of Sphere: " + volume.toFixed(6))
  console.log("Surface Area of Sphere: " + area.toFixed(6))
} 
else {
  console.log("Invalid")
}

*/

/** Q6
	 * This program allows the user to enter 3 test marks of a student, 
	 calculates the total and average, and displays the result.

let m1 = parseFloat(prompt("Enter Mark 1 :"))
let m2 = parseFloat(prompt("Enter Mark 2 :"))
let m3 = parseFloat(prompt("Enter Mark 3 :"))

Total  = m1 + m2 + m3 
Average = ( m1 + m2 + m3 ) / 3

console.log(" Total Mark ", + Total)
console.log(" Average Mark ", + Average)

*/

/** Q7
	 * This program reads a five-letter word from the user and encodes 
	 it by subtracting 1 from the ASCII value of each character. 
	 It then prints the newly encoded word.

let word = prompt("Enter a Five letter word:")

if (word.length == 5) {
    let encoded = ""

    for (let i = 0; i < word.length; i++) 
	{
      encoded += String.fromCharCode(word.charCodeAt(i) - 1)
	}

    console.log(encoded)
} 
else 
{
    console.log("Invalid input .. Please enter exactly five letters ")
}

*/

/** Q8
	 * This program calculates the sum of the first n odd integers 
	 (Example: 1 + 3 + 5 + ... + (2n - 1)).


let n = parseInt(prompt("Enter how many odd numbers to sum:"))

if (n > 0) {
    let sum = 0
    let series = ""

    for (let i = 1; i <= (2 * n - 1); i += 2) {
        sum += i
        series += i
        if (i < (2 * n - 1)) series += " + "
    }

    console.log(" Sum of first " + n + " odd numbers is " + sum +)
    console.log( + series + " = " + sum )
} 
else {
    console.log("Invalid input . Please enter a positive number")
}

*/

/** Q9
	 * This program finds the sum of even numbers between 2 and 30 (inclusive).

let n1 = parseInt(prompt("Enter the starting number:"))
let n2 = parseInt(prompt("Enter the ending number:"))

let sum = 0 
let num = [] 

for (let i = n1 ; i <= n2 ; i++) {
    if (i % 2 == 0) {
        sum += i
        num.push(i)
    }
}

console.log(" Sum of even numbers from " + n1 + " to " + n2 + " = " + sum )
console.log(" Even numbers : " + num.join(" + ")+ " = " + sum )

*/

/** Q10
	 * This program calculates and prints the product of odd numbers from 1 to 15.
		(Odd numbers: 1, 3, 5, 7, ..., 15)

let n1 = parseInt(prompt("Enter the starting number:"))
let n2 = parseInt(prompt("Enter the ending number:"))

let mul = 1
let num = [] 

for (let i = n1 ; i <= n2 ; i++) {
    if (i % 2 !== 0) {
        mul *= i
        num.push(i)
    }
}

console.log(" Product of odd numbers from " + n1 + " to " + n2 + " = " + mul )
console.log(" Odd numbers : " + num.join(" x ")+ " = " + mul )
*/



/** Q11
	 * This program reads a number n from the user and prints the 
	 factorial of numbers from 1 to n in a table format.

let n = parseInt(prompt("Enter the N value:"));

if (n > 0) 
    {
    let fact = 1;
    console.log("N   |   Factorial");
    console.log("--------------------");
    
    for (let i = 1; i <= n; i++) 
        {
        fact *= i;
        console.log(i + "   |   " + fact);
        }
    }  
else
{
    console.log("Please enter a positive number.");
}
*/

/** Q12
	 * This program reads 5 numbers (each between 1 and 30) from the user.
	 For each number, it prints a line with that many asterisks *, 
	 forming a simple bar chart or histogram.

let numbers = [];
for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt(" Enter number " + i + " (1-30) "));
    numbers.push(num);
    console.log(num + " " + "*".repeat(num));
}

*/


/** Q13
	 * This program first reads how many numbers the user wants to enter 
	 (N). Then it reads those N numbers and finds the smallest among 
	 them. 

let n = parseInt(prompt("Enter how many numbers you want to input:"));

if (n > 0) {
    let smallest = parseInt(prompt("Enter number 1:"));

    for (let i = 2; i <= n; i++) {
        let num = parseInt(prompt("Enter number " + i + ":"));
        if (num < smallest) {
            smallest = num;
        }
    }
    console.log("The smallest number is: " + smallest);
} else {
    console.log("Please enter a positive number of inputs.");
}

*/

/** Q14
	 *  This program will read a line of text from the user, analyze 
	 each character, and count how many are letters, digits, whitespace, 
	 or other types of characters (like punctuation).

let text = prompt("Enter the text below:");
let letters = 0, digits = 0, spaces = 0, others = 0;

for (let ch of text) {
    if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
        letters++;
    } 
    else if (ch >= '0' && ch <= '9') {
        digits++;
    } 
    else if (ch === ' ') {
        spaces++;
    } 
    else {
        others++;
    }
}

console.log("Letters : " + letters);
console.log("Digits : " + digits);
console.log("Space Chars : " + spaces);
console.log("Others : " + others);

*/


/** Q15
	 *  This program uses a switch statement to examine the value of 
	 an integer called flag. Based on its value, it prints one of the
	 following messages:
		HOT if the flag has the value 1.
		LUKE WARM if the flag has the value 2.
		COLD if the flag has the value 3.
		OUT OF RANGE if the flag has any other value

let flag = parseInt(prompt("Enter Heat code (1-3):"));
let status;

switch (flag) {
    case 1:
        status = "HOT";
        break;
    case 2:
        status = "LUKE WARM";
        break;
    case 3:
        status = "COLD";
        break;
    default:
        status = "OUT OF RANGE";
}

console.log("Flag " + flag + " is " + status);

*/

/** Q16 
	 *  This program uses a switch statement to examine the value of a 
	 char-type variable called colour and prints one of the following
	 messages, depending on the character assigned:
		RED if either r or R is assigned to colour.
		GREEN if either g or G is assigned to colour.
		BLUE if either b or B is assigned to colour.
		BLACK if any other character is assigned to colour.

let colour = prompt("Enter Color code character:"); 
let colorName;

switch (colour) {
    case 'r':
    case 'R':
        colorName = "RED";
        break;
    case 'g':
    case 'G':
        colorName = "GREEN";
        break;
    case 'b':
    case 'B':
        colorName = "BLUE";
        break;
    default:
        colorName = "BLACK";
}

console.log("Color Code " + colour + " is " + colorName);

*/

/** Q17
	 *  This program checks the temperature value (temp) and determines 
	 the physical state of water:
		If temp < 0 → "ICE"
		If temp is between 0 and 100 (inclusive) → "WATER"
		If temp > 100 → "STEAM" 

let temp = parseFloat(prompt("Enter the water temperature:"));
let state;

if (temp < 0) {
    state = "ICE";
} else if (temp <= 100) {
    state = "WATER";
} else {
    state = "STEAM";
}

console.log(" Water status is " + state + " for the Temperature "  + temp.toFixed(2));

*/

 /** Q18
	 *  This program takes a string (text) and creates its reverse 
	 version in another string (reverseText). Each character from the 
	 original string is added in reverse order to the new string.

let text = prompt("Enter the string below:");
let reverseText = "";

for (let i = text.length - 1, j = 0; i >= 0; i--, j++) {
    reverseText += text[i];
}

console.log("Reversed Text: " + reverseText);

*/

/** Q19
	 * This program reads a set of numbers from the user and calculates 
	 the cumulative product, which means multiplying all the numbers 
	 together one by one.

let n = parseInt(prompt("Enter how many numbers you want to input:"));
let product = 1;

for (let i = 1; i <= n; i++) {
    let num = parseFloat(prompt("Enter number " + i + ":"));
    product *= num;
}

console.log("Cumulative Total = " + product);

*/
 /** Q20
	 * This program calculates and displays the first n numbers in the 
	 Fibonacci sequence. Each number is the sum of the previous 
	 two numbers.

let n = parseInt(prompt("How many Fibonacci terms?"));
if (n > 0) {
    let f1 = 1, f2 = 1;
    let result = "";

    if (n === 1) {
        result = "1";
    } else {
        result = f1 + " " + f2;

        for (let i = 3; i <= n; i++) {
            let f = f1 + f2;
            result += " " + f;
            f1 = f2;
            f2 = f;
        }
    }

    console.log(result);
} else {
    console.log("Please enter a positive number.");
}

*/
/** Q21
	 * This program reads a number n and prints the first n prime numbers.
	 A prime number is a number that is divisible only by 1 and itself.

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let n = parseInt(prompt("How many Prime numbers?"));
let count = 0;
let num = 2;
let result = "";

while (count < n) {
    if (isPrime(num)) {
        result += num + " ";
        count++;
    }
    num++;
}

console.log(result.trim());

*/

/**Q22
   This program prints a right-aligned triangle star pattern using 
	 nested for loops. The number of lines (n) is provided by the user. 
    
let n = parseInt(prompt("Enter Number of Lines:"));

for (let i = 1; i <= n; i++) {
    let line = "";

    for (let s = 1; s <= n - i; s++) {
        line += " ";
    }

    for (let inc = i; inc < i + i; inc++) {
        line += " * ";
    }
    console.log(line);
}
*/

/** Q23
   This program prints a numeric pyramid pattern where numbers 
	 increase from the middle outwards and then decrease symmetrically. 
	 The pattern is centered and uses nested loops */

let n = parseInt(prompt("Enter Number of Lines:"));

for (let i = 1; i <= n; i++) {
    let line = "";

    for (let s = 1; s <= n - i; s++) {
        line += " ";
    }

    for (let inc = i; inc < i + i; inc++) {
        line += inc;
    }

    for (let dec = i + i - 2; dec >= i; dec--) {
        line += dec;
    }

    console.log(line);
}


 /** Q24
	 * This program reads n numbers into an array, calculates the average 
	 of those numbers using a loop, and displays the result. 
	 It demonstrates how to use arrays and object-oriented concepts 
	 like classes and methods in Java.
    
let n = parseInt(prompt("Enter how many numbers:"));
let numbers = [];

for (let i = 1; i <= n; i++) {
    let num = parseFloat(prompt("Enter number " + i + ":"));
    numbers.push(num);
}

let sum = 0;
for (let num of numbers) {
    sum += num;
}

let average = sum / n;
console.log("Average of the numbers: " + average.toFixed(2));

*/

/* ** Q25
	 * This program reads n integers into an array and finds the second
	 largest number among them. It uses a class with methods for input, 
	 processing (finding second largest), and output. It showcases 
	 array handling and object-oriented principles in Java. 

let n = parseInt(prompt("Enter how many numbers:"));
let numbers = [];

for (let i = 1; i <= n; i++) {
    let num = parseInt(prompt("Enter number " + i + ":"));
    numbers.push(num);
}

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num < largest) {
        secondLargest = num;
    }
}

if (secondLargest === -Infinity) {
    console.log("There is no second largest number.");
} else {
    console.log("Second largest number is: " + secondLargest);
}

*/