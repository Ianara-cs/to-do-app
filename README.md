<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
<hr>

<br><br>



<p> Este reposit??rio foi criado para o meu treinamento.</p>

<p>
Estou estudando por um curso no YouTube. <a href="https://www.youtube.com/playlist?list=PLryJIoSncQyNzHHbHMPQkjPRP3Kv0ICnq" target="_blank">Link do curso NestJS</a> 
</p>
<br>

## Resumo do meu avan??o
<br>
<h3>Ter??a: 25/01 - Visto aula 4/6 (CRUD completo com NestJS e MongoDB)</h3>
<p>Foi realizado a conex??o com o MongoDB, no CRUD feito na aula anterior, em seguida a cria????o da pasta schemas com o arquivo task.schema.ts, esse arquivo ir?? definir o esquema de como ?? cada documento da cole????o de task. Depois de registrar o schema no task.module.ts, foi feito a integra????o do MongoDB no arquivo task.service.ts e l??, atrav??s do construtor, foi injetado o schema de task e criado o taskModule que ser?? respons??vel por fazer a integra????o e buscar as informa????es no banco de dados e isso resultou em pequenas modifica????es nos c??digos dos m??tados j?? feitos e tamb??m no arquivo task.controller.ts </p>

<h3>Quarta: 26/01 - Visto aula 5/6 </h3>
<p>Foi adicionado o CRUD users que ir?? realizar o cadrastro e buscar informa????es dos usu??rios no bando de dados</p>

<h3>Quinta: 27/01 - Visto aula 6/6 </h3>
<p>Foi iniciado o parte que vai autenticar os usu??rios para acessarem as tarefas. ?? criado o arquivo auth.service.ts na pasta auth/shered l?? h?? o AuthService que tem a fun????o de recuperar um usu??rio e verificar a senha e tamb??m ?? criado o arquivo chamado local.strategy.ts na pasta auth/shered no qual ?? implementado a estrat??gia de autentica????o local do Passport. Depois foi criado o Guard que serve para protejer as rotas e em seguida foi feito o controller com o a rota de login.</p>


<h3>Sexta: 28/01 - Visto aula 6/6 </h3>
<p>Foi adicionado a parte de JWT no sistema de autentica????o</p>

<h3>Segunda: 31/01  </h3>
<p>Foi realizado a parte da valida????o dos dados do user que s??o enviados</p>