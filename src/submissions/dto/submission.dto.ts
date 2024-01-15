import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
class IndividualAnswerInput {
  @Field(() => [Int])
  answerIds: number[]; // For single and multiple choice questions

  @Field({ nullable: true })
  textAnswer?: string; // For open-answer questions
}

@InputType()
export class SubmissionAnswerInput {
  @Field(() => Int)
  questionId: number;

  @Field()
  questionType: string;

  @Field(() => [IndividualAnswerInput])
  answers: IndividualAnswerInput[];
}

@InputType()
export class CreateSubmissionInput {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  quizId: number;

  @Field(() => [SubmissionAnswerInput])
  answers: SubmissionAnswerInput[];
}