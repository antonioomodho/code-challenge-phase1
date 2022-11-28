
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
//let score prompt("Please enter your grade");
//CReated a function grade that has the parameter scores
function grade(scores){ 
     //we use an if else if ladder statement to help us determine each grade once scores are keyed in
    if(scores>100 && scores<0){ 
        return  alert(`Invalid Input`)
        
    }
    //Scores below 40
    else if(scores<40){
        return alert(`Your grade is E`)
        
    }
    //scores btn 40 to 49
    else if (scores<=49 && scores>=40){
      return alert( `Your grade is D`)
        
    }
    //scores btn 49 to 59
    else if (scores<=59 && scores>=49){
            return alert(`Your grade is C`)
    }
    //scores btn 69 to 79
    else if(scores<=79&& scores>=69){
       return alert(`Your grade is B`)
    }
    //scores above 79 upto 100
    else{
        return alert("Your grade is A")
    }
    
   
    
   
    }
    //To call the function grade and give us output
grade(scores);

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

//We declare variables using let for salary,benefits,Nhif,Nssf, Paye in order to be able to assign them a value 
let salary;
let benefits;
let NHIF;
let NSSF;
let PAYE;
//Declaring a function salarycalculation with the parameters salary and benefits
function salaryCalculation(salary, benefits){
    let gross = salary + benefits; //declaring Variable gross
    let NSSF = gross * 0.06; //Declaring Variable gross
    // let netCalculator = gross;
    //if else if ladder statement in a function to get PAYE
if (gross <= 24000) {
        PAYE = (gross*0.1)
    }
    else if (gross >= 32333) {
       PAYE = (gross*0.3)
    }
    else if (gross >= 24001) {
        PAYE = (gross*0.25)
    }
    //console.log to run the code on terminal to output gross,paye and nssf
console.log('Gross salary:', gross)
 console.log('PAYE deductions:', PAYE)
 console.log('NSSF deduction:', NSSF)
//NHIF Determination
        if (gross <= 5999 ){
            NHIF = (150)}
        else if
         (gross > 6000 && gross <= 7999) {
            NHIF = (300)}
        else if
        ( gross > 8000 && gross <= 11999){
            NHIF = (400)}
        else if 
        ( gross > 12000 && gross <= 14999) {
            NHIF = (500) }
        else if 
        (gross > 15000 && gross <= 19999) {
            NHIF = (600) }
        else if
        (gross > 15000 && gross <= 24999) {
            NHIF =  (750)}
        else if
        ( gross > 25000 && gross <= 29999){
            NHIF = (850)}
        else if 
        (gross > 30000 && gross <= 34999) {
            NHIF = (900) }
        else if 
        (gross > 35000 && gross <= 39999) {
            NHIF = (950) }
        else if 
        (gross > 40000 && gross <= 44999) {
            NHIF =(1000) }
        else if 
        (gross > 45000 && gross <= 49999) {
            NHIF = (1100) }
        else if  
        (gross > 50000 && gross <= 59999){
            NHIF = (1200) }
        else if 
        (gross > 60000 && gross <= 69999) {
            NHIF = (1300) }
        else if 
        (gross > 70000 && gross <= 79999) {
            NHIF = (1400) }
        else if  
        (gross > 80000 && gross <= 89999) {
            NHIF = (1500) }
        else if 
        (gross > 90000 && gross <= 99999) {
            NHIF = (1600) }
        else if 
        (gross >= 100000) {
            NHIF = (1700)
            //To display the netSalary on terminal
    console.log('NHIF deduction:', NHIF)
    console.log('Taxes: PAYE + NSSF + NHIF :', (NSSF + PAYE + NHIF ))
    let netSalary = 'Net Salary:  ' + (gross - (NSSF + PAYE + NHIF ))
    return netSalary;
}
}
        console.log(salaryCalculation(67000, 8900, 890000));


## Authors

- [@antonioomodho](https://www.github.com/antonioomodho)

## License

[MIT](https://choosealicense.com/licenses/mit/)

