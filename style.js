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


    ret = result.rates.USD
    console.log(ret);
    translationHave.textContent = ret;

    
    }
    

  


heveInput.oninput = function(){
    console.log('Hi');
    ret.value = parseFloat(changeInput.value) / 4 ;
}

changeInput.oninput = function(){
    console.log('Hi hi ');
}