function isPalindromo(str) {

    const sanitizedStr = str
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase();
    

    const reversedStr = sanitizedStr.split('').reverse().join('');
    
    return sanitizedStr === reversedStr;
}

module.exports = {isPalindromo};
