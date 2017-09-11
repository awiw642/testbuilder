var detectNetwork = function(cardNumber) {
	var twoDigitPrefix = parseInt(cardNumber.substring(0, 2));
	var threeDigitPrefix = parseInt(cardNumber.substring(0, 3));
	var fourDigitPrefix = parseInt(cardNumber.substring(0, 4));
	var sixDigitPrefix = parseInt(cardNumber.substring(0, 6));
	var cardDigitLength = cardNumber.length;
	return (dinersClubCardValidation(twoDigitPrefix, cardDigitLength) || americanExpressCardValidation(twoDigitPrefix, cardDigitLength) || switchCardValidation(fourDigitPrefix, sixDigitPrefix, cardDigitLength)|| visaCardValidation(twoDigitPrefix, cardDigitLength) || masterCardValidation(twoDigitPrefix, cardDigitLength) || discoverCardValidation(twoDigitPrefix, threeDigitPrefix, fourDigitPrefix, cardDigitLength) || maestroCardValidation(fourDigitPrefix, cardDigitLength) || chinaUnionPayCardValidation(threeDigitPrefix, fourDigitPrefix, sixDigitPrefix, cardDigitLength));
};

function dinersClubCardValidation(prefixTwoDigit, digitLength) {
	var dinersClubCardPrefix = [38, 39];
	var dinersClubDigitLength = 14;

	if(dinersClubCardPrefix.indexOf(prefixTwoDigit) >= 0 && digitLength == dinersClubDigitLength) {
		return "Diner's Club";
	}
}

function americanExpressCardValidation(prefixTwoDigit, digitLength) {
	var americanExpressCardPrefix = [34, 37];
	var americanExpressDigitLength = 15;

	if(americanExpressCardPrefix.indexOf(prefixTwoDigit) >= 0 && digitLength == americanExpressDigitLength) {
		return "American Express";
	}
}

function switchCardValidation(prefixFourDigit, prefixSixDigit, digitLength) {
	var switchCardPrefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
	var switchDigitLength = [16, 18, 19];

	if((switchCardPrefix.indexOf(prefixFourDigit) >= 0 || switchCardPrefix.indexOf(prefixSixDigit) >= 0) && switchDigitLength.indexOf(digitLength) >= 0) {
		return 'Switch'
	}
}

function visaCardValidation(prefixTwoDigit, digitLength) {
	var visaCardPrefix = /4[0-9]{1}/g;
	var visaDigitLength = [13, 16, 19];

	if(visaCardPrefix.test(prefixTwoDigit) && visaDigitLength.indexOf(digitLength) >= 0) {
		return "Visa";
	}
}

function masterCardValidation(prefixTwoDigit, digitLength) {
	var masterCardPrefix = [51, 52, 53, 54, 55];
	var masterCardDigitLength = 16;

	if(masterCardPrefix.indexOf(prefixTwoDigit) >= 0 && digitLength == masterCardDigitLength) {
		return "MasterCard";
	}
}

function discoverCardValidation(prefixTwoDigit, prefixThreeDigit, prefixFourDigit, digitLength) {
	var discoverCardPrefix = [6011, 644, 645, 646, 647, 648, 649, 65];
	var discoverDigitLength = [16, 19];

	if((discoverCardPrefix.indexOf(prefixTwoDigit) >= 0 || discoverCardPrefix.indexOf(prefixThreeDigit) >= 0 || discoverCardPrefix.indexOf(prefixFourDigit) >= 0) && discoverDigitLength.indexOf(digitLength) >= 0) {
		return "Discover";
	}
}

function maestroCardValidation(prefixFourDigit, digitLength) {
	var maestroCardPrefix = [5018, 5020, 5038, 6304];
	var maestroDigitLength = [12, 13, 14, 15, 16, 17, 18, 19];
	if(maestroCardPrefix.indexOf(prefixFourDigit) >= 0 && maestroDigitLength.indexOf(digitLength) >= 0) {
		return "Maestro";
	}
}

function chinaUnionPayCardValidation(prefixThreeDigit, prefixFourDigit, prefixSixDigit, digitLength) {
	var chinaUnionPayPrefix = [624, 625, 626];
	var chinaUnionPayDigitLength = [16, 17, 18, 19];

	for(var unionPayPrefixAdditionOne = 622126; unionPayPrefixAdditionOne <= 622925; unionPayPrefixAdditionOne++) {
		chinaUnionPayPrefix.push(unionPayPrefixAdditionOne);
	}

	for(var unionPayPrefixAdditionTwo = 6282; unionPayPrefixAdditionTwo <= 6288; unionPayPrefixAdditionTwo++) {
		chinaUnionPayPrefix.push(unionPayPrefixAdditionTwo);
	}

	if((chinaUnionPayPrefix.indexOf(prefixThreeDigit) >= 0 || chinaUnionPayPrefix.indexOf(prefixFourDigit) >= 0 || chinaUnionPayPrefix.indexOf(prefixSixDigit) >= 0) && chinaUnionPayDigitLength.indexOf(digitLength) >= 0) {
		return "China UnionPay";
	}
}
