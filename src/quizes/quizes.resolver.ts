import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { QuizService } from './quizes.service';
import { Quiz } from './quiz.entity';
import { CreateQuizInput, UpdateQuizInput } from './dto/quiz.dto';

@Resolver(() => Quiz)
export class QuizResolver {
  constructor(private readonly quizService: QuizService) {}

  @Query(() => Quiz)
  async getQuiz(@Args('id') id: number): Promise<Quiz> {
    return this.quizService.getQuiz(id);
  }

  @Query(() => Quiz)
  async getQuizQuestions(@Args('quizId') quizId: number) {
    return this.quizService.getQuestionsForQuiz(quizId);
  }

  @Mutation(() => Quiz)
  async createQuiz(@Args('data') data: CreateQuizInput): Promise<Quiz> {
    return this.quizService.createQuiz(data);
  }

  @Mutation(() => Quiz)
  async updateQuiz(@Args('id') id: number, @Args('data') data: UpdateQuizInput): Promise<Quiz> {
    return this.quizService.updateQuiz(id, data);
  }

  @Mutation(() => Quiz)
  async deleteQuiz(@Args('id') id: number): Promise<Quiz> {
    return this.quizService.deleteQuiz(id);
  }
}