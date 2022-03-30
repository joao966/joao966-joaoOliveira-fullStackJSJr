sleep 120

cd /src
npm install

cd /src
npx knex migrate:latest

cd /src
npx knex seed:run

cd /src
npm start