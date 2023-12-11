# Quiz-app (GraphQL + Nest.js + Prisma + Docker)   
Quiz application functionality involves CRUD operations on 3 main data models: quizes, questions and answers. User can create a quiz, add questions and propose answer to each question whit true or false value. Additionally user can create a submission, which checks if his proposed answer to given question is correct.

After cloning repository and opening docker write following commands:   
1. Database setup   
   $ docker compose up quiz-db -d

2. Downloading all extensions   
   $ npm install
   
3. Connect prisma with database    
   $ npx prisma run migrate dev
   
4. Running the program   
   $ npm run start:dev
 
5. In order to see resolvers functionality:
    http://localhost:3000/graphql

   Sample query:
   
   query{
     getQuizQuestions(quizId: 9){
       id
       content
       type
       answers{
         id
         content
       }
     }
   }
       
6. Running unit tests  
   $ npx jest
