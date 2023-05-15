/* 
    Write your answer here, and then test your code.
    Your job is to create an Order class.

    The Order class takes the following parameters:
        - restaurant: string
        - total: float
        - customer: string

    The Order class has the following functions:
        - orderStatus: returns a different string response based on the order status. The string responses for each code are as follows:
            - 0: 'Waiting for the restaurant to accept the order'
            - 1: 'Your order is being prepared'
            - 2: 'Your order is ready for pickup'
            - 3: 'Your order has been collected'

    ** REQUIREMENTS **
    - You must use a getter function for orderStatus 
    - You must use a setter function for setting foodStatus

*/

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const orderData = {
    restaurant: 'Chick-Fil-A',
    total: 14.73,
    customer: 'Henry Cavill'
}

// Your code goes here
class Order {
    constructor() {
        this.foodStatus = 0;
        this.validFoodStatuses = [0,1,2,3];
    }
}

// ================================================================
// test code
// ================================================================

// ##DISPLAY_BEGIN##
// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.

const result= new Order(orderData.restaurant, orderData.total, orderData.customer);

//##DISPLAY_END##

// The rest of your code is invisible to the learner.


/**
 * -------------------------------------
 * MESSAGE, TEST, AND VALIDATION SECTION
 * -------------------------------------
 */

// Return the correct result. This code is invisible to the learner.
const getCorrectResult = () => {
    class Order {
        constructor(restaurant, total, customer) {
            this.restaurant = restaurant;
            this.total = total;
            this.customer = customer;
            this.foodStatus = 0;
            this.validFoodStatuses = [0,1,2,3];
        }
    
        get orderStatus () {
            switch (this.foodStatus) {
                case 0:
                    return 'Waiting for the restaurant to accept the order';
                case 1:
                    return 'Your order is being prepared';
                case 2:
                    return 'Your order is ready for pick up';
                case 3:
                    return 'Your order has been collected';
                default:
                    return 'Something went wrong'
            }
        }
      
      set orderStatus(newStatus) {
        if (this.validFoodStatuses.includes(newStatus)) {
            this.foodStatus = newStatus;
        } else {
            this.foodStatus = null;
        }
      }
    }

    return new Order(orderData.restaurant, orderData.total, orderData.customer);
}

/**
 * Display messages
 */

// Hints are specific for your course and can be edited.
const hints = [
    "Getters allow us to write myOrder.orderStatus instead of myOrder.getOrderStatus()",
    "Use a switch statement to return the order status",
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

function testOrderData(result) {
    return result.restaurant === orderData.restaurant && result.total === orderData.total && result.customer === orderData.customer;
}

function getOrderStatus(status) {
    switch (status) {
        case 0:
            return 'Waiting for the restaurant to accept the order';
        case 1:
            return 'Your order is being prepared';
        case 2:
            return 'Your order is ready for pick up';
        case 3:
            return 'Your order has been collected';
        default:
            return 'Something went wrong'
    }
}

function testOrderStatus(result) {
    return result.orderStatus === getOrderStatus(0)
}

function testSetOrderStatus(result) {
    result.orderStatus = 1;
    if (result.orderStatus !== getOrderStatus(1)) return false;

    
    result.orderStatus = 2;
    if (result.orderStatus !== getOrderStatus(2)) return false ;

    result.orderStatus = 3;
    if (result.orderStatus !== getOrderStatus(3)) return false ;

    return true;
}

function testInvalidOrderStatus(result) {
    result.orderStatus = 8;
    return result.orderStatus === getOrderStatus(8);
}

// Loop through tests, run each one, and display results.
function runAllTests() {
    const tests = 
        [
            { test: testOrderData(result), message: "Data matches expected data."},
            { test: testOrderStatus(result), message: "Order status matches expected data."},
            { test: testSetOrderStatus(result), message: "Set order status works as expected."},
            { test: testInvalidOrderStatus(result), message: "Set order status with invalid status works as expected."},
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