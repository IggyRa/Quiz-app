import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Question } from './question.entity';
import { QuestionsService } from './questions.service';
import { CreateQuestionInput } from './dto/question.dto';

@Resolver(()=>Question)
export class QuestionsResolver {
    constructor(private readonly questionService: QuestionsService) {}

    @Mutation(() => Question)
    async createQuestion(@Args('data') data: CreateQuestionInput):Promise<Question> {
      return this.questionService.createQuestion(data);
    }
}
