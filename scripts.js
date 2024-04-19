const buttonToConvert = document.querySelector(".button-to-convert")
const selectConvertFrom = document.querySelector(".select-convert-from")
const selectConvertTo = document.querySelector(".select-convert-to")

function currencyConversion() {
    const inputValueToConvert = document.querySelector(".input-value-to-convert").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const convertedResult = document.querySelector(".converted-result")

    const dolarToday = 5.25
    const euroToday = 5.58
    const libraToday = 6.52
    const ieneToday = 0.034
    const bitcoinToday = 319678.00
    const realToday = 1

    //REAL



    if (selectConvertFrom.value == "real-from" && selectConvertTo.value == "dolar-to") {

        const result = inputValueToConvert / dolarToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(result)

    }




    if (selectConvertFrom.value == "real-from" && selectConvertTo.value == "euro-to") {

        const result = inputValueToConvert / euroToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(result)
    }





    if (selectConvertFrom.value == "real-from" && selectConvertTo.value == "libra-to") {

        const result = inputValueToConvert / libraToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(result)
    }



    if (selectConvertFrom.value == "real-from" && selectConvertTo.value == "iene-to") {

        const result = inputValueToConvert / ieneToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(result)
    }



    if (selectConvertFrom.value == "real-from" && selectConvertTo.value == "bitcoin-to") {

        const result = inputValueToConvert / bitcoinToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(result)
    }



    //DOLLAR

    if (selectConvertFrom.value == "dolar-from" && selectConvertTo.value == "real-to") {

        const result = dolarToday * inputValueToConvert

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(result)
    }

    if (selectConvertFrom.value == "dolar-from" && selectConvertTo.value == "euro-to") {

        const result = dolarToday * inputValueToConvert / euroToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(result)
    }

    if (selectConvertFrom.value == "dolar-from" && selectConvertTo.value == "libra-to") {

        const result = dolarToday * inputValueToConvert / libraToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(result)
    }

    if (selectConvertFrom.value == "dolar-from" && selectConvertTo.value == "iene-to") {

        const result = dolarToday * inputValueToConvert / ieneToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(result)
    }

    if (selectConvertFrom.value == "dolar-from" && selectConvertTo.value == "bitcoin-to") {

        const result = dolarToday * inputValueToConvert / bitcoinToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(result)
    }

    //EURO

    if (selectConvertFrom.value == "euro-from" && selectConvertTo.value == "real-to") {

        const result = euroToday * inputValueToConvert

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(result)
    }

    if (selectConvertFrom.value == "euro-from" && selectConvertTo.value == "dolar-to") {

        const result = euroToday * inputValueToConvert / dolarToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(result)
    }

    if (selectConvertFrom.value == "euro-from" && selectConvertTo.value == "libra-to") {

        const result = euroToday * inputValueToConvert / libraToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(result)
    }

    if (selectConvertFrom.value == "euro-from" && selectConvertTo.value == "iene-to") {

        const result = euroToday * inputValueToConvert / ieneToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(result)
    }

    if (selectConvertFrom.value == "euro-from" && selectConvertTo.value == "bitcoin-to") {

        const result = euroToday * inputValueToConvert / bitcoinToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(result)
    }


    //LIBRA

    if (selectConvertFrom.value == "libra-from" && selectConvertTo.value == "real-to") {

        const result = libraToday * inputValueToConvert

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(result)
    }

    if (selectConvertFrom.value == "libra-from" && selectConvertTo.value == "dolar-to") {

        const result = libraToday * inputValueToConvert / dolarToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(result)
    }

    if (selectConvertFrom.value == "libra-from" && selectConvertTo.value == "euro-to") {

        const result = libraToday * inputValueToConvert / euroToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(result)
    }

    if (selectConvertFrom.value == "libra-from" && selectConvertTo.value == "iene-to") {

        const result = libraToday * inputValueToConvert / ieneToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(result)
    }

    if (selectConvertFrom.value == "libra-from" && selectConvertTo.value == "bitcoin-to") {

        const result = libraToday * inputValueToConvert / bitcoinToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(result)
    }

    // IENE

    if (selectConvertFrom.value == "iene-from" && selectConvertTo.value == "real-to") {

        const result = ieneToday * inputValueToConvert

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(result)
    }

    if (selectConvertFrom.value == "iene-from" && selectConvertTo.value == "dolar-to") {

        const result = ieneToday * inputValueToConvert / dolarToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(result)
    }

    if (selectConvertFrom.value == "iene-from" && selectConvertTo.value == "euro-to") {

        const result = ieneToday * inputValueToConvert / euroToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(result)
    }

    if (selectConvertFrom.value == "iene-from" && selectConvertTo.value == "libra-to") {

        const result = ieneToday * inputValueToConvert / libraToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBN"
        }).format(result)
    }

    if (selectConvertFrom.value == "iene-from" && selectConvertTo.value == "bitcoin-to") {

        const result = ieneToday * inputValueToConvert / bitcoinToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(result)
    }

    // BITCOIN

    if (selectConvertFrom.value == "bitcoin-from" && selectConvertTo.value == "real-to") {

        const result = bitcoinToday * inputValueToConvert

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "BTC"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(result)
    }

    if (selectConvertFrom.value == "bitcoin-from" && selectConvertTo.value == "dolar-to") {

        const result = bitcoinToday * inputValueToConvert / dolarToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "BTC"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(result)
    }

    if (selectConvertFrom.value == "bitcoin-from" && selectConvertTo.value == "euro-to") {

        const result = bitcoinToday * inputValueToConvert / euroToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "BTC"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(result)
    }

    if (selectConvertFrom.value == "bitcoin-from" && selectConvertTo.value == "libra-to") {

        const result = bitcoinToday * inputValueToConvert / libraToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "BTC"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBN"
        }).format(result)
    }

    if (selectConvertFrom.value == "bitcoin-from" && selectConvertTo.value == "iene-to") {

        const result = bitcoinToday * inputValueToConvert / ieneToday

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValueToConvert)

        convertedResult.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(result)
    }



}

function changeCurrencyFrom() {
    const nameToConvert = document.getElementById("name-to-convert")
    const currencyImgFrom = document.querySelector(".currency-img-from")

    if (selectConvertFrom.value == "select-from") {
        nameToConvert.innerHTML = "Moeda"
        currencyImgFrom.src = "./assets/img/moeda.png"
    }

    if (selectConvertFrom.value == "real-from") {
        nameToConvert.innerHTML = "Real"
        currencyImgFrom.src = "./assets/img/real.png"
    }

    if (selectConvertFrom.value == "dolar-from") {
        nameToConvert.innerHTML = "Dólar americano"
        currencyImgFrom.src = "./assets/img/dolar.png"
    }

    if (selectConvertFrom.value == "euro-from") {
        nameToConvert.innerHTML = "Euro"
        currencyImgFrom.src = "./assets/img/euro.png"
    }

    if (selectConvertFrom.value == "libra-from") {
        nameToConvert.innerHTML = "Libra"
        currencyImgFrom.src = "./assets/img/libra.png"
    }

    if (selectConvertFrom.value == "iene-from") {
        nameToConvert.innerHTML = "Iene"
        currencyImgFrom.src = "./assets/img/iene.png"
    }

    if (selectConvertFrom.value == "bitcoin-from") {
        nameToConvert.innerHTML = "Bitcoin"
        currencyImgFrom.src = "./assets/img/bitcoin.png"
    }

    currencyConversion()

}


function changeCurrencyTo() {
    const nameConvertedCurrency = document.getElementById("name-converted-currency")
    const currencyImgFor = document.querySelector(".currency-img-for")

    if (selectConvertTo.value == "select-to") {
        nameConvertedCurrency.innerHTML = "Moeda"
        currencyImgFor.src = "./assets/img/moeda.png"
    }

    if (selectConvertTo.value == "real-to") {
        nameConvertedCurrency.innerHTML = "Real"
        currencyImgFor.src = "./assets/img/real.png"
    }

    if (selectConvertTo.value == "dolar-to") {
        nameConvertedCurrency.innerHTML = "Dólar americano"
        currencyImgFor.src = "./assets/img/dolar.png"
    }

    if (selectConvertTo.value == "euro-to") {
        nameConvertedCurrency.innerHTML = "Euro"
        currencyImgFor.src = "./assets/img/euro.png"
    }

    if (selectConvertTo.value == "libra-to") {
        nameConvertedCurrency.innerHTML = "Libra"
        currencyImgFor.src = "./assets/img/libra.png"
    }

    if (selectConvertTo.value == "iene-to") {
        nameConvertedCurrency.innerHTML = "Iene"
        currencyImgFor.src = "./assets/img/iene.png"
    }

    if (selectConvertTo.value == "bitcoin-to") {
        nameConvertedCurrency.innerHTML = "Bitcoin"
        currencyImgFor.src = "./assets/img/bitcoin.png"
    }

    currencyConversion()

}

selectConvertFrom.addEventListener("change", changeCurrencyFrom)
selectConvertTo.addEventListener("change", changeCurrencyTo)
buttonToConvert.addEventListener("click", currencyConversion)

// disable selector values

const optionSelectFrom = document.getElementById("select-from")

const optionRealFrom = document.getElementById("real-from")
const optionDolarFrom = document.getElementById("dolar-from")
const optionEuroFrom = document.getElementById("euro-from")
const optionLibraFrom = document.getElementById("libra-from")
const optionIeneFrom = document.getElementById("iene-from")
const optionBitcoinFrom = document.getElementById("bitcoin-from")

const optionSelectTo = document.getElementById("select-to")

const optionRealTo = document.getElementById("real-to")
const optionDolarTo = document.getElementById("dolar-to")
const optionEuroTo = document.getElementById("euro-to")
const optionLibraTo = document.getElementById("libra-to")
const optionIeneTo = document.getElementById("iene-to")
const optionBitcoinTo = document.getElementById("bitcoin-to")


function disableSelectorValues() {

    // select from

    if (selectConvertFrom.value === "real-from") {
        optionRealTo.style.display = "none";
        optionDolarTo.style.display = "block";
        optionEuroTo.style.display = "block";
        optionLibraTo.style.display = "block";
        optionIeneTo.style.display = "block";
        optionBitcoinTo.style.display = "block";

        optionSelectFrom.style.display = "none";

    }

    if (selectConvertFrom.value === "dolar-from") {
        optionRealTo.style.display = "block";
        optionDolarTo.style.display = "none";
        optionEuroTo.style.display = "block";
        optionLibraTo.style.display = "block";
        optionIeneTo.style.display = "block";
        optionBitcoinTo.style.display = "block";

        optionSelectFrom.style.display = "none";

    }

    if (selectConvertFrom.value === "euro-from") {
        optionRealTo.style.display = "block";
        optionDolarTo.style.display = "block";
        optionEuroTo.style.display = "none";
        optionLibraTo.style.display = "block";
        optionIeneTo.style.display = "block";
        optionBitcoinTo.style.display = "block";

        optionSelectFrom.style.display = "none";

    }

    if (selectConvertFrom.value === "libra-from") {
        optionRealTo.style.display = "block";
        optionDolarTo.style.display = "block";
        optionEuroTo.style.display = "block";
        optionLibraTo.style.display = "none";
        optionIeneTo.style.display = "block";
        optionBitcoinTo.style.display = "block";

        optionSelectFrom.style.display = "none";

    }

    if (selectConvertFrom.value === "iene-from") {
        optionRealTo.style.display = "block";
        optionDolarTo.style.display = "block";
        optionEuroTo.style.display = "block";
        optionLibraTo.style.display = "block";
        optionIeneTo.style.display = "none";
        optionBitcoinTo.style.display = "block";

        optionSelectFrom.style.display = "none";

    }


    if (selectConvertFrom.value === "bitcoin-from") {
        optionRealTo.style.display = "block";
        optionDolarTo.style.display = "block";
        optionEuroTo.style.display = "block";
        optionLibraTo.style.display = "block";
        optionIeneTo.style.display = "block";
        optionBitcoinTo.style.display = "none";

        optionSelectFrom.style.display = "none";

    }


    // select to



    if (selectConvertTo.value === "real-to") {
        optionRealFrom.style.display = "none";
        optionDolarFrom.style.display = "block";
        optionEuroFrom.style.display = "block";
        optionLibraFrom.style.display = "block";
        optionIeneFrom.style.display = "block";
        optionBitcoinFrom.style.display = "block";

        optionSelectTo.style.display = "none";

    }

    if (selectConvertTo.value === "dolar-to") {
        optionRealFrom.style.display = "block";
        optionDolarFrom.style.display = "none";
        optionEuroFrom.style.display = "block";
        optionLibraFrom.style.display = "block";
        optionIeneFrom.style.display = "block";
        optionBitcoinFrom.style.display = "block";

        optionSelectTo.style.display = "none";

    }

    if (selectConvertTo.value === "euro-to") {
        optionRealFrom.style.display = "block";
        optionDolarFrom.style.display = "block";
        optionEuroFrom.style.display = "none";
        optionLibraFrom.style.display = "block";
        optionIeneFrom.style.display = "block";
        optionBitcoinFrom.style.display = "block";

        optionSelectTo.style.display = "none";

    }

    if (selectConvertTo.value === "libra-to") {
        optionRealFrom.style.display = "block";
        optionDolarFrom.style.display = "block";
        optionEuroFrom.style.display = "block";
        optionLibraFrom.style.display = "none";
        optionIeneFrom.style.display = "block";
        optionBitcoinFrom.style.display = "block";

        optionSelectTo.style.display = "none";

    }

    if (selectConvertTo.value === "iene-to") {
        optionRealFrom.style.display = "block";
        optionDolarFrom.style.display = "block";
        optionEuroFrom.style.display = "block";
        optionLibraFrom.style.display = "block";
        optionIeneFrom.style.display = "none";
        optionBitcoinFrom.style.display = "block";

        optionSelectTo.style.display = "none";

    }


    if (selectConvertTo.value === "bitcoin-to") {
        optionRealFrom.style.display = "block";
        optionDolarFrom.style.display = "block";
        optionEuroFrom.style.display = "block";
        optionLibraFrom.style.display = "block";
        optionIeneFrom.style.display = "block";
        optionBitcoinFrom.style.display = "none";

        optionSelectTo.style.display = "none";

    }

}

selectConvertFrom.addEventListener("change", disableSelectorValues)
selectConvertTo.addEventListener("change", disableSelectorValues)



