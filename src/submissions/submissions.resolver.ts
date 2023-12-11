import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { SubmissionsService } from './submissions.service';
import { SubmissionAnswerInput } from './dto/submission.dto';
import { Question } from 'src/questions/question.entity';
import { Submission } from './submission.entity';

@Resolver()
export class SubmissionsResolver {
  constructor(private readonly submissionService: SubmissionsService) {}

  @Mutation(()=>Submission) 
  async createSubmission( @Args('data') data: SubmissionAnswerInput):Promise<Submission> {
    return this.submissionService.createSubmission(data);
  }
}