const currencyButton = document.querySelectorAll('.currencyButton');    //Кнопка "У меня есть"
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
changeInput.value = (heveInput.value*ret[translationChange.value] / ret[translationHave.value] ).toFixed(4);
    
}


window.onload = function() {
    function strPad() {
      console.log(this.value);
    }
    for (let i = 0; i < currencyButton.length; i++) {
        currencyButton[i].onclick = strPad,
        function(event) {
        const translationHave = document.querySelector('.currencyButtonActiv');  //  кнопка активная 'у меня есть' 
        const translationChange = document.querySelector('.changeButtonActiv');  
        event.target.classList.toggle('currencyButtonActiv');    // кнпка активная 'хочу купить.' 
        changeInput.value = (heveInput.value*ret[translationChange.value] / ret[event.target.value ]).toFixed(4);
    }
  }

  heveInput.addEventListener('input', function() {
    const translationHave = document.querySelector('.currencyButtonActiv');      //  кнопка активная 'у меня есть' 
    const translationChange = document.querySelector('.changeButtonActiv');  
    changeInput.value = (heveInput.value*ret[translationChange.value] / ret[translationHave.value] ).toFixed(4);
})
}


