//constructor function:

function Person(firstName, lastName, dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=dob;
}

const person1=new Person("Greta", "Bačiliūnienė","1900-01-01" );
console.log(person1);
const person2=new Person("Giedrė", "Giedraitė", "1900-01-01");
console.log(person2);