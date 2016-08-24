var loop = function(collection, callback){

  if (Array.isArray(collection) || typeof collection === "string") {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i], i);
    }
  } else if (typeof collection === "object") {
    for (var key in collection){
      callback(collection[key], key);
    }
  }
};


// 1. Build transform.
var transform = function(collection, callback) {
	var results = [];
	loop(collection, function(item, index) {
		//console.log(item);
		results.push(callback(item, index));
	});
	return results;
};

// 2. allNumbersMultipliedByThree
var numbers = [1, 2, 3, 4, 5];
var allNumbersMultipliedByThree = transform(numbers, function(number) {
	return number * 3;
});
console.log("All Numbers Multiplied By 3");
console.dir(allNumbersMultipliedByThree);

// 3. bestSentenceToUpperCase
var bestSentence = "This is the best six week course ever!";
var bestSentenceToUpperCase = function(sentence) {
	return transform(sentence, function(letter) {
			return letter.toUpperCase();
	}).join("");
};
console.log("Best Sentence To Upper Case");
console.log(bestSentenceToUpperCase(bestSentence));

// 4. collectedContents
var person = {name: 'Jon', greatestFear: 'fearItself'};
var collectedContents = function(personObject) {
	return transform(personObject, function(value, key) {
		return [key, value];
	});
}
console.log("Collected Contents Array");
console.dir(collectedContents(person));

// 5. multByThree
var multByThree = function(collection) {
	return transform(collection, function(number) {
		return number * 3;
	});
}
console.log("Multiplied By Three (New Definition)");
var multByThreeNumbers = multByThree(numbers);
console.dir(multByThreeNumbers);
console.dir(multByThree(multByThreeNumbers));

// 6. upperCase
// same as #3, renamed the function per requirement (since #3 solution was already wrapping transform() to begin with)
var upperCase = function(sentence) {
	return transform(sentence, function(letter) {
			return letter.toUpperCase();
	}).join("");
};
console.log("Upper Case");
console.log(bestSentenceToUpperCase(bestSentence));

// 7. contentsCollection
// same as #4, renamed the function per requirement (since #4 solution was already wrapping transform() to begin with)
var contentsCollection = function(personObject) {
	return transform(personObject, function(value, key) {
		return [key, value];
	});
}
console.log("Contents Collection Array");
var collectedContents = contentsCollection(person);
console.dir(collectedContents);

// 8. multByWhatever
var multByWhatever = function(collection, inputNum) {
	return transform(numbers, function(number) {
		return number * inputNum;
	});
};
console.log("Multiply By Whatever");
console.dir(multByWhatever(numbers, 5));
console.dir(multByWhatever(numbers, 10));

// 9. divideByWhatever
var divideByWhatever = function(collection, inputNum) {
	return transform(numbers, function(number) {
		return number / inputNum;
	});
};
console.log("Divide By Whatever");
console.dir(divideByWhatever(numbers, 1));
console.dir(divideByWhatever(numbers, 10));

// 10. switchCase
// "case" is a reserved keyword in JS, changing the parameter name to "toCase" instead
var switchCase = function(sentence, toCase) {
	return transform(sentence, function(letter) {
		if (toCase === "upper")
			return letter.toUpperCase();
		else if (toCase === "lower")
			return letter.toLowerCase();
		else //invalid case parameter, return the letter "as-is"
			return letter;
	}).join("");
};
console.log("Switch Case");
console.log(switchCase(bestSentence, "lower"));
console.log(switchCase(bestSentence, "upper"));
console.log(switchCase(bestSentence, "something"));

// 11. contentsCollector
var contentsCollector = function(object, specifier) {
	return transform(object, function(value, key) {
		if (specifier === "keys")
			return key;
		else if (specifier === "values")
			return value;
		else 
			return [key, value];
	});
};
console.log("Contents Collector");
console.dir(contentsCollector(person, "keys"));
console.dir(contentsCollector(person, "values"));
console.dir(contentsCollector(person));

// 13. makeArray
var makeArray = function(number) {
	var result = Array(number);
	loop(result, function(value, index) {
		result[index] = index;
	});
	return result;
};
console.log("Make Array of Numbers");
console.dir(makeArray(10));

// 14. makeRow
var makeRow = function(inputArray) {
	return transform(inputArray, function() {
		return {
			state: null
		};
	});
};
console.log("Make Row of State");
console.dir(makeRow(makeArray(10)));

// 15. makeTicTacToeBoard

// 16. setXorO 
