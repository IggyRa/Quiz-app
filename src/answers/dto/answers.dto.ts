import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
  @Field()
  content: string;
  
  @Field()
  isCorrect: boolean; 

  @Field(() => Int)
  questionId: number;
}