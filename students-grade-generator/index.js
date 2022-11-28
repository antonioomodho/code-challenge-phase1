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