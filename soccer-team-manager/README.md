# Criando servidor nodeJS com Express

#### :white_small_square: Instalando o framework Express:
`npm i express@4.17.1`

#### :white_small_square: Configuração do ESLint:
`npm i eslint@6.8.0 eslint-config-trybe-backend@1.0.1 -D`

Mais sobre a configuração do ESLint <a href="https://eslint.org/docs/latest/user-guide/configuring/">aqui</a>.

#### :white_small_square: Criando os arquivos: *.eslintignore* e *.eslintrc.json*
`touch .eslintignore .eslintrc.json`

*.eslintignore*: Usado para você dizer ao ESLint para ignorar arquivos e diretórios específicos; </br></br>
*.eslintrc.json*: Usado para você sobrescrever regras do ESLint;

Dentro do _.eslintignore_ teremos:

    // .eslintignore

    node_modules

Dentro do _.eslintrc.json_ teremos:

    // .eslintrc.json

    {
      "env": {
        "es2020": true
      },
      "extends": "trybe-backend",
      "rules": {
        "sonarjs/no-duplicate-string": ["error", 5]
      }
    }

#### :white_small_square: Criando o *.gitignore*:

`touch .gitignore`

Dentro do _.gitignore_ teremos:

    // .gitignore

    node_modules

#### Nodemon

Usando o servidor com nodemon, toda vez que você salvar algum arquivo, ele reinicia sua aplicação.

`npm i nodemon -D`