
// Build heap here!




function reducePollution(array) {
  // reduce the most amount of Co2 for each filter  
    let amountOfFilters = 0;
    let total = 0;
      //sort the co2 array
    array.sort((a,b) => a-b);
    // getting our total
    array.forEach(el => (total += el));
    // reaching our goal
    const goal = total/2;
    // until we reach 50% emssions
    while(total > goal) {
      amountOfFilters +=1;
      let biggestCarbon = array[array.length - 1];
      let halved = biggestCarbon/2;
      total -= halved;
      array[array.length -1] = halved;
      // do our swap
      for(let i = array.length -1; i >= 0; i--) {
        if(array[i] < array[i-1]) {
          // [array[i], array[i-1] = array[i-1], array[i]];
          let temp  = array[i];
          array[i] = array[i-1];
          array[i-1] = temp;
        } else {
          break;
      }
      
    }
    }
      
      return amountOfFilters;
    
      // variable biggest Co2
      // next biggest Co2
      
  };