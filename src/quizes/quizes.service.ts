import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Quiz } from './quiz.entity';
import { CreateQuizInput, CreateQuizWithQuestionsInput, UpdateQuizInput } from './dto/quiz.dto';

@Injectable()
export class QuizService {
  constructor(private readonly prisma: PrismaService) {}

  async getQuiz(id: number): Promise<Quiz> {
    return this.prisma.quiz.findUnique({ where: { id } });
  }

  async createQuiz(data: CreateQuizInput): Promise<Quiz> {
    return this.prisma.quiz.create({ data });
  }

  async updateQuiz(id: number, data: UpdateQuizInput): Promise<Quiz> {
    return this.prisma.quiz.update({ where: { id }, data });
  }

  async deleteQuiz(id: number): Promise<Quiz> {
    return this.prisma.quiz.delete({ where: { id } });
  }

  async createQuizWithQuestions(data: CreateQuizWithQuestionsInput): Promise<Quiz> {
    return this.prisma.$transaction(async (prisma) => {
      const quiz = await prisma.quiz.create({ data: { name: data.name } });
  
      for (const questionData of data.questions) {
        const question = await prisma.question.create({
          data: {
            content: questionData.content,
            type: questionData.type,
            quiz: { connect: { id: quiz.id } },
          },
        });
  
        for (const answerData of questionData.answers) {
          await prisma.answer.create({
            data: {
              content: answerData.content,
              isCorrect: answerData.isCorrect,
              question: { connect: { id: question.id } },
            },
          });
        }
      }
  
      return quiz;
    });
  }
}