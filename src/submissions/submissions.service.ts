import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubmissionInput} from './dto/submission.dto';
import { Submission } from '@prisma/client';

@Injectable()
export class SubmissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async createSubmission(data: CreateSubmissionInput): Promise<{submissions: Submission[], correctCount: number}> {
    const submissions: Submission[] = [];
    let correctCount = 0;

    for (const submissionInput of data.answers) {
      let isCorrect = false;

      switch (submissionInput.questionType) {
        case 'single-answer':
          const submittedAnswerId = submissionInput.answers[0].answerIds[0];

          const correctAnswer = await this.prisma.answer.findFirst({
            where: {
              questionId: submissionInput.questionId,
              isCorrect: true,
            },
          });
        
          isCorrect = correctAnswer !== null && submittedAnswerId === correctAnswer.id;
          break;
        case 'multiple-answer':
          const submittedAnswerIds = submissionInput.answers.map(a => a.answerIds).flat();
          const correctAnswers = await this.prisma.answer.findMany({
            where: {
              questionId: submissionInput.questionId,
              isCorrect: true,
            },
          });
          const correctAnswerIds = correctAnswers.map(a => a.id);
          
          if (submittedAnswerIds.length === correctAnswerIds.length) {
            isCorrect = submittedAnswerIds.every(id => correctAnswerIds.includes(id));
          }
          break;
        case 'text-answer':
          if (submissionInput.answers.length > 0 && submissionInput.answers[0].textAnswer) {
            const submittedText = submissionInput.answers[0].textAnswer;
            const correctText = await this.prisma.answer.findFirst({
              where: {
                questionId: submissionInput.questionId,
                isCorrect: true,
              },
              select: {
                content: true,
              }
            });
  
            isCorrect = correctText !== null && submittedText === correctText.content;
          }
          break;
      }
      const submission = await this.prisma.submission.create({
        data: {
          userId: data.userId,
          questionId: submissionInput.questionId,
          answerId: submissionInput.answers[0].answerIds[0],
          isCorrect: isCorrect,
        },
      });

      submissions.push(submission);
      if (isCorrect) correctCount++;
    }

    return { submissions, correctCount };
  }
}