import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateQuestionInput {
  @Field()
  content: string;
  
  @Field()
  type: string; 

  @Field(() => Int)
  quizId: number;
}

@InputType()
export class UpdateQuestionInput {
  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  type?: string; 
}