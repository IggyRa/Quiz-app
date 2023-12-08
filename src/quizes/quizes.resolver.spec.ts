import { Test, TestingModule } from '@nestjs/testing';
import { QuizResolver } from './quizes.resolver';

describe('QuizesResolver', () => {
  let resolver: QuizResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizResolver],
    }).compile();

    resolver = module.get<QuizResolver>(QuizResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
