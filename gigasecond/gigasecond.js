//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (eventDate) => {
  // gigasecond is 10^9. Multiply by 1000 to get milliseconds
  return new Date(eventDate.getTime() + Math.pow(10, 9)*1000);
};
