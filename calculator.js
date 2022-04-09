// Step 1: Create screenArray and ensure that button works and screen updates everytime a number button is pressed
// Step 2: Test delete and clear buttons
// Step 3: Test operator functions
// Step 4: Test equals function


// Screen variables
    // Create array "screenArray" to display numbers on screen
    screenArray = []
    // Create 2 variables: "numA" and "numB"
    numA = 0
    numB = 0


// Operator functions (refer to javascript exercises for reference)
    // add()

    // subtract()
    // multiply()
    // divide()
    // (Hidden) makeNumber() function to create number from array
        // After operator button is pressed, if numA = 0, run makeNumber() function and update "numA", then clear "screenArray"


// Button functions
    // Numbers: Append number into array
    const bottom = document.querySelector('bottom');
    // -- 1 --
    const one = document.getElementById('one')
    one.addEventListener("click", function(event) {
        screenArray.push(1);
        console.log(screenArray);
    })

    // -- 2 --
    // -- 3 --
    // -- 4 --
    // -- 5 --
    // -- 6 --
    // -- 7 --
    // -- 8 --
    // -- 9 --
    // -- 0 --

        // Update screen every time a new number is added
        // Limit array to ~30 numbers
    // Operator buttons: Create variable "sign" and update "sign" based on what operator button is pressed
    // Equals: Run operate() function
        // After equals button is pressed, run makeNumber() for numB    
        // operate() function: Takes numA and numB and run the operator function based on "sign"
    // Delete: Pop from array
    // Clear: Remove all numbers on array and update numA and numB to 0