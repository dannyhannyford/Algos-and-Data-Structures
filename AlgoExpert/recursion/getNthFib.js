// initial attempt
function getNthFib(n) {
    if (n <= 2) {
          if (n === 1) {
              return 0;
          }
          if (n === 2) {
              return 1;
          }
      } else {
          return getNthFib(n - 1) + getNthFib(n - 2)
      }
  }
  // T-O(2^n) time S-O(n)

  // I - n int
  // O - nth fibonacci number
  // C-
  // E- n ===2 and n === 1
  exports.getNthFib = getNthFib;
  