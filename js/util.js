function formatNumber(number) {
    const numStr = number.toString()
    if(numStr === 'Infinity'|| numStr === "-Infinity"){
        return 'Erro'
    }

    if (numStr === "NaN"){
        return "Erro"
    }

    const maxDigits = 12

    if(Math.abs(number) >= 1e12){
        return number.toExponencial(6)
    }

    if(Number.isInteger(Number)){
        return numStr.toString()
    }
}