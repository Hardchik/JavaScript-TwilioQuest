class Materializer {
    activated = false;
    constructor(targetName) {
      this.target=targetName;
      this.activated = Boolean(false);
    }
    activate() {
        this.activated = Boolean(true);
        return this.activated;
    }
    materialize() {
        if(this.activated==true) {return this.target;}
    }
    // your code here
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const m = new Materializer('Kevin');
  console.log(m.activated); // would print "false"
  
  m.activate();
  console.log(m.activated); // would print "true"
  
  console.log(m.materialize()); // would print "Kevin"