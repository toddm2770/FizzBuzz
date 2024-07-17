function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let stopValue = document.getElementById("stopValue").value;    
    //validate input
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    stopValue = parseInt(stopValue);

    if(stopValue > 5000){
        alert("Stop Value must be less than 5000")
    }

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue) && stopValue < 5001){
        //generate fizzbuzz
        let fbValues = generateFizzBuzz(fizzValue, buzzValue, stopValue);
        //display fizzbuzz
        displayValues(fbValues);
    }
}

//generate fizz buzz values with an if statement
function generateFizzBuzz(fValue, bValue, sValue){

    let fbValues = [];

    for(let i = 1; i <= sValue; i++){
        if (i % fValue == 0 && i % bValue == 0){
            fbValues.push("FizzBuzz");
        } else if(i % fValue == 0){
            fbValues.push("Fizz");
        } else if(i % bValue == 0){
            fbValues.push("Buzz");
        } else {
            fbValues.push(i);
        }
    }

    return fbValues;
}

//display the values on the page
function displayValues(fbValues){
    let results = document.getElementById("resultsData")
    results.innerHTML = "";   
    let content = "";

    //loop over the fbValues array
    for(let i = 0; i < fbValues.length; i++){

        let dataValue = fbValues[i];
        let cssClass = "";

        if (Number.isInteger(dataValue)){
            cssClass = "noFB";
        } else {
            cssClass = dataValue;
        }

        let divElement = `<div class="col border p-3 ${cssClass}">${dataValue}</div>`;
        content += divElement;
    }

    results.innerHTML = content;
}