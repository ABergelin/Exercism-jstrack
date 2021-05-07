//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
// const old = { 1: ['A'] };
// const expected = { a: 1 };

export const transform = (old) => {
  let newScores = {};

  // Get array of properties using Object.keys()
  // then loop through and get an array of their values
  // then set that value as a property of newScores
  // then add the old key as the new value
  Object.keys(old).forEach(key => {
    old[key].forEach(element => newScores[element.toLowerCase()] = Number(key));
  });

  return newScores;
};
