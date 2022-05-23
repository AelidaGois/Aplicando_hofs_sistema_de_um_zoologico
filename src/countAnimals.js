const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }

  return data.species.filter((specie) => specie.name);
}
console.log(countAnimals());

module.exports = countAnimals;
