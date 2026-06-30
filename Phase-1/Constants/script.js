//WRITING FORMAT

// First Condition
// const Birthday;
// Birthday = '16.05.2000';
// alert(Birthday)


// Second Condition
const Birthday = '16.05.2000';
alert(Birthday)

/* The first condition isn't running because of a strict rule in JavaScript regarding the const keyword: constants must be initialized at the exact moment they are declared. */
// If you want to test that comment out first one then run it..


/* -------------------------------------------------------------------------------------------------------------------------------------------- */

// REASSIGNING

const myBirthday = '12.12.2012'
myBirthday = '11.11.2021' // Reassigned '12.12.2012' --> '11.11.2021' (but this will not allow to run the code because ressigning is not possible in const variable it is a fixed variable...)

alert(myBirthday) // This will not run because of reassigning - If you want to run it remove all the reassigned const value or variable - keep a single and fixed value....

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

//Types of CONST Cases

// UPPERCASE CONSTANT (SCREAMING_SNAKE_CASE) - When a value is completely fixed (hardcoded) throughout the program and never changes, these are also called "Global Constants."

const PI = 3.14;
const API_URL = "https://example.com";
const MAX_LOGIN_ATTEMPTS = 5;


// NORMAL CONSTANT (camelCase) - When a value is created within a function, or comes from a calculation. These variables are also const (cannot change), but their value is calculated during program execution.

const userAge = 25;
const itemPrice = 500;
const taxAmount = itemPrice * 0.18; // Comes from calculation.

//IMPORTANT THING

//In JavaScript, const means that you can't assign new data to a variable by setting = to a new variable. However, if you created an object or array as const, the contents of the variable can still be changed....

const USER_CONFIG = { theme: "dark" }; 
USER_CONFIG.theme = "light"; // This is allowed, this will not give error !!!
