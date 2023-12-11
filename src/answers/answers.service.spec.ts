import { Test, TestingModule } from '@nestjs/testing';
import { AnswersService } from './answers.service';

describe('AnswersService', () => {
  let service: AnswersService;

  const mockAnswersService ={
    createAnswer: jest.fn(CreateAnswerInput =>{
      return{
        id: Date.now(),
        ...CreateAnswerInput
      }
    }),
    getAnswersForQuestion: jest.fn((questionId) => 
    Promise.resolve(sampleQuestion.filter(answer => answer.questionId === questionId))
  ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswersService],
    }).overrideProvider(AnswersService).useValue(mockAnswersService).compile();

    service = module.get<AnswersService>(AnswersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an answer', () => {
    const CreateAnswerInput = { content:"Warsaw", isCorrect:true, questionId:2}
    expect(service.createAnswer(CreateAnswerInput)).toEqual({
      id:expect.any(Number),
      content: "Warsaw",
      isCorrect: true,
      questionId: 2,
    });
  });

  const sampleQuestion = [
    { content: 'Madrid', isCorrect: false, questionId: 2 },
    { content: 'Warsaw', isCorrect: false, questionId: 2 },
    { content: 'Quebec', isCorrect: true,  questionId: 2 },
    { content: 'Zamosc', isCorrect: false, questionId: 2 },
  ];

  it('should get answers for given question id', async () => {
    const questionId = 2;
    const expectedAnswers = sampleQuestion.filter(answer => answer.questionId === questionId);
    expect(await service.getAnswersForQuestion(questionId)).toEqual(expectedAnswers);
  });
});
