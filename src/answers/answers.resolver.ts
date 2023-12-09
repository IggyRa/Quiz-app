import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { AnswersService } from './answers.service';
import { Answer } from './answer.entity';
import { CreateAnswerInput } from './dto/answers.dto';

@Resolver(()=>Answer)
export class AnswersResolver {
    constructor(private readonly answerService: AnswersService) {}

    @Query(() => [Answer])
    async getAnswersForQuestion(@Args('questionId') questionId: number): Promise<Answer[]> {
      return this.answerService.getAnswersForQuestion(questionId);
    }

    @Mutation(() => Answer)
    async createAnswer(@Args('data') data: CreateAnswerInput):Promise<Answer> {
      return this.answerService.createAnswer(data);
    }
}
