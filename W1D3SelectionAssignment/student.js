/*
2. Write a program that reads from the keyboard a student's name and number of completed
credits and then outputs the student's name and label on following rules:
a. "Freshman" if 0<credits<30
b. "Sophomore" if 30<=credits<60
c. "Junior" if 60<=credits<90
d. "Senior" if credits>90
*/

const prompt = require('prompt-sync')();
let studentName = prompt("What is your name please :");
let creditCompleted = prompt("What is your credits completed : ")

if(creditCompleted < 30 ){

    console.log(" You are Freshman Student !")
}
else if(creditCompleted < 60){
    console.log(" You are Sophomore student !")
}
else if(creditCompleted < 90){
    console.log(" You are Junior Styudent !")
}
else if(creditCompleted > 90){
    console.log(" You are Senior Student !")
}