Array.prototype.concatMap = function concatMap(projectionFunctionThatReturnsArray) {
	return this.map( item => {
				return projectionFunctionThatReturnsArray(item);
			}).concatAll();
		// apply the concatAll function to flatten the two-dimensional array
};

/*
	var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
	// collect all the words for each number, in every language, in a single, flat list
	var allWords = [0,1,2].
		concatMap(function(index) {
			return spanishFrenchEnglishWords[index];
		});

	JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
*/
	