/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let skp = [];
  let res = 0;

  for (i in preferences) {
    if (skp.indexOf(i * 1) > -1) {
      continue;
    }
    let first = [preferences[i], i * 1];
    let last = first;
    let s = [];

    for (j = 1; j < 4; j++) {

      if (last.join() == [preferences[last[0] - 1], last[0] - 1].join()) {
        last = [];
        break;
      }
      last = [preferences[last[0] - 1], last[0] - 1];
      s.push(last[0] - 1);
    }

    if (first.join() == last.join()) {
      res++;
      skp = skp.concat(s)
    }
  }
  return res;
};
