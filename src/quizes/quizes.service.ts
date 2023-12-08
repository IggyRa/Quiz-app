import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Quiz } from './quiz.entity';
import { CreateQuizInput, UpdateQuizInput } from './dto/quiz.dto';

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
}