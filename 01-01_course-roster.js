/* 
    Write your answer here, and then test your code.
    Your job is to create a Student object and a 
    ClassRoster object.

    The Student object takes the following parameters:
        - name: string
        - grades: number[]

    The ClassRoster object takes the following parameters:
        - roster: Student[]
        - teacher: string

    The Student object has the following functions:
        - getGrades: returns the grades for the student
        - checkIsPassing: finds the grade point average (gpa) and returns
            true if the gpa is > 70
    The ClassRoster object has the following functions:
        - getRoster: returns a comma-separated string with each student's name
        - returnGraduatingStudents: returns an array with the passing students
*/
function ClassRoster() {

}

function Student() {
    
}

function calculateGPA(grades) {
    return Math.floor((grades.reduce((currSum, currValue) => currSum + currValue)) / grades.length);
}
// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

function findLargest(numbers) {
    // This is a sample implementation to test your validators
    return Math.max(...numbers);
    // return 2
}



// ================================================================
// test code
// ================================================================

/**
 * Instructor Notes:
 * =================
 * Write test code that verifies the learners proposed answer
 * You can write one or more test cases.
 * Add test code for the learner here.
 *
 * Only the lines of code between DISPLAY_BEGIN and DISPLAY_END
 * are shown to the learner. The learner can change the visible
 * code to try different test cases.
 * 
 * Write your setup and testing code outside the display area.
 * Use System.out.println(...) to display text.
 */

/* Keep the following section flush left for correct display to learner. */

// ##DISPLAY_BEGIN##
// This is how your code will be called.
// Your answer should create several students with three different course grades
// as well as a class with these students and return an array containing the
// graduating students.
let anwar = new Student('Anwar', [97, 87, 99]);
let sophie = new Student('Sophie', [75, 22, 85]);
let ron = new Student('Ron', [64, 77, 90]);

let physics = new Class([anwar, sophie, ron], 'Harriet');
physics.returnGraduatingStudents();
//##DISPLAY_END##

// The rest of your code is invisible to the learner.


/**
 * -------------------------------------
 * MESSAGE, TEST, AND VALIDATION SECTION
 * -------------------------------------
 */

// Return the correct result. This code is invisible to the learner.
function Class(roster = [], teacher = '') {
    this.roster = roster;
    this.teacher = teacher;
  }
  
  Class.prototype.getRoster = function() {
    let studentNames = [];
    this.roster.forEach(student => studentNames.push(student.name));
    console.log(studentNames.join(', '));
  }
  
  Class.prototype.returnGraduatingStudents = function() {
    console.log(this.roster.filter(student => student.checkIsPassing()));
  }
  
  function Student(name = '', grades = []) {
    this.name = name;
    this.grades = grades;
  }
  
  Student.prototype.getGrades = function() {
    console.log(this.grades);
  }
  
  Student.prototype.checkIsPassing = function() {
    let gpa = Math.floor((this.grades.reduce((currSum, currValue) => currSum + currValue)) / this.grades.length);
    console.log(gpa > 70);
    return gpa > 70;
  }


/**
 * Display messages
 */

// Hints are specific for your course and can be edited.
const hints = [
    "Object functions shouldn't be added to each instance of the object.",
    "Remember to set the parameters for each instance of the object, not the prototype.",
    "Remember the ClassRoster object takes an array of Student objects."
];

// Use this divider to separate console messages
    // ** Do not change these strings! **
    const divider = "\n--- -- -- -- -- -- -- -- -- -- -- --";
    const indent = "* ";
// 

/**
 * ###########################################
 * Do not change the displayMessage() function
 * ###########################################
 * Displays messages depending on whether the
 * learner's result matches the correct result.
 * 
 * @param {boolean} correctResult - did the learner pass the test?
 */
const displayMessage = (testPass, learnerResult, correctResult) => {

    const promptForShowAnswer = "Change 'showExpectedResult' to 'true' to see the correct value.";
    const promptForShowHints = "Change 'showHints' to 'true' to see a hint.";

    const successMessages = [
        "You did it! This result is exactly right. ",
        "Another one solved!",
        "Correct",
        "Well done! You reached the expected result.",
        "That's right!",
        "Great work! You got the right answer.",
        "Correct! Marvelous work.",
        "That's it! You're getting good at this.",
        "Bravo! This is the correct answer."
    ];

    const failMessages = [
        "You didn't get it right this time. Ready to try again?",
        "Hmm, that's not quite right. Try taking another look",
        "Incorrect. Try again",
        "That's not the expected result. ",
        "Something isn't working. ",
        "Whoops, that's not it! Consider revisiting the question. ",
        "You didn't get the correct answer this time. Time for another try.",
        "Incorrect. Revisit the question "      
    ];

    // Get random item from the supplied array
    function randMessage(messageArray) {
        return messageArray[Math.floor(Math. random()*messageArray.length)]; 
    }
    
    // Display success/fail message
    if (testPass) {
        console.log(randMessage(successMessages))
    } else {
        console.log(randMessage(failMessages))
    }

    // Display learner result
    console.log(`Your code returned:`);
    console.log(learnerResult);
    console.log(divider)

    // Display expected result and hints
    if (!testPass) {
        console.log("Need help?");

        // Show expected answer
        if (showExpectedResult) {
            console.log(`${indent}Expected result: ${correctResult}`)
        } else {
            console.log(`${indent}${promptForShowAnswer}`)
        }
        
        // Show hints
        if (showHints) {
            console.log(`${indent}Hint: ${randMessage(hints)}`)
        } else {
            console.log(`${indent}${promptForShowHints}`)
        }
    }

}


// Simple assert function for testing
function assert(condition, message) {
	if (!condition) {
	  throw new Error(message);
	} else {
	  console.log(message);
	}
}

// Test for Math.max() method usage.
const testMathMaxUsage = (testedFunction) => {

    const originalMathMax = Math.max;
    let mathMaxCalled = false;
  
    Math.max = function() {
      mathMaxCalled = true;
      return originalMathMax.apply(Math.max, arguments);
    };
  
    // The function you want to test method usage in
    testedFunction(); 
  
    Math.max = originalMathMax;

    return mathMaxCalled;
};
  

// Validation tests

function testMathMax() {
    return testMathMaxUsage(() => findLargest(numbers));
}



// Loop through tests, run each one, and display results.
function runAllTests() {

    const tests = [
        { test: testMathMax(), message: "Use Math.max() method." },
        { test: result === getCorrectResult, message: "Output matches test case." }
    ]

    let testsPassed = 0;
    let totalTests = tests.length;

    tests.forEach(({ test, message }) => {
        try {
            assert(test, `✓ Test passed: ${message}`);
            testsPassed++;
        } catch (error) {
            console.log(`✕ Test failed: ${message}`);
        }
    });

    console.log(`\nTests passed: ${testsPassed} of ${totalTests}`);

    if (testsPassed === 0) {
        console.log("> No tests passed");
        console.log();
        displayMessage(false, result, getCorrectResult);
    } else if (testsPassed === totalTests) {
        console.log("> All tests passed");
        console.log();
        displayMessage(true, result, getCorrectResult);
    } else {
        console.log("> Some tests passed");
        console.log();
        displayMessage(false, result, getCorrectResult);
    }

}

runAllTests();