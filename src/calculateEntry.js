const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || !entrants[0]) {
    return 0;
  }
  const count = countEntrants(entrants);

  const totalAdult = prices.adult * count.adult;
  const totalChild = prices.child * count.child;
  const totalSenior = prices.senior * count.senior;
  const total = totalAdult + totalChild + totalSenior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
