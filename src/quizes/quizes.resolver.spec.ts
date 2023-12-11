import { Test, TestingModule } from '@nestjs/testing';
import { QuizResolver } from './quizes.resolver';

describe('QuizesResolver', () => {
  let resolver: QuizResolver;

  const mockQuizResolver ={
    createQuiz: jest.fn(CreateQuizInput =>{
      return{
        id: Date.now(),
        ...CreateQuizInput
      }
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizResolver],
    }).overrideProvider(QuizResolver).useValue(mockQuizResolver).compile();

    resolver = module.get<QuizResolver>(QuizResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
