// result: UNDEFINED
// var x;
// console.log(x);


// result: Uncaught reference: x is not defined
// console.log(x);


// result: NaN
// 1.) console.log(undefined/3);
// 2.) function test(a){
//        console.log(a/5);
//     }
// test();


// concatenation
// var string = "I am";
// string += " loving JavaScript!";
// console.log(string + "!");


// regular math operators +,-,*,/
// console.log((5+4)/3);


// strict equality
// var x="4", y=4;
// if(x === y){
//     console.log("equal");
// }else{
//     console.log("not equal");
// }


// if statements
// if(false || null || undefined || "" || 0 || NaN){
//     console.log("this line won't execute");
// }else{
//     console.log("all false");
// }

// if(true && "hello" && 1 && -1 && "false"){
//     console.log("all true");
// }


// Use of curly braces
// function a(){
//     return{
//         name: "JavaScript"
//     };
// }
// console.log(a());



// Basic For Loop Syntax
// var sum = 0;
// for(var i =0; i<10; i++){
//     sum += i;
// }
// console.log("sum: "+ sum);


// Handling Default Values
// function orderMenuItem(MenuItem){
//     MenuItem = MenuItem || "Not Selected";
//     console.log("Order is "+ MenuItem);
// }

// orderMenuItem("Noodles");
// orderMenuItem();


// var x = 10;
// if((null) || console.log("Hello") || x>5){
//     console.log("Hello");
// }

// Result:

// Hello
// Hello


// Creating object using ‘new Object()’ syntax
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();

// // 2 way to call object value
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "Black";
// console.log(company.name);

// // A.)
// var stockofPropName = "stock of company";
// company[stockofPropName] = 130;
// console.log(company[stockofPropName]);

// // B.)
// company["stock of company"] = 90;
// console.log(company["stock of company"]);



// Better Object Literal
// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor:"Blue"
//     },
//     "stock of company":110
// };

// console.log(facebook.ceo.firstName);



// Function Explained
// function multiply(x,y){
//     return x * y;
// }

// multiply.version = "v.1.0.0";
// console.log(multiply.version);


// // Function Factory
// function makeMultiplier(multiplier){
//     var myFunc = function (x){
//         return multiplier * x;
//     }
//     return myFunc;
// }


// var multiplyBy3 = makeMultiplier(3);
// var doubleAll = makeMultiplier(2);

// // Passing Function as arguments
// function doOperations(x, operation){
//     return operation(x);
// }

// var result = doOperations(5,doubleAll);
// console.log(result);



// Passed by Value [PRIMITIVE]
// var a = 7;
// var b = a;
// console.log(a + " - " + b);


// Passed by Reference [OBJECT]
// var a = {x: 7};
// var b = a;
// b.x = 5;
// console.log(b);





