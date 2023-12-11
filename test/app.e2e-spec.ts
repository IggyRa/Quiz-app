import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { QuizesModule } from 'src/quizes/quizes.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { QuestionsModule } from 'src/questions/questions.module';
import { AnswersModule } from 'src/answers/answers.module';
import { SubmissionsModule } from 'src/submissions/submissions.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { QuestionsService } from 'src/questions/questions.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule,QuizesModule,PrismaModule,QuestionsModule,
                AnswersModule,SubmissionsModule],
      providers:[PrismaService,QuestionsService]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
