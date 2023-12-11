# Quiz-app (GraphQL + Nest.js + Prisma + Docker)   
Quiz application functionality involves CRUD operations on 3 main data models: quizes, questions and answers. User can create a quiz, add questions and propose answer to each question whit true or false value. Additionally user can create a submission, which checks if his proposed answer to given question is correct.

After cloning repository write following commands into terminal:
1. Open app folder  
   $ cd Quiz-app

2. Set up database (while docker is running)  
   $ docker compose up quiz-db -d

3. Downloading all extensions   
   $ npm install
   
4. Connect prisma with database    
   $ npx prisma run migrate dev
   
5. Running the program   
   $ npm run start:dev
 
6. In order to see resolvers functionality:
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
       
7. Running unit tests  
   $ npx jest
