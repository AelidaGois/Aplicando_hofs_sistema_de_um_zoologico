const data = require('../data/zoo_data');

function getEmployeesCoverage(id, firstName, lastName) {
  const findEmployeesById = data.employees.find((employe) => employe.id === id);

  return findEmployeesById;
}console.log(getEmployeesCoverage('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getEmployeesCoverage;
