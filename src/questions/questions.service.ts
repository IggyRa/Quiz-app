import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Question } from './question.entity';
import { CreateQuestionInput, UpdateQuestionInput } from './dto/question.dto';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  async getQuestion(id: number): Promise<Question> {
    return this.prisma.question.findUnique({     
    where: { id },
    include: {
      answers: true,
    }, });
  }

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

  async getQuizQuestions(quizId: number): Promise<Question[]> {
    return this.prisma.question.findMany({
      where: { quizId },
      include: {
        answers: true,
      },
    });
  }

  async updateQuestion(id: number, data: UpdateQuestionInput): Promise<Question> {
    return this.prisma.question.update({ 
      where: { id },
      include: { 
        quiz: true 
      },
        data
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
