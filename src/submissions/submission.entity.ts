import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Answer } from '../answers/answer.entity';
import { Question } from '../questions/question.entity';

@ObjectType()
export class Submission {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  questionId: number;

  @Field()
  answerId: number;

  @Field()
  isCorrect: boolean;
}
