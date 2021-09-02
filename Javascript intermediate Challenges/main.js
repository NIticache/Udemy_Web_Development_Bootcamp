// --- Challenge 5: advanced BMI calculator.

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

bmiCalculator(64, 1.75);




// --- Challenge 6: Leap year calculator challenge




function isLeap(year) {

    /**************Don't change the code above****************/
    var yearResult = "";
    if (year % 4 !== 0) {
        yearResult = "Not leap year."; // if a year is not divisible by 4 then it is not a leap year
    } else if (year % 100 !== 0) {
        yearResult = "Leap year."; // else if a year is not divisible by 100 then it is a leap year
    } else if (year % 400 !== 0) {
        yearResult = "Not leap year."; // else if a year is not divisible by 400 then it is not a leap year
    } else {
        yearResult = "Leap year."; // else it is a leap year
    }

    return yearResult;

}
isLeap(2021);




// --- Challenge 7: Who's buying lunch



function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); 
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}



// --- Challenge 8: Fibonacci code





function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

output = fibonacciGenerator(16);
console.log(output);

