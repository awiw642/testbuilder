var detectNetwork = function(cardNumber) {
	let twoDigitPrefix = parseInt(cardNumber.substring(0, 2));
	let threeDigitPrefix = parseInt(cardNumber.substring(0, 3));
	let fourDigitPrefix = parseInt(cardNumber.substring(0, 4));
	let sixDigitPrefix = parseInt(cardNumber.substring(0, 6));
	let cardDigitLength = cardNumber.length;
	return (dinersClubCardValidation(twoDigitPrefix, cardDigitLength) ||
					americanExpressCardValidation(twoDigitPrefix, cardDigitLength) ||
					switchCardValidation(fourDigitPrefix, sixDigitPrefix, cardDigitLength)||
					visaCardValidation(twoDigitPrefix, cardDigitLength) ||
					masterCardValidation(twoDigitPrefix, cardDigitLength) ||
					discoverCardValidation(twoDigitPrefix, threeDigitPrefix, fourDigitPrefix, cardDigitLength) ||
					maestroCardValidation(fourDigitPrefix, cardDigitLength) ||
					chinaUnionPayCardValidation(threeDigitPrefix, fourDigitPrefix, sixDigitPrefix, cardDigitLength));
};

function dinersClubCardValidation(prefixTwoDigit, digitLength) {
	const dinersClubCardPrefix = [38, 39];
	const dinersClubDigitLength = 14;
	if(dinersClubCardPrefix.indexOf(prefixTwoDigit) >= 0 && digitLength == dinersClubDigitLength) {
		return "Diner's Club";
	}
}

function americanExpressCardValidation(prefixTwoDigit, digitLength) {
	const americanExpressCardPrefix = [34, 37];
	const americanExpressDigitLength = 15;
	if(americanExpressCardPrefix.indexOf(prefixTwoDigit) >= 0 && digitLength == americanExpressDigitLength) {
		return "American Express";
	}
}

function switchCardValidation(prefixFourDigit, prefixSixDigit, digitLength) {
	const switchCardPrefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
	const switchDigitLength = [16, 18, 19];
	if((switchCardPrefix.indexOf(prefixFourDigit) >= 0 || switchCardPrefix.indexOf(prefixSixDigit) >= 0) && switchDigitLength.indexOf(digitLength) >= 0) {
		return 'Switch'
	}
}

function visaCardValidation(prefixTwoDigit, digitLength) {
	const visaCardPrefix = /4[0-9]{1}/g;
	const visaDigitLength = [13, 16, 19];
	if(visaCardPrefix.test(prefixTwoDigit) && visaDigitLength.indexOf(digitLength) >= 0) {
		return "Visa";
	}
}

function masterCardValidation(prefixTwoDigit, digitLength) {
	const masterCardPrefix = [51, 52, 53, 54, 55];
	const masterCardDigitLength = 16;
	if(masterCardPrefix.indexOf(prefixTwoDigit) >= 0 && digitLength == masterCardDigitLength) {
		return "MasterCard";
	}
}

function discoverCardValidation(prefixTwoDigit, prefixThreeDigit, prefixFourDigit, digitLength) {
	const discoverCardPrefix = [6011, 644, 645, 646, 647, 648, 649, 65];
	const discoverDigitLength = [16, 19];
	if((discoverCardPrefix.indexOf(prefixTwoDigit) >= 0 || discoverCardPrefix.indexOf(prefixThreeDigit) >= 0 || discoverCardPrefix.indexOf(prefixFourDigit) >= 0) && discoverDigitLength.indexOf(digitLength) >= 0) {
		return "Discover";
	}
}

function maestroCardValidation(prefixFourDigit, digitLength) {
	const maestroCardPrefix = [5018, 5020, 5038, 6304];
	const maestroDigitLength = [12, 13, 14, 15, 16, 17, 18, 19];
	if(maestroCardPrefix.indexOf(prefixFourDigit) >= 0 && maestroDigitLength.indexOf(digitLength) >= 0) {
		return "Maestro";
	}
}

function chinaUnionPayCardValidation(prefixThreeDigit, prefixFourDigit, prefixSixDigit, digitLength) {
	const chinaUnionPayPrefix = [624, 625, 626];
	const chinaUnionPayDigitLength = [16, 17, 18, 19];
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
