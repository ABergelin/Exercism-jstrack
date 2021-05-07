export const compute = (a, b) => {
  // split params into two different arrays
  const aStrand = a.split('');
  const bStrand = b.split('');

  //Loop through array positions and compare the values
  if(aStrand.length === bStrand.length) {

    return aStrand.filter((a, i) => a != bStrand[i]).length;

  } else {
    if (aStrand.length === 0) {
      throw new Error('left strand must not be empty');
    } else if (bStrand.length === 0) {
      throw new Error('right strand must not be empty');
    } else {
      throw new Error('left and right strands must be of equal length');
    }
    
  }
};
