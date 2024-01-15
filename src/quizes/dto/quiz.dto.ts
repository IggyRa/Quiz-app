import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsString, ValidateNested } from 'class-validator';

@InputType()
export class CreateQuizInput {
  @IsString()
  @Field()
  name: string;
}

@InputType()
export class UpdateQuizInput {
  @IsString()
  @Field({ nullable: true })
  name?: string;
}

@InputType()
export class CreateQuizAnswerInput {
  @IsString()
  @Field()
  content: string;

  @IsBoolean()
  @Field()
  isCorrect: boolean;
}

@InputType()
class CreateQuizQuestionInput {
  @IsString()
  @Field()
  content: string;

  @IsString()
  @Field()
  type: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizAnswerInput)
  @Field(() => [CreateQuizAnswerInput])
  answers: CreateQuizAnswerInput[];
}

@InputType()
export class CreateQuizWithQuestionsInput {
  @IsString()
  @Field()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizQuestionInput)
  @Field(() => [CreateQuizQuestionInput])
  questions: CreateQuizQuestionInput[];
}