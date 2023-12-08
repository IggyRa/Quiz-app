import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuizInput {
  @Field()
  name: string;
}

@InputType()
export class UpdateQuizInput {
  @Field({ nullable: true })
  name?: string;
}