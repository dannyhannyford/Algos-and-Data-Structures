
// Not optimal
// T-O(n) S-O(n)
function getYoungestCommonAncestor(topvsAncestor, descendantOne, descendantTwo) {
	// d1 obj { node E: 0, node B: 1}
	const d1Obj =  {};
	let d1 = descendantOne;
	let d2 = descendantTwo;
	
	// go through d1's ancestors
	while(d1 !== null) {
		d1Obj[d1.name] = d1;
		d1 = d1.ancestor;
	}
	
	while(d2 !== null) {
		// check if d1 has ancestor
		if (d1Obj.hasOwnProperty(d2.name)) {
			console.log('worked---', d1Obj)
			return d2
		} else {
			d2=d2.ancestor;
		}
	}
	console.log('--------',d1Obj);
	return null;
}
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // get depth of both descendants
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);
  
  if (depthOne > depthTwo) {
    return backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo);
  } else {
    return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne);
  }
}

function getDescendantDepth(desc, topA) {
  let depth = 0;
  while (desc !== topA) {
    depth++;
    desc = desc.ancestor;
  }
  return depth;
}
// T-O(n) S-O(1)
// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}
