function balancedBrackets(string) {
  let stack = [];
	let matching = {
		'{': '}',
		'(': ')',
		'[': ']',
	}
	for (let char of string) {
		if(isBrackets(char)) {
			// open bracket
			if (!isCloseBracket(char)) {
				// if empty stack push
				if(stack.length === 0) {
				stack.push(char);
				continue;
			}
				// if top of stack is closing
				if(isCloseBracket(stack[stack.length -1])) return false;
				// push if top of stack is open
				stack.push(char);
				// closed bracket
			} else {
				// false if empty
				if(stack.length === 0) return false;
				// if top of stack is open
				if(!isCloseBracket(stack[stack.length - 1])) {
					//check if matching bracket
					// if matching(open) === closed bracket
					if(matching[stack[stack.length -1]] === char) {
						stack.pop();
					} else {
						return false;
					}
				}
			}
		}
	}
	
	return stack.length === 0 ? true : false;
}
	
	function isBrackets(char) {
		if(char === '(' || char === ')' || char === '{' ||char === '}' || char === '[' || char === ']'){
			return true;
		}
		return false;
	}
	
	function isCloseBracket(char) {
		if(char === ']' || char === ')' || char === '}') {
			return true;
		}
		return false;
	}
