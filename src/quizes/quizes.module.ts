import { Module } from '@nestjs/common';
import { QuizService } from './quizes.service';
import { QuizResolver } from './quizes.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [QuizService, QuizResolver]
})
export class QuizesModule {}
