import { Test, TestingModule } from '@nestjs/testing';
import { AnswersResolver } from './answers.resolver';

describe('AnswersResolver', () => {
  let resolver: AnswersResolver;
  const mockAnswersResolver ={
    createAnswer: jest.fn(CreateAnswerInput =>{
      return{
        id: Date.now(),
        ...CreateAnswerInput
      }
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswersResolver],
    }).overrideProvider(AnswersResolver).useValue(mockAnswersResolver).compile();

    resolver = module.get<AnswersResolver>(AnswersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
