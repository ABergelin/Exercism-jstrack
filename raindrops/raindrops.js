//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {

  let rainSound = "";

  if (number%3===0) rainSound+="Pling";
  if (number%5===0) rainSound+="Plang";
  if (number%7===0) rainSound+="Plong";
  return rainSound || number.toString()
};
