export const toRna = (dna) => {

  //build function to return correct letter
  const TRANSCRIPTION = {
    'C': 'G',
    'G': 'C',
    'T': 'A',
    'A': 'U'
  }

  //Split array, call new function, return joined up new array
  return dna.split('').map(dna => TRANSCRIPTION[dna]).join('');
};
