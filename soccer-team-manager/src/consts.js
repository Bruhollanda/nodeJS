const OK = 200;
const BAD_REQUEST = 500;
const NOT_FOUND = 404;
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];  

module.exports = {
  OK, BAD_REQUEST, NOT_FOUND, teams,
};
