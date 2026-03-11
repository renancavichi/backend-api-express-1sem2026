# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso Backend?
- O que é o Node.js?
- O que é o NPM?
- O que é o Express.js?
- O que é uma API?
- Como mudar o formato de importação de "require" (padrão commonjs) para module?
- O que é HTTP?
- Quais os métodos de requisição HTTP e para que serve cada um deles?
- Para que serve o --watch ao rodar o servidor?
- Para que serve o Router do Express?
- O que é um padrão de projeto?
- O que é o padrão de projeto MVC?
- Qual a responsabilidade de cada Camada?
- O que é um ORM?
- Quais as vantagens de utilizar um ORM?

### Comandos Prisma

Instalação
- npm i prisma -D
- npm i dotenv -D
para Mysql e Mariadb 
npm install @prisma/client @prisma/adapter-mariadb mariadb

Inicia o Prisma
- npx prisma init --datasource-provider mysql --output ../generated/prisma

Gera o banco de dados a partir do schema do prisma
- npx prisma db push

Gera o schema do prisma a partir do banco de dados
- npx prisma db push

Gerar as funções para interagir com os modelos mapeados no schema
- npx prisma generate

