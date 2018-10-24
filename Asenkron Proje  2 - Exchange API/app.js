// Elementleri Seçme
const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect);


eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();

    };
    secondSelect.onchange = function(){
     currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
       ui.changeSecond();   
    };
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);

    currency.exchange()
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err => console.log(err));


}