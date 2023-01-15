module.exports = function toReadable (number) {
    const textByTwentyDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    const textBySecondDigit = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const textByThirdDigit = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    const digit1 = number % 10;
    const digit2 = Math.floor((number % 100) / 10);
    const digit3 = Math.floor(number / 100);
    let result;
    if (number === 0) {
        result = 'zero'
    } else if (number <= 20) {
        result = textByTwentyDigits[number]
    } else if (digit2 === 1 && digit1 >= 0) {
        result = (`${textByThirdDigit[digit3]} ${textByTwentyDigits[number % 100]}`).trim() 
    }
      else {
        result = (`${textByThirdDigit[digit3]} ${textBySecondDigit[digit2]} ${textByTwentyDigits[digit1]}`).trim()
    }
    if (digit3 && digit2 === 0) {
        result = (`${textByThirdDigit[digit3]} ${textByTwentyDigits[digit1]}`).trim()
    }     
return result;
}