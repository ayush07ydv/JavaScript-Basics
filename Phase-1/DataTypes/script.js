let message = "hello";
message = 56748
alert(message) // 56748 - The latest assigned value will come, because let allows you to reassign the value.

//Infinity Number
    alert(1/0);
    alert(Infinity) // Both will give same answer - Infinity

//NaN
    alert("not a number"/2); // This is are non-sense sentences that's why code gives error

    alert( NaN + 1);
    alert(3* NaN); // Any further mathematical operations on NaN, it will return NaN.

    alert(NaN ** 0) // This is a exception in NaN case, which returns "1" in the answer..


// STRING
    let str = "Hello"; 
    let str2 = 'Single';// normally we can use single or double any quotes to represent string
    let phrase = `can embed another ${str}`; // we can embed another variable using backticks 

    alert(str);
    alert(phrase); 
    // In JavaScript there is no other type of variable for character like char a = 'c', everything can be recognized in string value...

//BOOLEAN (Logical Type)
        /*The boolean type has only two values: true and false. */

    let nameFieldCheck = true; // Yes, name field is checked
    let ageFieldCheck = false; // No, age field is not checked
    // like that we can assign any values in condition...

// NULL
    let age = null;
    alert(age); // This will show null because it have no value or non-existing object

// UNDEFINED
    let aged;
    alert(aged); // undefined - because there is no value in it... enter any value.

// 'typeof' OPERATOR
    typeof undefined // "undefined"
    typeof 0 // "number"
    typeof 10n // "bigint"
    typeof true // "boolean"
    typeof "foo" // "string"
    typeof Symbol("id") // "symbol"
    typeof Math // Math is a built-in object that provides mathematical operations.
    typeof null // The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here
    typeof alert 