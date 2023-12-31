import { Test, TestingModule } from '@nestjs/testing';
import { SubmissionsResolver } from './submissions.resolver';

describe('SubmissionsResolver', () => {
  let resolver: SubmissionsResolver;
  const mockSubmissionResolver ={
    createAnswer: jest.fn(CreateSubmissionInput =>{
      return{
        id: Date.now(),
        ...CreateSubmissionInput
      }
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubmissionsResolver],
    }).overrideProvider(SubmissionsResolver).useValue(mockSubmissionResolver).compile();

    resolver = module.get<SubmissionsResolver>(SubmissionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
