const findTheOldest = function(people) {
    people.forEach(element => {
        if(!('yearOfDeath' in element))
            element.yearOfDeath = new Date().getFullYear();
    });

    return people.reduce((oldestYet, person) => {
        if (person.yearOfDeath - person.yearOfBirth > oldestYet.yearOfDeath - oldestYet.yearOfBirth)
            return person;
        return oldestYet;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
