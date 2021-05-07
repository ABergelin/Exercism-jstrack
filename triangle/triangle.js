//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
    console.log(a, b, c);
  }

  isEquilateral() {
    return (this.sideA > 0 && this.sideA === this.sideB && this.sideA === this.sideC) ? true : false;
  }

  isIsosceles() {
    //if (this.sideA > 0 && this.SideB > 0 && this.sideC > 0){
      return (this.SideA === this.SideB || this.SideB === this.SideC || this.SideA === this.SideC) ? true : false;
   // } else {
   //   return false;
   // }
  }

  isScalene() {
    throw new Error("Remove this statement and implement this function");
  }
}
