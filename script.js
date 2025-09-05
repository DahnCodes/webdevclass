// console.log("My name is Daniel");

// prompt("How old are you?");

// alert("Welcome to my game page")


// let email = "stanleydaniel994@gmail.com";
// console.log(email);

let a = 590
let b = 3290
let c = a + b
console.log(c);

// Todays lecture


//write a function that subtracts 2 numbers
//write a function that multiplies 2 numbers
//write a function that divides 2 numbers

//write a function that displays our favorite game/movie/anime/songs
//(use parameters)

// function greet(){
//     alert("How are you");
// }
// greet();

// function getName(fullname){
// console.log(fullname);
// }
// getName("Daniel")
// getName("Chizaram")

// function addNumbers(a, b){
// return a + b
// }
// let sum232 = addNumbers(201, 300)
// console.log(sum);

// document.getElementById("fullname").innerHTML = "Hello my name is Emmanuel"

// function displayDate(){
//     document.getElementById("showdate").innerHTML = Date();
//     displayDate();
// }


let guess = prompt("pick a number")

if (guess === "1" || guess === "10") {
    alert("you win")
} else {
    alert("try again")
}
// let firstname =  prompt("What is your firstname")
// let lastname = "";
// if (firstname && firstname != "") {
//     prompt("What is your lastname")
// } if (lastname && lastname === "") {
//     alert("please leave")
// } else{
//     alert("welcome")
// }

// Arrays in Javascript
let clubs = ["Barca", "Madrid", "Chelsea", "Man City", "Man U", "Sevilla"]
clubs.push("Arsenal")

clubs.pop()
console.log(clubs)
console.log(clubs.length)