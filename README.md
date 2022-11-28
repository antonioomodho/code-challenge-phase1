
# CODE CHALLENGE PHASE 1

## Project Description
CHALLENGE 1  Student Grade Generator (Toy Problem)
Student Grade Generator i.e Write that prompts the user to input student marks.
The input should be between 0 and 100. 
Then output the correct grade: 
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

CHALLENGE 2  Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70,   it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

CHALLENGE 3  Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye


## Project setup

Challenge 1: Student Grade Generator (Toy Problem)

//prompt const to allow us key in grades anytime asked

const scores = parseInt( prompt("Please enter your Score: "));
// let score prompt("Please enter your grade");
// CReated a function grade that has the parameter scores
function grade(scores){ 
    if(scores>100 && scores<0){  //we use an if els if ladder statement to help us determine each grade once scores are keyed in
        alert(`Invalid Input`)
        return;
    }
    //Scores below 40
    else if(scores<40){
        alert(`Your grade is E`)
        return;
    }
    //scores btn 40 to 49
    else if (scores<=49 && scores>=40){
        alert( `Your grade is D`)
        return;
    }
    //scores btn 49 to 59
    else if (scores<=59 && scores>=49){
            alert(`Your grade is C`)
    return;
    }
    //scores btn 69 to 79
    else if(scores<=79&& scores>=69){
        alert(`Your grade is B`)
        return;
    }
    //scores above 79 upto 100
    else if(scores>79 && scores<=100);{
        alert("Your grade is A")
        return;
    }
    
   
    
   
    }
    //To call the function grade and give us output
grade();

We have and index.html file in the directory students-grade-generator that links the index.js to prompt on your browser for input



Challenge 2: Speed Detector (Toy Problem)
//The speed limit is set to 70km/h hence the variable let speed be 70
let speedLimit = 70
//We create a function speedLimitDetector with the parameter speed
function speedLimitDetector(vehicleSpeed){
    if(vehicleSpeed < speedLimit){
        return "Driver's Speed is within specified limit" 
        //If speed was not exceeded then you get an OK to mean the driver is within speed limit
    }else{
        let driverPoints = ((vehicleSpeed - speedLimit) / 5) 
        //The the current speed, minus the speed limit and divide by 5 to get points
        if(driverPoints >= 12){
            return "License suspended"
        //If the drivers points are 12 or more then the licence is suspended  
        }else {
            return 'Points:' + driverPoints
        }
    }
}
//Input the speed to test the limit and generate points i.e where the parenthesis holds the value 75
console.log(speedLimitDetector(75));




Challenge 3: Net Salary Calculator (Toy Problem)

## Authors

- [@antonioomodho](https://www.github.com/antonioomodho)

## License

[MIT](https://choosealicense.com/licenses/mit/)

