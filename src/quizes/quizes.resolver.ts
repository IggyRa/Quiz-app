import { Resolver, Query } from '@nestjs/graphql';
import { QuizesService } from './quizes.service';
import { Quiz } from './quiz.entity';

@Resolver(of => Quiz)
export class QuizesResolver {
    constructor(private quizesService: QuizesService){}

    @Query(returns => [Quiz])
    quizes(): Promise<Quiz[]> {
        return this.quizesService.findAll();
    }
}
