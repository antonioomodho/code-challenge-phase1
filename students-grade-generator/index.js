//prompt const to allow us key in grades anytime asked

const scores = parseInt( prompt("Please enter your Score: "));
//let score prompt("Please enter your grade");
//CReated a function grade that has the parameter scores
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