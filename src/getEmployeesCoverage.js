const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployees(worker) { // encontra o colaborador através do id ou nome
  return employees.find((employe) => employe
    .id === worker.id || employe.firstName === worker
    .name || employe.lastName === worker.name);
}

function getSpecies(worker) {
  return species.filter((specie) => {
    if (!worker) {
      throw new Error('Informações inválidas');
    }
    return worker.responsibleFor.includes(specie.id);
  });
}

function allEmployees() {
  return employees.map((employee1) => {
    const getSpecie = getSpecies(employee1);
    return {
      id: employee1.id,
      fullName: `${employee1.firstName} ${employee1.lastName}`,
      species: getSpecie.map((specie) => specie.name),
      locations: getSpecie.map((element) => element.location),
    };
  });
}

function getEmployeesCoverage(worker) {
  if (!worker) {
    return allEmployees();
  }
  const getEmploye = getEmployees(worker);
  const getSpecie = getSpecies(getEmploye);

  return {
    id: getEmploye.id,
    fullName: `${getEmploye.firstName} ${getEmploye.lastName}`,
    species: getSpecie.map((specie) => specie.name),
    locations: getSpecie.map((element) => element.location),
  };
}

module.exports = getEmployeesCoverage;
