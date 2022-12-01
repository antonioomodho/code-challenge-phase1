
# CODE CHALLENGE PHASE 1

## Project Description
This project contains 3 challenges all stored in one directory named code-challenge-phase1. Each challenge is then stored in a sub directory within the main directory i.e Challenge 1 is students-grade-generator, challenge 2 is speed-detector and lastly challenge 3 is net-salary calculator.

## Project setup
To run the project, we will git clone it from github to our remote machine and open it in visual studio code. We will then open terminal under the right directory in our remote machine and install npm using the command 'npm install' . This will install the right dependencies needed to run the program successfully under the folder node_modules in the directory code-challenge-phase1. We then proceed to install prompt using the command npm install prompt-sync. This will help us run and test our challenge 1 project (students-grade-generator) using a prompt that will appear on the browser.

Challenge 1: (Student-grade-generator)
In this challenge, note that all the files in this directory students-grade-generator is only for the challenge.
Open index.js in the folder and you'll find a detailed code with comments on how the grades will be generated.
To run the code you will go to index.html file under the same directory. If you are using VS code, install an extension called 'live server' to enable you redirect to your browser through the prompt for test using the button 'Go Live' at the bottom right of VS code.


Challenge 2: (Speed Detector)
In the directory speed-detector, open index.js file.
This file has a well commented code that tests different speed limits.
To test the project we go to the last line of code i.e

          //Input the speed to test the limit and generate points
               console.log(speedLimitDetector(80));


We then input different values of our choice in the parenthesis with an integer to allow us get the speed limit detector points.
To test this we will write a comman 'node index.js' in our terminal then press enter and the results will be
                      // =>  points:2
Feel free to input different values and test to see various points for different speeds.


Challenge 3: (net-salary-calculator)
In the directory net-salary-calculator, open index.js file.
This file has a well commented code that calculates the net salary.
To test the project we go to the last line of code i.e

          console.log(salaryCalculation(100000,20000));
          
We then input different values of our choice in the parenthesis with an integer ((salary,benefits)=Gross salary) to allow us get the net salary.
To test this we will write a comman 'node index.js' in our terminal then press enter and the results will be

                    // => Gross salary: 120000
                          PAYE deductions: 36000
                          NSSF deduction: 7200
                          NHIF deduction: 1700
                          Taxes: PAYE + NSSF + NHIF : 44900
                          Net Salary:  75100
Feel free to input different values and test to see diferent net salaries.


## Authors

- [@antonioomodho](https://www.github.com/antonioomodho)

## License

[MIT](https://choosealicense.com/licenses/mit/)

