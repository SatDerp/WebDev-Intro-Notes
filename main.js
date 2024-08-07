/* Basic intro
    JS getElementById() finds an HTML element with the specified id inside the () enclosed in ""
    You can add functionality on top of this call with the dot operator 
    dot operator functions can be nested meaning you could have .style.fontSize = "";
    .innerHTML accesses an HTML element's content
    You want to end lines with semicolon just like other languages

    Ex: document.getElementById("demo").innerHTML = "Hello World" will find an HTML element with id="demo" and change the element's content (.innerHTML) to "Hello World"

    JavaScript accepts both double and single quotes

    Other functionality of JS is that it can change values of the src attribute of an <img> tag
        -you could have a img of a light bulb and two buttons where you attach an 'onclick' event to change the src to be a image where the light bulb is on or off
        -document.getElementById('light-bulb').src = 'pic_bulbon.gif'
    JS can change HTML styles:
        -Ex: document.getElementById("demo").style.fontSize="35px";
        -document.getElementById("demo").style.display="none"; to hide HTML elements

    JS scripts can be placed in the head or body tags. You can also include external JS by including the JS file name in the src attribute of a script tag done in the head
        -Ex: <script src="myScrip1.js"></script>
    
*/

/* Declaring Variables
    -var myVariable = "";
    -let myVariable = "";
    -const myVariable = "";

    var creates a variable that is able to be used throughout the whole program with a GLOBAL SCOPE
    let only creates a variable that you can use within the scope of the where you declared that. BLOCK SCOPE
    const is a variable that should never change. BLOCK SCOPE
    
    1. Always declare variables
    2. Always use const if the value should not be changed
    3. Always use const if the type should not be changed (arrays and objects)
    4. Only use let if you can't use const
    5. only use var if you MUST support old browsers

    You cannot re-declare a variable with let or const 
    If you re-declare a JS variable declared with var, it will not lose it original value

    JS treats a dollar sign as a letter, identifiers containing $ are valid variable names. Same for _

*/

/* Display possibilities
    -writing into html element using innerHTML.
        you usually do this to be able to change how an HTML elemnt is displayed
    -writing into the HTML output using document.write()   
        should only be used for testing purposes, but using it after an HTML document is loaded will delete all existing HTML
    -writing into an alert box using window.alert()
        displays on of those pop up alerts.
    -writing into the browser console using console.log()
        useful for debugging

*/


/* Operators and Arithmetic 
    Arithmetic follows basic rules like C++

    === is for testing if two variables have equal value and equal types
    !== not equal value or not equal type

    Bit operators work on 32 bits numbers

    typeof returns the type of a variable
    instanceof returns true if an object is an instance of an object tyep 

*/

/* Data Types
    String 
    Number 
    Bigint: new datatype that can be used to store integer values that are too big to be represented by a normal JS number
    Boolean
    Undefined 
    Null
    Symbol
    Object

    Object data type can contain both built-in objects and user defined objects.
    Built-in objects include: objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more

    Object: written as name: value pairs, separated by commas
        const person = {firstName: "John", lastName: "Doe"};
    
    Array object: they are 0 indexed
        const cars = {"Saab", "Volvo", "BMW"};

    Date object:
        const date = new Date("2022-03-25");

    JS has dynamic types meaning that the same variable can be used to hold different data types

*/

/* Functions 
    Defined with the function keyword followed by the name, followed by paranthesis and inside the parantheis include parameter names
    Function arguments are values recevied by the function when it is invoked
    Inside function, arguments (parameters) behave as local variables

    Accessing a function without () returns the function itself and not the function result.

*/


/* Objects 
    Objects are containers with properties and methods.
    Properties are named values. Methods are actions that can be preformed on objects. They are essentially function stored as properties.
    const person = {
        firstName: "John",
        lastName: "Doe", 
        id: 5566,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    this refers to the person object so this.firstName refers to the firstname property of person.

    Most commmon practice is to declare objects with the const keyword.
    You can access object property in two ways:
        objectName.propertyName;
        objectName["propertyName"];


    Define an object:
        1. Use a object literal
        2. Use the new keyword
        3. Use a object constructor

    1. An object literal is a list of name:value pairs inside curly braces {}
        const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
        name:value pairs are also called key:value pairs
        object literals are also called object initializers
        You could also create an object like so: const person = {};
        and then add the properties later like so: person.firstName = "John"; etc
    2. You can also use the new keyword
        const person = new Object();
        Then add the properties like above
        This works the same as above so for readbility and simplicity and execution speed, use the object literal method


    Objects are mutable, they are addressed by reference, not by value. If a person is an object:
        const x = person; will not create a copy of person. the object x is not a copy of person. The object x is person. The object x and the object person share the same memory address because x was assigned to person
        which is just a address that references the data. Any changes to x will also change person. 


    You can add new properties to an existing object by simply giving it a value
    Use the delete keyword to delete properties (deletes both value of the property and property itself from an object: 
        delete person.age;
    Property values in an object can be other objects:
        myObj = {
            name: "",
            age: 30,
            myCars: {
                car1: "ford",
                car2: "BMW",
                car3: "Fiat"
            }
        }
    Accessing nested objects is done by using the dot notation or bracket notation:
        myObj.myCars.car2;
        myObj.myCars["car2"];
        myObj["myCars"]["car2"];
    
    
*/

console.log("hello");