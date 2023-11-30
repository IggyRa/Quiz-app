import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizesService {
    async findAll(): Promise<Quiz[]>{
        const quiz = new Quiz();
        quiz.id = 1;
        quiz.name="Math quiz";
        quiz.numOfQust=5;
        
        return [quiz];
    }
}
