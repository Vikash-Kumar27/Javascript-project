const form = document.querySelector('form');

form.addEventListener("submit",function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    
    if(height === ""|| height < 0 || isNaN(height)){
        result.innerHTML ="please give a valid Height"
    }
    else if(weight === ""|| weight < 0 || isNaN(weight)){
       result.innerHTML ="please give a valid Weight"
    }
    else{
        const BMI = (weight/(height*height/10000)).toFixed(2);
        if(BMI<=18.6){
        result.innerHTML = `<span>${BMI} BMI <br> Underweight</span> `
        }
        else if(BMI>18.6 && BMI<=24.9){
        result.innerHTML = `<span> ${BMI} BMI <br> Normal</span> `
        }
        else{
            result.innerHTML = `<span> ${BMI} BMI <br> Overweight</span> `
        }

    };
     
   
     

})

