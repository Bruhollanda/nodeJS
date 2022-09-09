// src/app.js
const express = require('express');
const { OK, teams } = require('./consts');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(OK).json({ message: 'Hello, world!' }));
// req - Request (ou requisição), é por meio dela que recebemos os dados (envio por query, params e body);
// res - Response (ou resposta), é por meio dela que respondemos o que nos é solicitado;

/**
 * res como comentado, responde as requisições e estas requisições podem ser respondidas de vários jeitos, como:
 - Formato text/JSON, como o caso do res.json({ message: 'Olá Mundo!' });
 - Formato text/HTML, como o caso do res.send('<h1>Olá Mundo!</h>');
 - Redirecionamentos, como o caso do res.redirect('https://www.betrybe.com/');
 - Páginas completas ou partes dela, como o caso do res.render('index.html');
 - Finalizando, como o caso do res.end();
 */

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  let updatedTeam;

  for (let i = 0; i < teams.length; i += 1) {
    const team = teams[i];

    if (team.id === Number(id)) {
      team.name = name;
      team.initials = initials;
      updatedTeam = team;
    }
  }

  res.status(200).json({ updatedTeam });
});

// Listar um time pelo seu id. Crie um endpoint do tipo GET com a rota /teams/:id.
app.get('/teams/:id', (req, res) => {
  const team = teams.find(({ id }) => id === Number(req.params.id));
  res.status(OK).json(team);
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;
