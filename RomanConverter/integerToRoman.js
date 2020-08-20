exports.integerToRoman = (numToConvert) => {
    for (const roman in romanEquivalentsOnArabic) {
        if (numToConvert >= romanEquivalentsOnArabic[roman]) {
            result += roman;
            return numberConverter(numToConvert - romanEquivalentsOnArabic[roman], result);
        } else if (numToConvert === 0) {
            return `${result}`;
        }
    }
}

