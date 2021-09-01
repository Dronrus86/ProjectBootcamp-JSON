const currencyButton = document.getElementsByClassName('.currencyButton');    //Кнопка "У меня есть"
const changeButton = document.getElementsByClassName('.changeButton');       //Кнопка  "Хочу купить"
const heveInput = document.querySelector('.heveInput');            //Инпут "У меня есть"
const changeInput = document.querySelector('.changeInput');       //Инпут "Хочу купить"
const translationHave = document.querySelector('.translation_have');      //  p - хочу купить 
const translationChange = document.querySelector('.translation_change'); // р- у меняесть 









let ret = {};

getCur()
async function getCur(){
    const response = await fetch('https://api.exchangerate.host/latest');
    const result = await response.json();
    const rates = result.rates;
    for (let key in rates) {
    ret[key] = rates[key];

}


const translationHave = document.querySelector('.currencyButtonActiv');      //  кнопка активная 'у меня есть' 
const translationChange = document.querySelector('.changeButtonActiv');      // кнпка активная 'хочу купить.' 
changeInput.value = (heveInput.value*ret[translationHave.value] / ret[translationChange.value]).toFixed(4);
    
}


window.onload = function (){
    let changeButton = document.getElementsByClassName('.changeButton'); 
    for(let i = 0; i < changeButton.length; i++)
    changeButton[i].onclick = function (event){
             console.log(changeButton);
               
           }
}