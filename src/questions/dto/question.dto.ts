import { InputType, Field, Int } from '@nestjs/graphql';
import { IsIn, isIn } from 'class-validator';

const allowedQuestionTypes = ['single-answer', 'multiple-answer', 'open-answer', 'order-answer'];

@InputType()
export class CreateQuestionInput {
  @Field()
  content: string;
  
  @Field()
  @IsIn(allowedQuestionTypes, { message: 'Invalid question type' })
  type: string; 

  @Field(() => Int)
  quizId: number;
}

@InputType()
export class UpdateQuestionInput {
  @Field({ nullable: true })
  content?: string;

  @IsIn(allowedQuestionTypes, { message: 'Invalid question type' })
  @Field({ nullable: true })
  type?: string; 
}