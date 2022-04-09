// Step 1: Create screenArray and ensure that button works and screen updates everytime a number button is pressed
// Step 2: Test delete and clear buttons
// Step 3: Test operator functions
// Step 4: Test equals function


// Screen variables
    // Create array "screenArray" to display numbers on screen
    var screenArray = []
    // Create 3 variables: "sign", "numA" and "numB"
    var sign = "" // Sign indicating what operator to run
    var numA = 0 // Number to be shown on screen
    var numB = 0 // Stored number offscreen

    // Divided by zero
    const divByZero = "To infinity & beyond!"

    // Output on screen
    output = document.getElementById('output')
    operator = document.getElementById('sign')


// Function to update number on screen
    function updateScreen(a) {
        // Update numA
        numA = screenArray.join('')

        // Update number on screen
        output.innerHTML = numA  
    }

// Operator UI (refer to javascript exercises for reference)

    // Add
    const add = document.getElementById('add')
    add.addEventListener("click", function(event) {
        // Update sign only if there is at least a number or if another sign had been previously entered
        if (sign != "") {
            sign = "+"
            operator.innerHTML = sign
        }

        else if (screenArray.length > 0) {
            // Update sign
            sign = "+"
    
            // Update numB = numA
            numB = numA
    
            // Clear screenArray and update numA
            screenArray = []
            updateScreen(screenArray)
            console.log(numB)
    
            // Update operator sign on screen
            operator.innerHTML = sign  
            }
        });

    // Subtract
    const subtract = document.getElementById('subtract')
    subtract.addEventListener("click", function(event) {
        
        // Update sign only if there is at least a number or if another sign had been previously entered
        if (sign != "") {
            sign = "-"
            operator.innerHTML = sign
        }

        else if (screenArray.length > 0) {
            // Update sign
            sign = "-"
    
            // Update numB = numA
            numB = numA
    
            // Clear screenArray and update numA
            screenArray = []
            updateScreen(screenArray)
            console.log(numB)
    
            // Update operator sign on screen
            operator.innerHTML = sign  
            }
 
    });
    // Multiply
    const multiply = document.getElementById('multiply')
    multiply.addEventListener("click", function(event) {
        // Update sign only if there is at least a number or if another sign had been previously entered
        if (sign != "") {
            sign = "x"
            operator.innerHTML = sign
        }

        else if (screenArray.length > 0) {
            // Update sign
            sign = "x"
    
            // Update numB = numA
            numB = numA
    
            // Clear screenArray and update numA
            screenArray = []
            updateScreen(screenArray)
            console.log(numB)
    
            // Update operator sign on screen
            operator.innerHTML = sign  
            }
    });
    // Divide
    const divide = document.getElementById('divide')
    divide.addEventListener("click", function(event) {
         // Update sign only if there is at least a number or if another sign had been previously entered
         if (sign != "") {
            sign = "/"
            operator.innerHTML = sign
        }

        else if (screenArray.length > 0) {
            // Update sign
            sign = "/"
    
            // Update numB = numA
            numB = numA
    
            // Clear screenArray and update numA
            screenArray = []
            updateScreen(screenArray)
            console.log(numB)
    
            // Update operator sign on screen
            operator.innerHTML = sign  
        } 
    });

    // Operate function

// Button functions
    // Numbers: Append number into array
    // -- 1 --
    const one = document.getElementById('one')
    one.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(1);
            }
        
        // Update screen
        updateScreen(screenArray)
        };
    });
    // -- 2 --
    const two = document.getElementById('two')
    two.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(2);
            }
        
        // Update screen
        updateScreen(screenArray)
        };
    });
    // -- 3 --
    const three = document.getElementById('three')
    three.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(3);
            }
        
        // Update screen
        updateScreen(screenArray)
        };
    });
    // -- 4 --
    const four = document.getElementById('four')
    four.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(4);
            }
        
        // Update screen
        updateScreen(screenArray)
        };
    });
    // -- 5 --
    const five = document.getElementById('five')
    five.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(5);
            }
        
        // Update screen
        updateScreen(screenArray)
        };
    });
    // -- 6 --
    const six = document.getElementById('six')
    six.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(6);
            }
        
        // Update screen
        updateScreen(screenArray)
        };
    });
    // -- 7 --
    const seven = document.getElementById('seven')
    seven.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(7);
            }
        
        // Update screen
        updateScreen(screenArray)
        };
    });
    // -- 8 --
    const eight = document.getElementById('eight')
    eight.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(8);
            }
        
        // Update screen
        updateScreen(screenArray)
        };
    });
    // -- 9 --
    const nine = document.getElementById('nine')
    nine.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(9);
            }
        
        // Update screen
        updateScreen(screenArray) 
        };
    });
    // -- 0 --
    const zero = document.getElementById('zero')
    zero.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(0);
        }
        
        // Update screen
        updateScreen(screenArray)
        };
    });

    // -- Decimal --
    const dot = document.getElementById('dot')
    dot.addEventListener("click", function(event) {
        // Limit max characters to 30
        if (screenArray.length != 30) {
        
        // Don't let user append more 0s if first number is 0
        if (screenArray.indexOf(0) != 0) {
            // Append number into array
            screenArray.push(".");
        }
        
        // Update screen
        updateScreen(screenArray)
        };
    });

    // Equals: Run operate() function
        // After equals button is pressed,   
        // operate() function: Takes numA and numB and run the operator function based on "sign"
        // If numA is empty, make it 0
    function operate(a, b) {

        // Run operator
        if (sign == "+") {
            return b + a
        } else if (sign == "-") {
            return b - a
        } else if (sign == "*") {
            return b * a
        } else if (sign == "/") {
            return b / a
        }
    };

    // Equals button
    const equals = document.getElementById('equals')
    equals.addEventListener("click", function(event) {
        // Make numA 0 if array or numA is empty
        if (screenArray.length = 0 || numA == "") {
            numA = 0
        }

        // If sign is empty and user presses equals
        if (sign == "") {
            screenArray = Array.from(String(numA))
            output.innerHTML = numA
        } else {
            // ParseInt numA and numB
            numA = Number(numA)
            numB = Number(numB)

            // Divided by zero
            if (numA == 0 && sign == "/") {

                numA = divByZero
            } else {

                // Run operate
                numA = operate(numA, numB) 
            }
            
        }
        
            // Update sign and clear numB
            sign = ""
            numB = 0

            // Update screen
            output.innerHTML = numA
            operator.innerHTML = sign

            // Update numA if divided by 0
            if (numA == divByZero) {
                numA = 0
            }
            
            // Parse numA into screenArray
            screenArray = Array.from(String(numA))
    });


    // Delete: Pop from array
    const deleteBtn = document.getElementById('delete')
    deleteBtn.addEventListener("click", function(event) {

        // Pop number into array
        screenArray.pop();
        
        // Update numA
        numA = screenArray.join('')
        console.log(numA)

        // Update number on screen
        output.innerHTML = numA  
    });

    // Clear: Remove all numbers on array and update numA and numB to 0
    const clear = document.getElementById('clear')
    clear.addEventListener("click", function(event) {

        // Empty screenArray
        screenArray = []

        // Empty any stored values from numB and sign
        numB = 0
        sign = ""
        
        // Update numA
        numA = screenArray.join('')
        console.log(numA)

        // Update number on screen
        output.innerHTML = numA
        operator.innerHTML = sign
    });