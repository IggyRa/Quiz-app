import { Test, TestingModule } from '@nestjs/testing';
import { AnswersService } from './answers.service';

describe('AnswersService', () => {
  let service: AnswersService;

  const mockAnswersSercive ={
    createAnswer: jest.fn(CreateAnswerInput =>{
      return{
        id: Date.now(),
        ...CreateAnswerInput
      }
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswersService],
    }).overrideProvider(AnswersService).useValue(mockAnswersSercive).compile();

    service = module.get<AnswersService>(AnswersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an answer', () => {
    expect(service.createAnswer({ content:"4+6", isCorrect:true, questionId:2})).toEqual({
      id:expect.any(Number),
      content: "4+6",
      isCorrect: true,
      questionId:2,
    });
  });
});
