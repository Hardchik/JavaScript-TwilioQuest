class TargetingSolution {
    user = {};
    constructor(config) {
      // your code here
        this.user = {};
        this.user=config;
    }
  
    // your code here
    target() {
        return "("+this.user.x +", "+ this.user.y+", "+this.user.z+")";
    }
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900,
  });
  
  console.log(m.target()); // would print "(10, 15, 900)"