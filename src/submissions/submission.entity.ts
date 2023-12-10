import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Answer } from 'src/answers/answer.entity';
import { Question } from 'src/questions/question.entity';

@ObjectType()
export class Submission {
  @Field(() => ID)
  id: number;

  @Field(() => Question, { nullable: false })
  question: Question;

  @Field(() => [Answer])
  selectedAnswers: Answer[];
}