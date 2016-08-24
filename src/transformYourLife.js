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

// 7. contentsCollection

// 8. multByWhatever

// 9. divideByWhatever

// 10. switchCase

// 11. contentsCollector

// 13. makeArray

// 14. makeRow

// 15. makeTicTacToeBoard

// 16. setXorO 
