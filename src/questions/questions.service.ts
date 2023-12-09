import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Question } from './question.entity';
import { CreateQuestionInput } from './dto/question.dto';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  async createQuestion(data: CreateQuestionInput): Promise<Question> {
    const createdQuestion = await this.prisma.question.create({
    include: { quiz: true },   
    data: {
        content: data.content,
        type: data.type,
        quiz: { connect: { id: data.quizId } },
      },
    });

    return createdQuestion;
  }

  async getQuestionsForQuiz(id: number): Promise<Question[]> {
    return this.prisma.question.findMany({
      where: {
        quizId: id,
      },
      include: {
        quiz: true
      },
    });
  }

  async deleteQuestion(questionId: number): Promise<Question> {
    return this.prisma.question.delete({ 
      where: { 
        id: questionId, 
      },
      include: { 
        quiz: true 
      },
    });
  }
}
