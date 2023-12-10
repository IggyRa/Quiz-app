import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class SubmissionAnswerInput {
  @Field(() => Int)
  questionId: number;

  @Field(() => [Int])
  selectedAnswerIds: number[];
}

@InputType()
export class CreateSubmissionInput {
  @Field(() => Int)
  quizId: number;

  @Field(() => [SubmissionAnswerInput])
  answers: SubmissionAnswerInput[];
}