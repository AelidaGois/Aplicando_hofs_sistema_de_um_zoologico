const data = require('../data/zoo_data');

const { species, hours } = data;

function getAnimalsByDay(day) {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }

  const filterAnimal = species.filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);

  return filterAnimal;
}

function getHours(days) {
  if (days === 'Monday') {
    return 'CLOSED';
  }
  const hours1 = hours[days];
  return `Open from ${hours1.open}am until ${hours1.close}pm`;
}

function createRecord(weekDay) {
  return {
    officeHour: getHours(weekDay),
    exhibition: getAnimalsByDay(weekDay),
  };
}

function getSchedule(scheduleTarget) {
  const findAnimal = data.species.find(({ name }) => name === scheduleTarget);

  if (findAnimal) {
    return findAnimal.availability;
  }

  let weekDays = Object.keys(hours);

  if (weekDays.includes(scheduleTarget)) {
    weekDays = [scheduleTarget];
  }

  return weekDays.reduce((acc, daysCurr) => {
    if (!acc[daysCurr]) {
      acc[daysCurr] = createRecord(daysCurr);
    }
    return acc;
  }, {});
}

module.exports = getSchedule;
