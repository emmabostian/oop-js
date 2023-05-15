/* 
    Write your answer here, and then test your code.
    Your job is to create a User class and an Admin class..

    The User class takes the following parameters:
        - username: string
        - password: string [PRIVATE VARIABLE]

    The Admin class takes the following parameter:
        - username: string
        - password: string [PRIVATE VARIABLE]

    The Admin class has another property:
    - isAdmin: true
    
    The User class has the following functions:
        - updatePassword(newPassword): updates the password [PRIVATE FUNCTION]
        - resetPassword(newPassword): requests an update to the password parameter and returns a string once complete 'Your password has been updated'

    The Admin class has the following functions:
        - deleteUser(userToDelete): returns a string stating the user has been deleted (i.e. 'The user emma123 has been deleted')

    ** REQUIREMENTS **
    - password must be a private variable
    - updatePassword must be a private function
    - You must use the `extends` keyword

*/

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const userData = {
    username: 'emma',
    password: 'ZRYAK3GSS3wQujr'
};

const adminData = {
    username: 'sarah',
    password: 'r5tHZE9DUP1SgTB'
}

const userToDelete = 'carter'


// Your code goes here

class User {

}

class Admin {

}

// ================================================================
// test code
// ================================================================

// ##DISPLAY_BEGIN##
// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.

const result= [
    new User(userData.username, userData.password),
    new Admin(adminData.username, adminData.password)
]

//##DISPLAY_END##

// The rest of your code is invisible to the learner.


/**
 * -------------------------------------
 * MESSAGE, TEST, AND VALIDATION SECTION
 * -------------------------------------
 */

// Return the correct result. This code is invisible to the learner.
const getCorrectResult = () => {
    class User {
        #password;
        
        constructor(username, password) {
          this.username = username;
          this.#password = password;
        }
        
        #updatePassword(newPassword) {
          this.#password = newPassword;
        }
        
        resetPassword(newPassword) {
          this.#updatePassword(newPassword);
          return 'Your password has been updated'
        }
    }
    
    class Admin extends User {
        constructor(username, password) {
            super(username, password);
            this.isAdmin = true;
        }
        
        deleteUser(userToDelete) {
            return `The user ${userToDelete} has been deleted`;
        }
    }

    const testUser = new User(userData.username, userData.password);
    const testAdmin = new Admin(adminData.username, adminData.password);
    
    return [testUser, testAdmin];
}

/**
 * Display messages
 */

// Hints are specific for your course and can be edited.
const hints = [
    "Remember to use the extends keyword to establish a relationship between user and admin.",
    "Private variables and functions are prepended with a `#` hash symbol.",
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

function testUserUsername(userResult) {
    return userResult.username === userData.username;
}

function testAdminData(adminResult) {
    return adminResult.username === adminData.username && adminResult.isAdmin;
}

function testPasswordPrivacy(result) {
    const [userResult, adminResult] = result;
    return userResult.password === undefined && adminResult.password === undefined;
}

function testUserCannotDeleteUser(userResult) {
    return !userResult.deleteUser;
}

function testAdminCanDeleteUser(adminResult) {
    return adminResult.deleteUser(userToDelete) === `The user ${userToDelete} has been deleted`;
}

function testResetPassword(result) {
    const [userResult, adminResult] = result;
    return userResult.resetPassword('abc') === 'Your password has been updated' && adminResult.resetPassword('123') === 'Your password has been updated';
}


// Loop through tests, run each one, and display results.
function runAllTests() {
    const tests = 
        [
            { test: testUserUsername(result[0]), message: "User username data matches expected data."},
            { test: testAdminData(result[1]), message: "Admin data matches expected data."},
            { test: testPasswordPrivacy(result), message: "Password is private."},
            { test: testUserCannotDeleteUser(result[0]), message: "User cannot delete another user."},
            { test: testAdminCanDeleteUser(result[1]), message: "Admin can delete another user."},
            { test: testResetPassword(result), message: "Reset password works as expected."},
    ];
       


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