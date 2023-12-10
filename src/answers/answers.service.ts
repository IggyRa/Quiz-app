import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAnswerInput } from './dto/answers.dto';
import { Answer } from './answer.entity';

@Injectable()
export class AnswersService {
    constructor(private readonly prisma: PrismaService) {}

    async createAnswer(data: CreateAnswerInput): Promise<Answer> {
        const createdAnswer = await this.prisma.answer.create({
          include: {
            question:true
        },  
        data: {
            content: data.content,
            isCorrect: data.isCorrect,
            question: { connect: { id: data.questionId } },
          },
        });
    
        return createdAnswer;
    }

    async getAnswersForQuestion(id: number): Promise<Answer[]> {
        return this.prisma.answer.findMany({
          where: {
            questionId: id,
          },
          include: {
            question: true,
        }, 
        });
      }
}
