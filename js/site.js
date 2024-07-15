//get the balues from the user
function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let endValue = document.getElementById("endValue").value;
    let startValue = 1;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(endValue)){
        let numbers = generateFizzBuzz(startValue, endValue);
        displayFizzBuzz(numbers);

    } else {
        alert("You must enter a number! Please correct your inputs.")
    }
}

function generateFizzBuzz(sValue, eValue){

    let numbers = [];

    for(let i = sValue; i<=eValue; i++){
        numbers.push(i);
    }

    return numbers;
}

function displayFizzBuzz(numbers){

    let templateCols = "";

    for(let index = 0; index < numbers.length; index++){

        let className = "";
        let fizzValue = document.getElementById("fizzValue").value;
        let buzzValue = document.getElementById("buzzValue").value;
        
        if (numbers[index] == 0){
            className = "";
        } else if (numbers[index] % fizzValue == 0 && numbers[index] % buzzValue == 0){
            numbers[index] = "FizzBuzz";
            className = "FizzBuzz";
        } else if(numbers[index] % fizzValue == 0) {
            numbers[index] = "Fizz";
            className = "Fizz";
        } else if(numbers[index] % buzzValue == 0) {
            numbers[index] = "Buzz";
            className = "Buzz";
        }  else {
            className = "";
        }
        templateCols += `<div class="${className} ${"border p-3"}">${numbers[index]}</div>`;
    }

    document.getElementById("resultsData").innerHTML = templateCols;
}