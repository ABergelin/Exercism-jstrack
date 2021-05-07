//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {

  let planets = {
    "earth": 31556952,
    "mercury": 7600608,
    "venus": 19414166.4,
    "mars": 59354294.4,
    "jupiter": 374335776,
    "saturn": 929596608,
    "uranus": 2651486400,
    "neptune": 5199724800
  }
  return Math.round((seconds / planets[planet])*100)/100;
  
};
