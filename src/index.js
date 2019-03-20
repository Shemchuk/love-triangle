/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  preferences = preferences.map( item => item - 1);

  for (let i = 0; i < preferences.length; i++) {
    first = preferences[i]; //whom love first lover
    second = preferences[first];  //whom love second lover
    third = preferences[second];  //whom love third lover

    //if 3rd lover love 1st lover in chain - then it's a love triangle
    if ((i == third) && (first != second) && (second != third)) {
      preferences[i] = -1;  //exclude this triangle from cheking
      preferences[first] = -1;
      preferences[third] = -1;
      count++;
    }
  }

  return count;
};
