import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as fs from 'fs';
import helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions: {
      key: fs.readFileSync('./secrets/cert.key'),
      cert: fs.readFileSync('./secrets/cert.crt'),
    },
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.use(helmet());
  await app.listen(3000);

  console.log(`Application is running on: https://localhost:3000`);
}
bootstrap();
