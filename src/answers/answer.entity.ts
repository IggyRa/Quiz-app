import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Question } from '../questions/question.entity';

@ObjectType()
export class Answer {
  @Field(() => ID)
  id: number;

  @Field()
  content: string;

  @Field()
  isCorrect: boolean;

  @Field(() => Question, { nullable: true })
  question?: Question;
}