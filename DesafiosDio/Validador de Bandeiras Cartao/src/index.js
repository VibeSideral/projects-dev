function getCardFlag(cardNumber) {
    const cardPatterns = [
        { flag: "Visa", regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
        { flag: "MasterCard", regex: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{2}|[3-6][0-9]{3}|7[0-1][0-9]{2}|720[0-9]{2})[0-9]{10})$/ },
        { flag: "American Express", regex: /^3[47][0-9]{13}$/ },
        { flag: "Diners Club", regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
        { flag: "JCB", regex: /^(?:2131|1800|35\d{3})\d{11}$/ },
        { flag: "enRoute", regex: /^(?:2(?:014|149)[0-9]{11}|5[0-9]{14})$/ },
        { flag: "Discover", regex: /^(6011|65|64[4-9])[0-9]*$/ },
        { flag: "Hipercard", regex: /^6062[0-9]*$/ },
        { flag: "Voyager", regex: /^8699[0-9]{11}$/ },
        { flag: "Aura", regex: /^(5078\d{2}|50[0-9]{3})\d{10,12}$/ },
    ];

    for (const pattern of cardPatterns) {
        if (pattern.regex.test(cardNumber)) {
            return pattern.flag;
        }
    }

    return "Unknown";
}

// Example usage:
const cardNumber = "4111111111111111"; // Replace with the card number you want to check

const cardFlag = getCardFlag(cardNumber);
console.log(`The card flag is: ${cardFlag}`);