const getHistory = () =>{
    return document.getElementById('history-value').innerText
}

const printHistory = (num) =>{
    document.getElementById('history-value').innerText = num
}

const getOutput = () =>{
    return document.getElementById('output-value').innerText
}

const printOutput = (num) =>{
    if(num==''){
        document.getElementById('output-value').innerText = num
    }
    else{
        document.getElementById('output-value').innerText = getFormatedNumber(num)
    }
}

const getFormatedNumber = (num) =>{
    return Number(num).toLocaleString('en')
}

const reverseNumberFormat = (num) =>{
    //replace , with ''
    return Number(num.replace(/,/g,''))
}

const operators = document.getElementsByClassName('operator')
for (let i = 0; i < operators.length; i++) {
   operators[i].addEventListener('click',(e)=>{
    if(e.target.id == 'clear'){
        printHistory('')
        printOutput('')
    }
    if(e.target.id == 'backspace'){
      let output = reverseNumberFormat(getOutput()).toString()
      if(output){
          //let text =  'hello' -> text.substring(0,4) = hell
          output = output.substring(0,output.length - 1)
          printOutput(output)
      }
    }

    else{
        let output=getOutput();
        let history=getHistory();
        if(output=="" && history!=""){
            if(isNaN(history[history.length-1])){
                history= history.substring(0,history.length-1);
            }
        }
        if(output!="" || history!=""){
            output = output==""?output:reverseNumberFormat(output);
            history=history+output;
            if(e.target.id=="="){
                let result=eval(history);
                printOutput(result);
                printHistory("");
            }
            else{
                history=history+e.target.id;
                printHistory(history);
                printOutput("");
            }
        }
    }


   })
    
}

const numbers = document.getElementsByClassName('number')
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',(e)=>{
        let output = reverseNumberFormat(getOutput())
       
        if(output!=NaN){
            output += e.target.innerText
            printOutput(output)
        }
   })
    
}


// printOutput("1254965646")
// console.log(reverseNumberFormat(getOutput()))