const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  const { residents } = data.species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    return residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return residents.length;
}

module.exports = countAnimals;
