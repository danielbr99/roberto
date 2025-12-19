export function avgAge(people){

    var totalAge = people.reduce((sum, person) => {
        return sum + person.age; 
    }, 0);

    return totalAge / people.length;

}