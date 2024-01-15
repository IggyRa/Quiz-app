# Quiz-app (GraphQL + Nest.js + Prisma + Docker)   
Quiz application functionality involves CRUD operations on 3 main data models: quizes, questions and answers. User can create a quiz, add questions and propose answer to each question whit true or false value. Additionally user can create a submission, which checks if his proposed answer to given question is correct.

After cloning repository write following commands into terminal:
1. Open app folder  
   $ cd Quiz-app

2. Set up database (while docker is running)  
   $ docker compose up quiz-db -d

3. Download all extensions   
   $ npm install
   
4. Connect prisma with database    
   $ npx prisma migrate dev
   
5. Run the program   
   $ npm run start:dev
 
6. In order to see resolvers functionality:
    http://localhost:3000/graphql

Sample mutations and query: 
   
mutation {
  createQuizWithQuestions(data: {
    name: "Planetary Quiz"
    questions: [
      {
        content: "What is the seventh planet from the Sun?",
        type: "single-answer",
        answers: [
          { content: "Uranus", isCorrect: true },
          { content: "Jupiter", isCorrect: false },
          { content: "Satrun", isCorrect: false }
        ]
      },
      {
        content: "Which planets are neigbouring the Earth?",
        type: "multiple-answer",
        answers: [
          { content: "Mars", isCorrect: true },
          { content: "Venus", isCorrect: true },
          { content: "Saturn", isCorrect: false }
        ]
      },
      {
        content: "What is the fourth planet from the Sun?",
        type: "open-answer",
        answers: [
          { content: "Mars", isCorrect: true},
        ]
      },
    ]
  }) {
    id
    name
  }
}

query{
  getQuizQuestions(quizId: 20){
    id
    content
    type
    answers{
      id
			content
      isCorrect
    }
  }
}

mutation {
  createSubmission(data: {
    userId: 1,
    quizId: 1,
    answers: [
      {
        questionId: 1,
        questionType: "single-answer", 
        answers: [ 
          {
            answerIds: [1] 
          }
        ]
      },
      {
        questionId: 2,
        questionType: "multiple-answer", 
        answers: [ 
          {
            answerIds: [4,5]
          }
        ]
      },
            {
        questionId: 3,
        questionType: "text-answer",
        answers: [
          {
            answerIds: [7]
            textAnswer: "Mars"
          }
        ]
      },
    ]
  }) {
    submissions {
      id
      userId
      questionId
      answerId
      isCorrect
    }
    correctCount
  }
}

7. View added entities in Prisma studio  
   $ npx prisma studio 
       
8. Run unit tests  
   $ npx jest 
