// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
};

const fromDollarToYen = function (valueInDollar) {
    
    let valueInYen = (oneEuroIs["USD"] * oneEuroIs['JPY']) * valueInDollar;

    return valueInYen;
};

const fromYenToPound = function (valueInYen) {
    
    let valueInPound = (1/ oneEuroIs["JPY"] * oneEuroIs["GBP"]) * valueInYen;

    return valueInPound;
};

console.log(fromYenToPound(2));


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

