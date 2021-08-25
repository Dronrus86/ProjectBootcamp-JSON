const currencyButton = document.querySelector('.currencyButton');    //Кнопка "У меня есть"
const changeButton = document.querySelector('.changeButton');       //Кнопка  "Хочу купить"
const heveInput = document.querySelector('.heveInput');            //Инпут "У меня есть"
const changeInput = document.querySelector('.changeInput');       //Инпут "Хочу купить"
const translationHave = document.querySelector('.translation_have');      //   
const translationChange = document.querySelector('.translation_change'); //









let ret = {};

getCur()
async function getCur(){
    const resp = await fetch('https://api.exchangerate.host/latest');
    const data = await resp.json();
    const result =  await data;



    console.log(result.rates.RUB);
    ret.RUB = result.rates.RUB,
    ret.USD = result.rates.USD,
    ret.EUR = result.rates.EUR,
    ret.EUR = result.rates.GBP,


    translationHave.textContent = ret.RUB;
    translationChange.textContent = ret.USD;
    
}
    

  


heveInput.oninput = function(){

    changeInput.value = (parseFloat(changeInput.value) / ret.USD).toFixed(4) ;
    //console.log( ret.RUB);
}

//changeInput.oninput = function(){
    //console.log('Hi hi ');
//}