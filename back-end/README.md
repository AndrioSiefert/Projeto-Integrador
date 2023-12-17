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


#### CLIENTE:
- :white_check_mark:Sign in;
- :white_check_mark:Criptografia da senha;
- :gear: Middleware para trocar a senha gerando um token


#### AGENDAMENTO:
- :white_check_mark:Agendamento vinculado com o ID do cliente;

- :white_check_mark:Não Permitido marcar no mesmo dia;
- :wrench:( FUTURAS MELHORIAS ) Permitir marcar no mesmo dia mas não no mesmo horário;

27/10

- :white_check_mark:Possivel marcar em horarios diferentes no mesmo dia
- :white_check_mark:O MESMO CLIENTE NÃO PODE ADICIONAR MAIS DE UM AGENDAMENTO QUANDO ELE JÁ TEM UM MARCADO;

- :eye: Estudo de criação de bot com as bibliotecas Twilio e Puppeteer

#### ADMIN:
- :white_check_mark:Criação de conta;
- :white_check_mark:Nivel de Adm programado, possivel escalar permissões para cada rota; 
- :pushpin: Apenas o Adm com o maior nível consegue registrar outro adm e dar seu nível
- :pushpin: Adicionado outras rotas com nível especifico de admin



  

#### ANAMNESE-

- Anamnese completo (GET, PUT, DELETE)
- Ajustado para mostrar a nova atualização modificada (PUT)






## TESTE

- :lock: TODAS AS ROTAS E CODIGOS SÃO TESTADAS ANTES DE SER ENVIADA AO REPOSITÓRIO (BACK-END)

1° Teste realizado com o banco de dados do back para o front funcional
