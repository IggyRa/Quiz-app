import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Question } from './question.entity';
import { QuestionsService } from './questions.service';
import { CreateQuestionInput, UpdateQuestionInput } from './dto/question.dto';

@Resolver(()=>Question)
export class QuestionsResolver {
    constructor(private readonly questionService: QuestionsService) {}
    
    @Query(() => [Question])  // Specify the return type as an array of Question
    async getQuizQuestions(@Args('quizId') quizId: number): Promise<Question[]> {
      return this.questionService.getQuizQuestions(quizId);
    }
  
    @Mutation(() => Question)
    async createQuestion(@Args('data') data: CreateQuestionInput):Promise<Question> {
      return this.questionService.createQuestion(data);
    }

    @Mutation(() => Question)
    async updateQuestion(@Args('id') id: number, @Args('data') data: UpdateQuestionInput): Promise<Question> {
      return this.questionService.updateQuestion(id, data);
    }

    @Mutation(() => Question)
    async deleteQuestion(@Args('id') questionId: number): Promise<Question> {
    return this.questionService.deleteQuestion(questionId);
  }
}
