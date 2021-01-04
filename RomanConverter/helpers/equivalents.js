// An array with the equivalents between roman and arabic numbers on different objects
exports.romanEquivalents = [
    { decimal: 1000, roman: 'M' },
    { decimal: 900, roman: 'CM' },
    { decimal: 500, roman: 'D' },
    { decimal: 400, roman: 'CD' },
    { decimal: 100, roman: 'C' },
    { decimal: 90, roman: 'XC' },
    { decimal: 50, roman: 'L' },
    { decimal: 40, roman: 'XL' },
    { decimal: 10, roman: 'X' },
    { decimal: 9, roman: 'IX' },
    { decimal: 5, roman: 'V' },
    { decimal: 4, roman: 'IV' },
    { decimal: 1, roman: 'I' }
];

// An object with the equivalents between roman and arabic numbers on keys
exports.romanEquivalentsOnArabic = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
}