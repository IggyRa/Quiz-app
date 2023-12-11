import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsService } from './questions.service';

describe('QuestionsService', () => {
  let service: QuestionsService;

  const mockQuestionService = {
    createQuestion: jest.fn(CreateQuestionInput => {
      return {
        id: Date.now(),
        ...CreateQuestionInput,
      };
    }),
    updateQuestion: jest.fn((id, UpdateQuestionInput) => {
      return {
        id,
        ...UpdateQuestionInput,
      };
    }),
    deleteQuestion: jest.fn((id) => {
      return {
        id,
        deleted: true,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionsService],
    }).overrideProvider(QuestionsService).useValue(mockQuestionService).compile();

    service = module.get<QuestionsService>(QuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a question', () => {
    const CreateQuestionInput = { content: "What's 2+2?", type: "single answer", quizId: 2 }
    expect(service.createQuestion(CreateQuestionInput)).toEqual({
      id: expect.any(Number),
      content: "What's 2+2?",
      type: "single answer",
      quizId:2,
    });
  });

  it('should update a question', () => {
    const questionId = 1;
    const UpdateQuestionInput = { content: "What's 3+3?", type: "multiple choice" };
    expect(service.updateQuestion(questionId, UpdateQuestionInput)).toEqual({
      id: questionId,
      content: "What's 3+3?",
      type: "multiple choice",
    });
  });

  it('should delete a question', () => {
    const questionId = 1;
    expect(service.deleteQuestion(questionId)).toEqual({
      id: questionId,
      deleted: true,
    });
  });
});