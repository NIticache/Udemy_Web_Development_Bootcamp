
// Swap challenge
    var a = "3";
    var b = "8";
    

var c = a;
a = b;
b = c;


    console.log("a is " + a);
    console.log("b is " + b);
 

// Challenge Lifeinweek:


function lifeInWeeks(age) {
    var yearsLeft = 90 - age;
    var monthsLeft = yearsLeft * 12;
    var weeksLeft = yearsLeft * 52;
    var daysLeft = yearsLeft * 365;
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.")
    }
lifeInWeeks(12)





// Challenge: BMI Calculator:



function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
} 

var bmi = bmiCalculator(65, 1.8);

console.log (bmi); // logs 20, as requested
