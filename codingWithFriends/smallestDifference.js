/*
 *
 * Write a function, smallestDifference, that takes in two non-empty arrays of
 * integers, finds the pair of numbers (one from each array) whose absolute
 * difference is closest to zero, and returns an array containing these two numbers,
 * with the number from the first array in the first position.
 * 
 * Note that the absolute difference of two integers is the distance between
 * them on the real number line. For example, the absolute difference of -5 and 5
 * is 10, and the absolute difference of -5 and -4 is 1.
 *
 * You can assume that there will only be one pair of numbers with the smallest
 * difference.
 *
 * Input:
 * arrayOne = [-1, 5, 10, 20, 28, 3]
 * arrayTwo = [26, 134, 135, 15, 17]
 *
 * Output:
 * [28, 26]
 *
 */

// I- two non-empty arrays
// O- array with two numbers closest to 0
// C- optimized
// E-


function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  
  let absDiff = Infinity;
  const result = [null, null];
  
  let idxOne = 0;
  let idxTwo = 0;
  
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    const diff = Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo]);
    
    if (diff < absDiff) {
      absDiff = diff
      result[0] = arrayOne[idxOne];
      result[1] = arrayTwo[idxTwo];
    }
    
    if (arrayOne[idxOne] < arrayTwo[idxTwo]) {
      idxOne += 1;
    } else if (arrayOne[idxOne] > arrayTwo[idxTwo]) {
      idxTwo += 1;
    } else {
      return result;
    }
  }
  
  return result;
}


function smallestDifference(arr1, arr2) {
  arr1.sort((a, b) => a-b);
  arr2.sort((a, b) => a-b);
  
  let p1 = 0;
  let p2 = 0;
  let result = [arr1[p1], arr2[p2]];
  let difference = Math.abs(arr1[p1] - arr2[p2]);
  if (difference === 0) return result;
  
  while(p1 < arr1.length && p2 < arr2.length) {
    // if p1+1 < p2 + 1
    if(arr1[p1] < arr2[p2]) { // -----------------------
      // p1++
      p1++;
      let newDifference = Math.abs(arr1[p1] - arr2[p2])
      // check if Math.abs(arr1[p1] - arr2[p2]) < difference
      if (newDifference < difference) {
        difference = newDifference;
        result = [arr1[p1], arr2[p2]];
        if (difference === 0) return result;
      }
    } else {
      // p1++
      p2++;
      let newDifference = Math.abs(arr1[p1] - arr2[p2])
      // check if Math.abs(arr1[p1] - arr2[p2]) < difference
      if (newDifference < difference) {
        difference = newDifference;
        result = [arr1[p1], arr2[p2]];
        if (difference === 0) return result;
      } 
    
    }
    
  }
    return result;
}


const Mocha = require('mocha');
const mocha = new Mocha();
const { expect } = require('chai');

mocha.suite.emit('pre-require', this, 'solution', mocha);

describe('Test suite', function() {
  it('will test same length arrays', function() {
    const arrayOne = [-1, 5, 10, 20, 28, 3];
    const arrayTwo = [26, 134, 135, 15, 17];
    const result = smallestDifference(arrayOne, arrayTwo);
    expect(result).to.eql([28, 26]);
  });
  
  it('will test one shorter array', function() {
    const arrayOne = [-1, 5, 10, 20, 3];
    const arrayTwo = [26, 134, 135, 15, 17];
    const result = smallestDifference(arrayOne, arrayTwo);
    expect(result).to.eql([20, 17]);
  });
  
  it('will test with out of order numbers', function() {
    const arrayOne = [0, 20];
    const arrayTwo = [21, -2];
    const result = smallestDifference(arrayOne, arrayTwo);
    expect(result).to.eql([20, 21]);
  });
  
  it('will test everything', function() {
    const arrayOne = [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530];
    const arrayTwo = [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530];
    const result = smallestDifference(arrayOne, arrayTwo);
    expect(result).to.eql([530, 530]);
  });
})

mocha.run();

