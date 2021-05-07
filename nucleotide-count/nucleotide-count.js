//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(nucleotideString) {
    const LIST = ['A', 'C', 'G', 'T']
    let count = [0,0,0,0];

    nucleotideString.split('').map((e) => {
      if (LIST.indexOf(e) >= 0){
        count[LIST.indexOf(e)]++;
      } else {
        throw new Error('Invalid nucleotide in strand');
      }
    });

    return count.join(" ");
    
  }
}
