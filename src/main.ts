import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const cors = {
    origin: ['http://localhost:5000'],
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
  };
  app.enableCors(cors);
  // swagger
  const config = new DocumentBuilder()
    .setTitle('Docs API My Faster Starter')
    .setDescription('swagger url')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document, {
    customSiteTitle: 'Swagger API',
    // customfavIcon:
    //   'https://www.mandirikartukredit.com/uploads/media/merchant/key-visual-hot-offer/default/key-visual-hot-offer/asian-golf--logo-150x150.jpg',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  });

  await app.listen(5000);
}
bootstrap();
