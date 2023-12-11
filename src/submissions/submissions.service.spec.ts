import { Test, TestingModule } from '@nestjs/testing';
import { SubmissionsService } from './submissions.service';

describe('SubmissionsService', () => {
  let service: SubmissionsService;

  const mockSubmissionService ={
    create: jest.fn(CreateSubmissionInput =>{
      return{
        id: Date.now(),
        ...CreateSubmissionInput
      }
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubmissionsService],
    }).overrideProvider(SubmissionsService).useValue(mockSubmissionService).compile();

    service = module.get<SubmissionsService>(SubmissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a submission', async () => {
    mockSubmissionService.create.mockResolvedValueOnce({
      id: Date.now(),
      userId: 1,
      questionId: 1,
      answerId: 3,
      isCorrect: true,
    });

    const submissionData = {
      userId: 1,
      questionId: 1,
      answerId: 3,
    };

    const createdSubmission = await mockSubmissionService.create(submissionData);

    expect(createdSubmission).toEqual({
      id: expect.any(Number),
      userId: 1,
      questionId: 1,
      answerId: 3,
      isCorrect: true,
    });
  });
});
