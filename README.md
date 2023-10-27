# RELATÓRIO DO BACK-END

- :earth_americas:Linguagem: JavaScript;
  
#### Bibliotecas:
> :package:bcrypt
> :package:cors
> :package:dotenv
> :package:express
> :package:jsonwebtoken
> :package:nodemailer
> :package:sequelize
> :package:sqlite
  
#### Banco de Dados:
- :repeat:Sqlite3:  Projeto pequeno então o sqlite3 facilita o compartilhamento inicial dos dados, onde foi substituido pelo mysql2;

- :gear: Models
  

#### CLIENTE:
- :white_check_mark:Sign in;
- :white_check_mark:Criptografia da senha;
- :wrench:( AINDA NÃO TESTADO ) Middleware para trocar a senha gerando um token

27/10

-Cliente não pode criar duas contas com mesmo E-mail;



#### AGENDAMENTO:
- :white_check_mark:Agendamento vinculado com o ID do cliente;

- :white_check_mark:Não Permitido marcar no mesmo dia;
- :wrench:( FUTURAS MELHORIAS ) Permitir marcar no mesmo dia mas não no mesmo horário;

27/10

-Possivel marcar em horarios diferentes no mesmo dia
-O MESMO CLIENTE NÃO PODE ADICIONAR MAIS DE UM AGENDAMENTO QUANDO ELE JÁ TEM UM MARCADO

-Estudo de criação de bot com as bibliotecas Twilio e Puppeteer

#### ADMIN:
- :white_check_mark:Criação de conta;
- :white_check_mark:Login Adm;
- :wrench: (ACRESCENTAR NIVEL DE PERMISSÃO )
  

#### ANAMNESE-
- Em Andamento :construction:





## NÃO MODIFICAR EM CIMA :exclamation:




COLOCA AQUI TODA EVOLUÇÃO INTERESSANTE PARA APRESENTAÇÃO DO RELATORIO:

