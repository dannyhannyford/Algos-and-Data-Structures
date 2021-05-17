function compareIt(team1, team2, teamObject) {
  // returns string of winner
  return (teamObject[team1] > teamObject[team2] ? team1 : team2);
}
function tournamentWinner(competitions, results) {
  // keep track of each teams points
  let teamPoints = {};
  // keep track of current team with most points
  let currWinner = '';
  
  //traverse through competitions array, and results array concurrently
  for(let i = 0; i < competitions.length; i++) {
    let comp = competitions[i];
    // if 1 
    if(results[i] === 1) {
      // assign 0 idx team to teamPoints object +3
      if (!teamPoints[comp[0]]) {
        teamPoints[comp[0]] = 3;
      } else {
        teamPoints[comp[0]] +=3;
      }
      currWinner = compareIt(currWinner, comp[0], teamPoints)
          // if 0
    } else {
        // assign 1 idx team to teamPoints object +3
      if (!teamPoints[comp[1]]) {
        teamPoints[comp[1]] = 3;
      } else {
        teamPoints[comp[1]] +=3;
      }
      currWinner = compareIt(currWinner, comp[1], teamPoints)
    }
         
  }
  
  // return current team with most points
  return currWinner;
}