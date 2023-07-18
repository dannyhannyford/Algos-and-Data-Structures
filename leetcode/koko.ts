function minEatingSpeed(piles: number[], h: number): number {
  let min_rate = 1;
  let max_rate = Math.max(...piles);
  let result = max_rate;
  while (min_rate <= max_rate) {
    let mid = Math.floor(max_rate + min_rate / 2);
    let hours = 0;
    // see how many hours it will take
    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }
    if (hours <= h) {
      result = Math.min(mid, result);
      max_rate = mid - 1;
    } else {
      min_rate = mid + 1;
    }
  }
  return result;
}
