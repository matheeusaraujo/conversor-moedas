const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select"); // Moeda de destino
const currencySelectFrom = document.querySelector(".currency-select-from"); // Moeda de origem

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor na moeda de origem
    const currencyValueConverted = document.querySelector(".currency-value"); // Valor na moeda de destino

    // Taxas de câmbio baseadas no dólar
    const exchangeRates = {
        dolar: 1, // Dólar como base
        euro: 0.85, // 1 dólar = 0.85 euros
        libra: 0.75, // 1 dólar = 0.75 libras
        real: 6.2, // 1 dólar = 5.2 reais
    };

    // Identificar as moedas de origem e destino
    const fromCurrency = currencySelectFrom.value;
    const toCurrency = currencySelect.value;

    // Conversão direta entre as moedas
    const convertedValue = inputCurrencyValue * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);

    // Formatar os valores para exibição
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: fromCurrency === "dolar" ? "USD" : 
                 fromCurrency === "euro" ? "EUR" : 
                 fromCurrency === "libra" ? "GBP" : "BRL",
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: toCurrency === "dolar" ? "USD" : 
                 toCurrency === "euro" ? "EUR" : 
                 toCurrency === "libra" ? "GBP" : "BRL",
    }).format(convertedValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    const currencyNameFrom = document.getElementById("currency-name-from");
    const currencyImageFrom = document.querySelector(".currency-img-from");

    // Atualizar informações da moeda de destino
    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    } 
    else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    } 
    else if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    } 
    else if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
    }

    // Atualizar informações da moeda de origem
    if (currencySelectFrom.value === "dolar") {
        currencyNameFrom.innerHTML = "Dólar Americano"
        currencyImageFrom.src = "./assets/dolar.png"

    } 
    else if (currencySelectFrom.value === "euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImageFrom.src = "./assets/euro.png"

    }
     else if (currencySelectFrom.value === "libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImageFrom.src = "./assets/libra.png"

    }
     else if (currencySelectFrom.value === "real") {
        currencyNameFrom.innerHTML = "Real Brasileiro"
        currencyImageFrom.src = "./assets/real.png"
    }

    convertValues();
}

// Eventos
currencySelectFrom.addEventListener("change", changeCurrency);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
