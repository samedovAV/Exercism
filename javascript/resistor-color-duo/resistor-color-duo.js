//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const decodedValue = (array) => {
  let res = String(colors.indexOf(array[0])) + String(colors.indexOf(array[1]));
  return Number(res);
};
