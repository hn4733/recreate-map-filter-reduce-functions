// Recreating the Map, Filter and Reduce ES6 functions:

/******************* Map function ****************/
Array.prototype.myMapFn = function(callback) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(callback(this[i], i, array));
	}
	return result;
};
/************ Example 1 - Map ************/
const array = [1, 2, 3];
array.myMapFn((value, i, array) => {
	return value + 1;
});
// output: [2,3,4]

/******************* Filter function ****************/
Array.prototype.myFilterFn = function(callback) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			result.push(this[i]);
		}
	}
	return result;
};
/************ Example 1 - Filter ************/
const data = [1, 1, 3, 4, 5];
data.myFilterFn((value, i, array) => {
	return value === 1;
});
// output: [1, 1]

/******************* Reduce function *******************/
Array.prototype.myReducerFn = function(callback, accumulator) {
	let result = accumulator || this[0];
	for (let i = 0; i < this.length; i++) {
		if (!accumulator && i === 0) {
		} else {
			result = callback(result, this[i], i, this);
		}
	}
	return result;
};
/************ Example 1 - Reduce ************/
[1, 2, 3].myReducerFn((accumulator, value, i, array) => {
	return accumulator + value;
});
// output: 6

/************ Example 2 - Reduce ************/
[1, 2, 3].myReducerFn((accumulator, value, i, array) => {
	accumulator.push(value);
	return accumulator;
}, []);
// output: [1,2,3]

/************ Example 3 - Reduce ************/
[1, 2, 3].myReducerFn((accumulator, value, i, array) => {
	accumulator.push(value, value);
	return accumulator;
}, []);
// output: [1, 1, 2, 2, 3, 3]

/************ Example 4 - Reduce ************/
const fruits = ["apple", "pear", "pear", "watermelon"];
const result = fruits.reduce((acc, value, index, array) => {
	if (!acc[value]) {
		acc[value] = 1;
	} else {
		acc[value]++;
	}
	return acc;
}, {});
// result output -> {apple: 1, pear: 2, watermelon: 1}

// Please read the article below for full explanation.
// https://medium.com/@hn4733/javascript-recreating-the-map-filter-reduce-higher-order-functions-2bc287f52187
