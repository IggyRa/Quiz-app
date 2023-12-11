import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quizes.service';

describe('QuizService', () => {
  let service: QuizService;

  const mockQuizService = {
    createQuiz: jest.fn(CreateQuizInput => {
      return {
        id: Date.now(),
        ...CreateQuizInput,
      };
    }),
    updateQuiz: jest.fn((id, UpdateQuizInput) => {
      return {
        id,
        ...UpdateQuizInput,
      };
    }),
    deleteQuiz: jest.fn((id) => {
      return {
        id,
        deleted: true,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizService],
    }).overrideProvider(QuizService).useValue(mockQuizService).compile();

    service = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a quiz', () => {
    const CreateQuizInput = { name: 'NewQuiz' };
    expect(service.createQuiz(CreateQuizInput)).toEqual({
      id: expect.any(Number),
      name: 'NewQuiz',
    });
  });

  it('should edit a quiz', () => {
    const quizId = 1;
    const UpdateQuizInput = { name: 'UpdatedQuiz' };
    expect(service.updateQuiz(quizId, UpdateQuizInput)).toEqual({
      id: quizId,
      name: 'UpdatedQuiz',
    });
  });

  it('should delete a quiz', () => {
    const quizId = 1;
    expect(service.deleteQuiz(quizId)).toEqual({
      id: quizId,
      deleted: true,
    });
  });
});