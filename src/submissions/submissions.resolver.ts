import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { SubmissionsService } from './submissions.service';

@Resolver()
export class SubmissionsResolver {
  constructor(private readonly submissionService: SubmissionsService) {}

}