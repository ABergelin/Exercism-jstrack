const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

const colorCode = (color) => colors.indexOf(color);

export const decodedValue = ([a,b]) => colorCode(a)*10 + colorCode(b);
