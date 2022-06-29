// Write a JavaScript program to search a date within a string using regular expression

function searchDateInString(str) {
    const dateRegex = /(\d{2}\/\d{2}\/\d{4})/
    return str.match(dateRegex)[1]
}

searchDateInString('isso é uma string criada em 29/06/2022 para o treinamento da ioasys')