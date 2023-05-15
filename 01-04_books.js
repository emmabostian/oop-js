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

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const bookData = {
    title: 'Pride and Prejudice',
    author: 'Emily Bronté',
    quantity: 3,
    edition: 4
}

const comicBookData = {
    title: 'Spiderman',
    author: 'Stan Lee',
    quantity: 3,
    graphicArtist: 'Todd McFarlane'
}


// Your code goes here

function Book() {

}

function ComicBook() {

}

// ================================================================
// test code
// ================================================================

// ##DISPLAY_BEGIN##
// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.

const book = new Book(bookData.title, bookData.author, bookData.quantity, bookData.edition);
const comicBook = new ComicBook(comicBookData.title, comicBookData.author, comicBookData.quantity, comicBookData.graphicArtist);
const result = [book, comicBook];
//##DISPLAY_END##

// The rest of your code is invisible to the learner.


/**
 * -------------------------------------
 * MESSAGE, TEST, AND VALIDATION SECTION
 * -------------------------------------
 */

// Return the correct result. This code is invisible to the learner.
const getCorrectResult = () => {
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

    const testBook = new Book(bookData.title, bookData.author, bookData.quantity, bookData.edition);
    const testComicBook = new ComicBook(comicBookData.title, comicBookData.author, comicBookData.quantity, comicBookData.graphicArtist);
    return [testBook, testComicBook];
}

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

    const promptForShowAnswer = "Set 'showExpectedResult' to 'true' to see the correct value.";
    const promptForShowHints = "Set 'showHints' to 'true' to see a hint.";

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
        "You didn't get the correct answer this time. \nTime for another try.",
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
            console.log(`${indent}Expected result: `)
            // Output the object as an object.
            console.dir(correctResult)
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

function testBookData(book) {
    return book.title === bookData.title && book.author === bookData.author && book.edition === bookData.edition;
}

function testComicBookData(comicBook) {
    return comicBook.title === comicBookData.title && comicBook.author === comicBookData.author && comicBook.graphicArtist === comicBookData.graphicArtist;

}

function testBookSetEdition(book) {
    const initialEdition = book.edition;
    book.edition = book.edition + 1;
    return book.edition === initialEdition + 1;
}

function testSellBook(book) {
    const initialQuantity = book.quantity;
    book.sell();
    return book.quantity === initialQuantity - 1;
}

function testComicBook(book, comicBook) {
    return comicBook.graphicArtist && !comicBook.edition && !book.graphicArtist;
}


// Loop through tests, run each one, and display results.
function runAllTests() {
    const [book, comicBook] = result;
    const tests = [
        { test: testBookData(book), message: "Book data matches expected data."},
        { test: testComicBookData(comicBook), message: "Comic book data matches expected data."},
        { test: testBookSetEdition(book), message: "Book setEdition matches data."},
        { test: testSellBook(book), message: "Book sell function matches data."},
        { test: testComicBook(book, comicBook), message: "Comic book data matches expected data."},
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
        displayMessage(false, result, getCorrectResult());
    } else if (testsPassed === totalTests) {
        console.log("> All tests passed");
        console.log();
        displayMessage(true, result, getCorrectResult());
    } else {
        console.log("> Some tests passed");
        console.log();
        displayMessage(false, result, getCorrectResult());
    }

}

runAllTests();