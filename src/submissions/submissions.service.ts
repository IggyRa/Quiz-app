import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Submission } from './submission.entity';
import { CreateSubmissionInput } from './dto/submission.dto';

@Injectable()
export class SubmissionsService {
  constructor(private readonly prisma: PrismaService) {}
}