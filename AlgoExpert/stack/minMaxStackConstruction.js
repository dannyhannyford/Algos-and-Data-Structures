// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
		this.minMaxStack.pop();
    let top = this.stack.pop();
    return top;
  }

  push(number) {
    const newMinMax = {min: number, max: number};
    if (this.minMaxStack.length > 0) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
