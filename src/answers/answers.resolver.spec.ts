import { Test, TestingModule } from '@nestjs/testing';
import { AnswersResolver } from './answers.resolver';
import { AnswersService } from './answers.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('AnswersResolver', () => {
  let resolver: AnswersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AnswersService,PrismaService],
      providers: [AnswersResolver],
    }).compile();

    resolver = module.get<AnswersResolver>(AnswersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
