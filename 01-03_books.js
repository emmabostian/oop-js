/* 
    Write your answer here, and then test your code.
    Your job is to create a Book object and a 
    ComicBook object.

    The Book object takes the following parameters:
        - title: string
        - author: string
        - quantity: number
        - edition: string

    The ComicBook object takes the following parameters:
        - title: string
        - author: string
        - quantity: number
        - graphicArtist: string

    The Book object has the following functions:
        - setEdition(newEdition): sets the new edition of the book
        - sell: sells one copy of the book

    ** REQUIREMENTS **
    - You must use `defineProperty` to declare the `setEdition` function
    - You must use `Object.create` to create a relationship between Book and ComicBook

*/
function Book() {

}

function ComicBook() {

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
// Your answer should create a book and a comic book

const prideAndPrejudice = new Book('Pride and Prejudice', 'Emily Bronté', 3, 4);
prideAndPrejudice.setEdition = 5;

const spiderman = new ComicBook('Spiderman', 'Author', 15, 'Graphic Artist');
spiderman.sell();
//##DISPLAY_END##

// The rest of your code is invisible to the learner.


/**
 * -------------------------------------
 * MESSAGE, TEST, AND VALIDATION SECTION
 * -------------------------------------
 */

// Return the correct result. This code is invisible to the learner.
function Book(title, author, quantity, edition) {
    this.title = title;
    this.author = author;
    this.quantity = quantity;
    this.edition = edition || '';
  }
  
  Object.defineProperty(Book, "setEdition", {
    set: function(newEdition) {
      this.edition = newEdition;
    }
  });
  
  Book.prototype.sell = function() {
    if (this.quantity > 0) {
      this.quantity = this.quantity - 1;
    }
  }
  
  function ComicBook(title, author, quantity, graphicArtist) {
    Book.call(this, title, author, quantity);
    this.graphicArtist = graphicArtist;
  }
  
  ComicBook.prototype = Object.create(Book.prototype, {
    constructor: {
      value: ComicBook
    }
  });


/**
 * Display messages
 */

// Hints are specific for your course and can be edited.
const hints = [
    "Remember the ComicBook object is a type of Book object.",
    "The ComicBook object doesn't require the exact same parameters as the Book object.",
    "Remember to pass the parameters from the ComicBook object up the prototype chain."
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