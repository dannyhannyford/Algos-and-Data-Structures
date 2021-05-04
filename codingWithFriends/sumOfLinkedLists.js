function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const result = new LinkedList(0);
  let current = result;
  let carry = 0;
  
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
    const valueOne = nodeOne !== null ? nodeOne.value : 0;
    const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
    const sumOfValues = valueOne + valueTwo + carry;
    
    const newValue = sumOfValues % 10;
    const newNode = new LinkedList(newValue);
    current.next = newNode;
    current = newNode;
    
    carry = Math.floor(sumOfValues / 10);
    nodeOne = nodeOne !== null ? nodeOne.next : null;
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
  }
  
  return result.next;
}

function sumOfLinkedLists(l1, l2) {
    const list = new LinkedList;
    let currentList = list;
    let current1 = l1;
    let current2 = l2;
    let overFlow = 0;
    
    while (current1 || current2 || overFlow === 1) {
        let sum = 0;
        
        if (overFlow === 1) {
            sum += overFlow;
        }
        
        if (current1) {
            sum += current1.value;
            current1 = current1.next;
        }
        
        if (current2) {
            sum += current2.value;
            current2 = current2.next;
        }
        
        if (sum > 9) {
            sum -= 10;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        
        currentList.next = new LinkedList(sum);
        currentList = currentList.next;
    }
    
    return list.next;
};

// --------------------------------------------------

const Mocha = require('mocha');
const mocha = new Mocha();
const { expect } = require('chai');

mocha.suite.emit('pre-require', this, 'solution', mocha);

describe('Test suite', function() {
  it('will test the Sample Input', function() {
    const l1 = [2, 4, 7, 1];
    const l2 = [9, 4, 5];
    const ansArr = [1, 9, 2, 2];
    
    const linkedListOne = new LinkedList();
    let l1Ref = linkedListOne;
    for (const num of l1) {
      l1Ref.next = new LinkedList(num);
      l1Ref = l1Ref.next;
    }
    
    const linkedListTwo = new LinkedList();
    let l2Ref = linkedListTwo;
    for (const num of l2) {
      l2Ref.next = new LinkedList(num);
      l2Ref = l2Ref.next;
    }
    
    let result = sumOfLinkedLists(linkedListOne.next, linkedListTwo.next)
    
    const resArr = [];
    while (result) {
      resArr.push(result.value);
      result = result.next;
    }
    
    expect(resArr).to.eql(ansArr);
  });
  
  it('will test Two Lists with only 0 in the list', function() {
    const linkedListOne = new LinkedList(0);
    
    const linkedListTwo = new LinkedList(0);
    
    let result = sumOfLinkedLists(linkedListOne, linkedListTwo)
    
    const resArr = [];
    const ansArr = [0]
    while (result) {
      resArr.push(result.value);
      result = result.next;
    }
    
    expect(resArr).to.eql(ansArr);
  });
  
  it('will test input with leading zeros', function() {
    const l1 = [4, 6, 9, 3, 1];
    const l2 = [0, 0, 0, 0, 2, 7];
    const ansArr = [4, 6, 9, 3, 3, 7]
    
    const linkedListOne = new LinkedList();
    let l1Ref = linkedListOne;
    for (const num of l1) {
      l1Ref.next = new LinkedList(num);
      l1Ref = l1Ref.next;
    }
    
    const linkedListTwo = new LinkedList();
    let l2Ref = linkedListTwo;
    for (const num of l2) {
      l2Ref.next = new LinkedList(num);
      l2Ref = l2Ref.next;
    }
    
    let result = sumOfLinkedLists(linkedListOne.next, linkedListTwo.next)
    
    const resArr = [];
    while (result) {
      resArr.push(result.value);
      result = result.next;
    }
    
    expect(resArr).to.eql(ansArr);
  });
  
  it('will test number with different sizes', function() {
    const l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
    const l2 = [5,6,4];
    const ansArr = [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
    
    const linkedListOne = new LinkedList();
    let l1Ref = linkedListOne;
    for (const num of l1) {
      l1Ref.next = new LinkedList(num);
      l1Ref = l1Ref.next;
    }
    
    const linkedListTwo = new LinkedList();
    let l2Ref = linkedListTwo;
    for (const num of l2) {
      l2Ref.next = new LinkedList(num);
      l2Ref = l2Ref.next;
    }
    
    let result = sumOfLinkedLists(linkedListOne.next, linkedListTwo.next)
    
    const resArr = [];
    while (result) {
      resArr.push(result.value);
      result = result.next;
    }
    
    expect(resArr).to.eql(ansArr);
  });
  
  it('will test carrying over numbers', function() {
    const l1 = [9, 9, 9, 9, 9, 9, 9];
    const l2 = [9, 9, 9, 9];
    const ansArr = [8, 9, 9, 9, 0, 0, 0, 1]
    
    const linkedListOne = new LinkedList();
    let l1Ref = linkedListOne;
    for (const num of l1) {
      l1Ref.next = new LinkedList(num);
      l1Ref = l1Ref.next;
    }
    
    const linkedListTwo = new LinkedList();
    let l2Ref = linkedListTwo;
    for (const num of l2) {
      l2Ref.next = new LinkedList(num);
      l2Ref = l2Ref.next;
    }
    
    let result = sumOfLinkedLists(linkedListOne.next, linkedListTwo.next)
    
    const resArr = [];
    while (result) {
      resArr.push(result.value);
      result = result.next;
    }
    
    expect(resArr).to.eql(ansArr);
  });
  
  it('will test carrying over numbers', function() {
    const l1 = [6];
    const l2 = [4];
    const ansArr = [0, 1]
    
    const linkedListOne = new LinkedList();
    let l1Ref = linkedListOne;
    for (const num of l1) {
      l1Ref.next = new LinkedList(num);
      l1Ref = l1Ref.next;
    }
    
    const linkedListTwo = new LinkedList();
    let l2Ref = linkedListTwo;
    for (const num of l2) {
      l2Ref.next = new LinkedList(num);
      l2Ref = l2Ref.next;
    }
    
    let result = sumOfLinkedLists(linkedListOne.next, linkedListTwo.next)
    
    const resArr = [];
    while (result) {
      resArr.push(result.value);
      result = result.next;
    }
    
    expect(resArr).to.eql(ansArr);
  });
})

mocha.run();