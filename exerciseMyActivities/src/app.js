const express = require('express');
// const { activities } = require('./consts');

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

const app = express();

app.get('/', (_req, res) => res.status(200).json({ message: 'Hello, world!' }));

app.get('/myActivities', (_req, res) => res.status(200).json({ activities }));

app.get('/myActivities/:id', (req, res) => {
  const activity = activities.find(({ id }) => id === Number(req.params.id));
  res.status(200).json({ activity });
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let filteredActivities = activities;

  if (status) {
    filteredActivities = activities.filter((activity) => activity.status == status);
  }

  res.status(200).json({ activities: filteredActivities });
});

module.exports = app;
