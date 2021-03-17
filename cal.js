var screen = document.querySelector('.E-value')
buttons = document.querySelectorAll('button');
let screenvalue = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        // console.log(buttonText);
        
        if(buttonText == "AC"){
            screenvalue = '';
            screen.innerText = screenvalue;
            
        }
        else if(buttonText == "C"){
            screenvalue = screenvalue.substr(0, screenvalue.length - 1);
            screen.innerText = screenvalue;
            
        }
        else if(buttonText == "="){
            
            screen.innerText = eval(screenvalue);
            
        }
        else{
            screenvalue += buttonText;
            screen.innerText = screenvalue;
        }
    } )
}









// class Calculator{
//     constructor(firstdisplay,seconddisplay){
//         this.firstdisplay=firstdisplay
//         this.seconddisplay=seconddisplay
//         this.clear()
//     }
//     appendNumber(number){
//         this.firstdisplay = number
//     }
//     appendOperator(operation){

//     }
//     clear(){
//         this.firstdisplay=''
//         this.seconddisplay=''
//         this.operation=undefined
//     }
//     delete(){

//     }
//     equal(){

//     }
//     displayresult(){
//         this.firstdisplay.innerText = this.firstdisplay
//     }
// }


// const numbtns = document.querySelectorAll('.calbtn')
// const operationnumbtns = document.querySelectorAll('.cal-operation-btn')
// const equalsbtn = document.querySelector('.equalbtn')
// const deletebtn = document.querySelector('.delbtn')
// const clearbtn = document.querySelector('.clear-field')
// const firstdisplay = document.querySelector('.first-value')
// const seconddisplay = document.querySelector('.second-value')

// const calculator = new Calculator(firstdisplay,seconddisplay)
// numbtns.forEach(button => {
//     button.addEventListener('click', any => {
//         calculator.appendNumber(button.innerHTML)
//         calculator.displayresult()
//     })
// })
