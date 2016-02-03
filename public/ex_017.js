var ex017 = function() {
	var ratings = [2,3,1,4,5];

	// You should return an array containing only the largest rating. Remember that reduce always
	// returns an array with one item.
	var combiner = (acc, curr) => { 
		return acc > curr? acc : curr;
	}
	return ratings.reduce(combiner)

	   // Complete this expression
}
		