import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsResolver } from './questions.resolver';

describe('QuestionsResolver', () => {
  let resolver: QuestionsResolver;

  const mockQuestionResolver ={
    createQuestion: jest.fn(CreateQuestionInput =>{
      return{
        id: Date.now(),
        ...CreateQuestionInput
      }
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionsResolver],
    }).overrideProvider(QuestionsResolver).useValue(mockQuestionResolver).compile();

    resolver = module.get<QuestionsResolver>(QuestionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
