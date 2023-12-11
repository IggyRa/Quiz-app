import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class SubmissionAnswerInput {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  questionId: number;

  @Field(() => Int)
  answerId: number;
}

@InputType()
export class CreateSubmissionInput {
  @Field(() => Int)
  quizId: number;

  @Field(() => [SubmissionAnswerInput])
  answers: SubmissionAnswerInput[];
}