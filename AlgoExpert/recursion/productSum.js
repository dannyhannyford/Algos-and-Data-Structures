// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
// setting default depth to 1
function productSum(array, depth = 1) {
	// result for every array found
  let result = 0;
	// going through the array
	for (const elem of array) {
		// if array
		if (Array.isArray(elem)) {
			// the result will be dependant on the 
			//recursive call effectively allowing us to continue with the current depth for the next element
			result += productSum(elem, depth + 1);
		} else {
			// add to result
			result += elem
		}
	}
 	// result is the total sum multiplied by current depth
  return result * depth;
}
// I- array of arrays/ints
// O- int
// C-
// E- no array
// Do not edit the line below.
exports.productSum = productSum;
