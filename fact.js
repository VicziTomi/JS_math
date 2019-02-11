
const factt = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factt(n - 1);
};
/* console.log(factt(5))*/
module.exports = { factt };
