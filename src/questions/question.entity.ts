import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Quiz } from '../quizes/quiz.entity';
import { Answer } from '../answers/answer.entity';

@ObjectType()
export class Question {
  @Field(() => ID)
  id: number;

  @Field()
  content: string;

  @Field()
  type: string; // SingleCorrect, MultipleCorrect, Sorting, PlainTextAnswer, etc.

  @Field(() => Quiz, { nullable: true })
  quiz?: Quiz;

  @Field(() => [Answer], { nullable: true })
  answers?: Answer[];
}