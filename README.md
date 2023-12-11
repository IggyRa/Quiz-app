# Quiz-app
Nest.js + GraphQL + Docker app

1. Database setup:
   $ docker compose up quiz-db -d
   
2. Running the program:
   $ npm run start:dev
   
4. In order to see query and resolver functionality:
    http://localhost:3000/graphql  (this is grapql playgorund opened in browser)
   
5. (Optionally) In order to see database connections:
   $ npx prisma studio
    
6. Running unit tests
   $ npx jest
