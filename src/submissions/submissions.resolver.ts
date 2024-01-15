import { Resolver, Args, Mutation, Field, ObjectType } from '@nestjs/graphql';
import { SubmissionsService } from './submissions.service';
import { CreateSubmissionInput} from './dto/submission.dto';
import { Submission } from './submission.entity';

@Resolver()
export class SubmissionsResolver {
  constructor(private readonly submissionService: SubmissionsService) {}

  @Mutation(() => SubmissionResult) 
  async createSubmission(@Args('data') data: CreateSubmissionInput): Promise<SubmissionResult> {
    return this.submissionService.createSubmission(data);
  }
}

@ObjectType()
class SubmissionResult {
  @Field(() => [Submission])
  submissions: Submission[];

  @Field()
  correctCount: number;
}