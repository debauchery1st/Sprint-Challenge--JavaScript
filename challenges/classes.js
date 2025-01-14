// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(cuboidAttrs) {
        this.length = cuboidAttrs.length; 
        this.width = cuboidAttrs.width;
        this.height = cuboidAttrs.height;
      }
      volume() {return this.length * this.width * this.height};
      surfaceArea() {return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)};
}
const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker{
    constructor(size) {
        super({length: size, width: size, height: size});
    }
    volume() {return this.width ** 3};            // redundant?
    surfaceArea(){return 6 * (this.width ** 2)};  //     ^ 
}

// const aCube = new CubeMaker(5);
// console.log(aCube);
// console.log(aCube.surfaceArea());
// console.log(aCube.volume());