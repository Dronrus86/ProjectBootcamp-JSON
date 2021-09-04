
const currencyButton = document.querySelectorAll('.currencyButton');    //Кнопка "У меня есть"
const changeButton = document.querySelectorAll('.changeButton');       //Кнопка  "Хочу купить"
const heveInput = document.querySelector('.heveInput');            //Инпут "У меня есть"
const changeInput = document.querySelector('.changeInput');       //Инпут "Хочу купить"
const translationHaveText = document.querySelector('.translation_have');      //  p - у меня есть 
const translationChangeText = document.querySelector('.translation_change'); // р- хчу купить 

let ret = {};

    async function getCur() {
    const response = await fetch('https://api.exchangerate.host/latest');
    const result = await response.json();
    const rates = result.rates;
    for (let key in rates) {
        ret[key] = rates[key];
    }
    const translationHave = document.querySelector('.currencyButtonActiv');      //  кнопка активная 'у меня есть' 
    const translationChange = document.querySelector('.changeButtonActiv');      // кнпка активная 'хочу купить.' 
    changeInput.value = (heveInput.value * ret[translationChange.value] / ret[translationHave.value]).toFixed(4);
    translationText();
}

      currencyButton .forEach(btn =>{
      btn.addEventListener('click', (event)=> {
      const  translationHave = document.querySelector('.currencyButtonActiv'); //  кнопка активная 'у меня есть' 
      const  translationChange = document.querySelector('.changeButtonActiv');// кнпка активная 'хочу купить.' 
      translationHave.classList.remove('currencyButtonActiv');
      event.target.classList.toggle('currencyButtonActiv');
      changeInput.value = (heveInput .value * ret[translationChange.value] / ret[event.target.value]).toFixed(4);  
      translationText();    
})

    heveInput.addEventListener('input', () => {
    const  translationHave = document.querySelector('.currencyButtonActiv');  //  кнопка активная 'у меня есть' 
    const  translationChange = document.querySelector('.changeButtonActiv'); // кнпка активная 'хочу купить.' 
    changeInput.value = (heveInput .value * ret[translationChange.value] /ret[translationHave.value] ).toFixed(4);
    
})

 })
    changeButton .forEach(but =>{
    but.addEventListener('click', (event)=> {
    const  translationHave = document.querySelector('.currencyButtonActiv'); //  кнопка активная 'у меня есть' 
    const  translationChange = document.querySelector('.changeButtonActiv');// кнпка активная 'хочу купить.' 
    translationChange.classList.remove('changeButtonActiv');
    event.target.classList.toggle('changeButtonActiv');
    heveInput.value = (changeInput .value * ret[translationHave.value] / ret[event.target.value]).toFixed(4);  
    translationText();
})

  changeInput.addEventListener('input', () => {
  const  translationHave = document.querySelector('.currencyButtonActiv');  //  кнопка активная 'у меня есть' 
  const  translationChange = document.querySelector('.changeButtonActiv'); // кнпка активная 'хочу купить.' 
  heveInput.value = (changeInput .value * ret[translationHave.value] /ret[translationChange.value] ).toFixed(4);

})

})

    translationText = () => {    
    const  translationHave = document.querySelector('.currencyButtonActiv');  //  кнопка активная 'у меня есть' 
    const  translationChange = document.querySelector('.changeButtonActiv'); // кнпка активная 'хочу купить.'
    translationHaveText.innerHTML = `1 ${translationHave.value} = ${(1 * ret [translationChange.value] / ret[translationHave.value]).toFixed(4)} ${translationChange.value}`;
    translationChangeText.innerHTML = `1 ${translationChange.value} = ${(1 * ret [translationHave.value] / ret[translationChange.value]).toFixed(4)} ${translationHave.value}`;
}



getCur();
