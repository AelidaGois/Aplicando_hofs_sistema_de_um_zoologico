const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeById (id){ //obter o colaborador através do ID
    return employees.find((employe)=> employe.id === id);

}

function getFirstSpecie (employee){
    const id = employee.responsibleFor[0];
    return species.find((specie)=>specie.id === id);
}

function getOldestFromFirstSpecies(id) {
const employee = getEmployeById(id);
const specie = getFirstSpecie(employee);
return specie.residents.reduce((acc,resident) => {
if(resident.age >)
},[])
console.log(specie);
}getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f')

module.exports = getOldestFromFirstSpecies;
