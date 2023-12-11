import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SubmissionAnswerInput } from './dto/submission.dto';

@Injectable()
export class SubmissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async createSubmission(data: SubmissionAnswerInput){
    // Retrieve the correct answer for the question
    const fetchQuestion = await this.prisma.question.findUnique({
        where: {
          id: data.questionId,
        },
    })
    // Check if the submitted answer is correct

    const fetchAnswer = await this.prisma.answer.findFirst({
        where: {
          question:fetchQuestion,
          isCorrect: true
        }
    })
    const isCorrect = fetchAnswer.id === data.answerId;

    // Record the user's submission
    const submission = await this.prisma.submission.create({
      data: {
        userId:data.userId,
        questionId: data.questionId,
        answerId: data.answerId,
        isCorrect: isCorrect,
      },
    });

    return submission
  }

}