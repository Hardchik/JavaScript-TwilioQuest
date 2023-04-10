function construct(name) {
    const assemble = Boolean(true);
    const material = 'human';
    const duration=1000;
    let person = {name,material,assemble,duration};
    return person;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const somePerson = construct('Kevin');
  console.log('name is: ' + somePerson.name); // should be "Kevin"
  console.log('duration is: ' + somePerson.material);
  console.log('duration is: ' + somePerson.assemble);
  console.log('duration is: ' + somePerson.duration); // should be 1000