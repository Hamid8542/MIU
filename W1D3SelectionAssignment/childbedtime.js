/*
 Write a defining table and then a program that determines what time a child should go to bed.
Your program must read a child’s age and the season (winter, spring, summer, or fall) from the
keyboard and output the child’s bedtime according to this table:
Age                        Season                               Bed Time
5 or younger               summer, fall                         8:30 PM
                           winter, spring                       8:00 PM
6 to 12                    summer                               9:30 PM
                           winter,spring, fall                  8:30 PM
13 and older               summer                               10:30 PM
                           winter, spring, fall                 9:30 PM

*/

//function retBedTime (age,season){
    const prompt = require('prompt-sync')();
    let age = prompt("Tell me Your age , I will tell you your bed time :");
    let season = prompt(" Please enter the season : ");

    if((age <= 5 && season === "summer" || (season === "fall"))){

      console.log(" Child's bedtime 8:30 p.m "); 
    }

    else if(age <= 5 && (season === "winter" || season === "spring")){

      console.log(" Child's bedtime 8:00 p.m ") 
    }
    else if(age <= 12 && season === "summer"){

    console.log(" Child's bedtime 9:30 p.m ") 
    }
    else if(age <= 12 && season !== "summer"){

    console.log(" Child's bedtime 8:30 p.m ") 
    }
    else if(age >= 13 && season === "summer"){

    console.log(" Child's bedtime 10:30 p.m " )
    }
    else if(age >= 13 && season !== "summer"){

    console.log(" Child's bedtime 9:30 p.m ") 
    }