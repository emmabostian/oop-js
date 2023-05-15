/* 
    Write your answer here, and then test your code.
    Your job is to create a Country class.

    The Country class takes the following parameters:
        - name: string (i.e. 'France')
        - continent: string (i.e. 'Europe')
        - currency: string (i.e. 'Euro')
        - population: string (i.e. '67.75 milliion')

    The Country class has the following functions:
        - getOverview(): returns an string overview of the country's data (i.e. 'France is a country in Europe. Its currency is the Euro and it has a current population of 67.75 people.')
        - setPopulation(newPopulation): sets the population for a country

    ** REQUIREMENTS **
    - You must use `defineProperty` to declare the `setEdition` function
    - You must use `Object.create` to create a relationship between Book and ComicBook

*/

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const countryData = {
    name: 'France',
    continent: 'Europe',
    currency: 'Euro',
    population: '67.75 million'
}

// Your code goes here

class Country {
    
}


// ================================================================
// test code
// ================================================================

// ##DISPLAY_BEGIN##
// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.

const result= new Country(countryData.name, countryData.continent, countryData.currency, countryData.population);

//##DISPLAY_END##

// The rest of your code is invisible to the learner.


/**
 * -------------------------------------
 * MESSAGE, TEST, AND VALIDATION SECTION
 * -------------------------------------
 */

// Return the correct result. This code is invisible to the learner.
const getCorrectResult = () => {
    class Country {
        constructor(name, continent, currency, population) {
            this.name = name;
            this.continent = continent;
            this.currency = currency;
            this.population = population;
        }
        
        getOverview() {
        return `${this.name} is a country in ${this.continent}. Its currency is the ${this.currency} and it has a current population of ${this.population} people.`;
        }
        
        setPopulation(newPopulation) {
            this.population = newPopulation;
        }
    }

    const testCountry = new Country(countryData.name, countryData.continent, countryData.currency, countryData.population);
    
    return testCountry;
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

function testCountryData(result) {
    return result.name === countryData.name && result.continent === countryData.continent && result.currency === countryData.currency && result.population === countryData.population;
}

function testGetOverview(result) {
    return result.getOverview() === `${countryData.name} is a country in ${countryData.continent}. Its currency is the ${countryData.currency} and it has a current population of ${countryData.population} people.`
}

function testSetPopulation(result) {
    const initialPopulation = result.population;
    const newPopulation = '70.12 million';
    result.setPopulation(newPopulation);
    return result.population !== initialPopulation && result.population === newPopulation;
}


// Loop through tests, run each one, and display results.
function runAllTests() {
    const tests = 
        [
            { test: testCountryData(result), message: "Country data matches expected data."},
            { test: testGetOverview(result), message: "Country overview matches expected overview."},
            { test: testSetPopulation(result), message: "setPopulation matches expected data."},
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